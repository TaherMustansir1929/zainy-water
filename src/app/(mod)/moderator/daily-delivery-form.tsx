"use client";

import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Customer } from "@prisma/client";
import {
  addDailyDeliveryRecord,
  DeliveryRecord,
  getCustomerDataById,
} from "@/actions/moderator/mod-delivery.action";
import { Loader2, Search, SendHorizonal } from "lucide-react";
import { useModeratorStore } from "@/lib/moderator-state";
import { toast } from "sonner";

// FORM SCHEMA
const formSchema = z.object({
  customer_id: z.string().min(2).max(50),
  filled_bottles: z.number().min(0),
  empty_bottles: z.number().min(0),
  payment: z.number().min(0),
});

// MAIN COMPONENT
export const DailyDeliveryForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer_id: "",
      filled_bottles: 0,
      empty_bottles: 0,
      payment: 0,
    },
  });

  // STATES
  const [customerData, setCustomerData] = useState<Customer | null>(null);
  const moderator = useModeratorStore((state) => state.moderator);

  // Calculate balances based on payment flow
  const calculateBalances = () => {
    if (!customerData) {
      return {
        previous_balance: 0,
        current_balance: 0,
        advance_payment: 0,
      };
    }

    const filled_bottles = form.watch("filled_bottles") || 0;
    const payment = form.watch("payment") || 0;

    // Previous balance from database (positive = customer owes, negative = customer has advance)
    const db_previous_balance = customerData.balance;

    // Current balance from today's delivery
    const raw_current_balance = customerData.bottle_price * filled_bottles;

    let remaining_payment = payment;
    let current_balance = raw_current_balance;
    let previous_balance = db_previous_balance;
    let advance_payment = 0;

    // First, deduct payment from current balance
    if (remaining_payment > 0 && current_balance > 0) {
      const deduction = Math.min(remaining_payment, current_balance);
      current_balance -= deduction;
      remaining_payment -= deduction;
    }

    // Then, deduct from previous balance if it's positive (customer owes money)
    if (remaining_payment > 0 && previous_balance > 0) {
      const deduction = Math.min(remaining_payment, previous_balance);
      previous_balance -= deduction;
      remaining_payment -= deduction;
    }

    // If payment is still remaining after clearing both balances, it becomes advance
    if (remaining_payment > 0) {
      advance_payment = remaining_payment;
      // If customer already had negative balance (advance), add to it
      if (previous_balance <= 0) {
        advance_payment += Math.abs(previous_balance);
        previous_balance = 0;
      }
    }

    // If payment is less than current balance, add remaining current balance to previous balance
    if (payment < raw_current_balance) {
      previous_balance += current_balance;
    }

    return {
      previous_balance: Math.max(0, previous_balance),
      current_balance: Math.max(0, current_balance),
      advance_payment:
        advance_payment +
        (db_previous_balance < 0 && remaining_payment === 0
          ? Math.abs(db_previous_balance)
          : 0),
    };
  };

  const { previous_balance, current_balance, advance_payment } =
    calculateBalances();

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // FORM SUBMISSION HANDLER
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);

    // Check if customer data is available
    if (!customerData) {
      alert("Please search for a customer first.");
      setSubmitting(false);
      return;
    }

    // Calculate final balance for submission
    const raw_current_balance =
      customerData.bottle_price * values.filled_bottles;
    const payment = values.payment || 0;
    const db_previous_balance = customerData.balance;

    let remaining_payment = payment;
    let final_current_balance = raw_current_balance;
    let final_previous_balance = db_previous_balance;

    // Apply payment logic
    if (remaining_payment > 0 && final_current_balance > 0) {
      const deduction = Math.min(remaining_payment, final_current_balance);
      final_current_balance -= deduction;
      remaining_payment -= deduction;
    }

    if (remaining_payment > 0 && final_previous_balance > 0) {
      const deduction = Math.min(remaining_payment, final_previous_balance);
      final_previous_balance -= deduction;
      remaining_payment -= deduction;
    }

    // Calculate final balance (negative means customer has advance)
    let balance = final_previous_balance + final_current_balance;
    if (remaining_payment > 0) {
      balance = -(
        remaining_payment +
        (db_previous_balance < 0 ? Math.abs(db_previous_balance) : 0)
      );
    }

    // Prepare data to be submitted
    const data: DeliveryRecord = {
      payment: values.payment || 0,
      balance,
      delivery_date: new Date(),
      moderator_id: moderator?.id || "cmdwsek000000ijja4qqbsa8t",
      customer_id: customerData.customer_id,
      filled_bottles: values.filled_bottles,
      empty_bottles: values.empty_bottles,
    };
    console.log({ data });

    try {
      const deliveryRecord = await addDailyDeliveryRecord(data);
      console.log({ deliveryRecord });

      if (deliveryRecord) {
        form.reset();
        setCustomerData(null);
        toast.success("Delivery record added successfully!");
      } else {
        alert("Failed to add delivery record. Please try again.");
      }
    } catch (error) {
      console.error("Error adding delivery record:", error);
      alert("Failed to add delivery record. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  const handleCustomerSearch = async () => {
    setLoading(true);
    const data = await getCustomerDataById(
      form.getValues("customer_id"),
      moderator?.areas || []
    );
    setLoading(false);

    if (data) {
      setCustomerData(data);
      toast.success("Customer found successfully!");
    } else {
      setCustomerData(null);
      alert("Customer not found");
    }
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* CUSTOMER ID */}
          <FormField
            control={form.control}
            name="customer_id"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Enter Customer ID</FormLabel>
                <FormControl>
                  <div className="flex items-center space-x-2">
                    <Input {...field} />
                    <Button
                      type="button"
                      onClick={handleCustomerSearch}
                      disabled={loading}
                      className="shadow-lg shadow-blue-300/40 hover:shadow-xl hover:shadow-blue-400/50"
                    >
                      <Search className="size-4" />
                      Search Customer
                      {loading && <Loader2 className="animate-spin" />}
                    </Button>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {customerData && (
            <Card>
              <CardHeader>
                <CardTitle>Customer Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>
                  <span className="font-bold">ID:</span>{" "}
                  {customerData.customer_id}
                </p>
                <p>
                  <span className="font-bold">Name:</span> {customerData.name}
                </p>
                <p>
                  <span className="font-bold">Address:</span>{" "}
                  {customerData.address}
                </p>
                <p>
                  <span className="font-bold">Phone:</span> {customerData.phone}
                </p>
                <p>
                  <span className="font-bold">Bottle Price:</span>{" "}
                  {customerData.bottle_price}/-
                </p>
              </CardContent>
            </Card>
          )}

          <div className="grid grid-cols-2 gap-4">
            {/* FILLED BOTTLES */}
            <FormField
              control={form.control}
              name="filled_bottles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Filled Bottles</FormLabel>
                  <FormControl>
                    <div className="*:not-first:mt-2">
                      <div className="relative">
                        <Input
                          {...field}
                          className="peer ps-6 pe-12"
                          placeholder="00"
                          type="number"
                          onChange={(e) => {
                            const value = e.target.value;
                            // Convert to number or 0 if empty
                            field.onChange(value ? parseFloat(value) : 0);
                          }}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* EMPTY BOTTLES */}
            <FormField
              control={form.control}
              name="empty_bottles"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Empty Bottles</FormLabel>
                  <FormControl>
                    <div className="*:not-first:mt-2">
                      <div className="relative">
                        <Input
                          {...field}
                          className="peer ps-6 pe-12"
                          placeholder="00"
                          type="number"
                          onChange={(e) => {
                            const value = e.target.value;
                            // Convert to number or 0 if empty
                            field.onChange(value ? parseFloat(value) : 0);
                          }}
                        />
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* PAYMENT */}
          <FormField
            control={form.control}
            name="payment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Payment</FormLabel>
                <FormControl>
                  <div className="*:not-first:mt-2">
                    <div className="relative">
                      <Input
                        {...field}
                        className="peer ps-6 pe-12"
                        placeholder="00"
                        type="number"
                        onChange={(e) => {
                          const value = e.target.value;
                          // Convert to number or 0 if empty
                          field.onChange(value ? parseFloat(value) : 0);
                        }}
                      />
                      <span className="text-muted-foreground pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-sm peer-disabled:opacity-50">
                        PKR
                      </span>
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {customerData && (
            <div className="space-y-2 border border-gray-200 p-4 rounded-xl shadow-md">
              <h1 className="text-xl font-bold underline">Balance Summary:</h1>

              <p>
                <span className="font-bold">Today&apos;s Bill:</span>{" "}
                {(form.watch("filled_bottles") || 0) *
                  customerData.bottle_price}
                /-
              </p>
              {(form.watch("payment") || 0) > 0 && (
                <p>
                  <span className="font-bold">Payment Received:</span>{" "}
                  {form.watch("payment")}/-
                </p>
              )}
              <p>
                <span className="font-bold">Total Remaining Balance:</span>{" "}
                {previous_balance}/-
              </p>
              <div className="border-t pt-2 border-gray-500">
                <p>
                  <span className="font-bold">Previous Balance:</span>{" "}
                  {customerData.balance > 0
                    ? `${customerData.balance}/- (Customer owes)`
                    : customerData.balance < 0
                    ? `${Math.abs(customerData.balance)}/- (Advance paid)`
                    : "0/- (Clear)"}
                </p>
                <p>
                  <span className="font-bold">Remaining Current Balance:</span>{" "}
                  {current_balance}/-
                </p>
                <p>
                  <span className="font-bold">Advance Amount:</span>{" "}
                  {advance_payment}/-
                </p>
              </div>
            </div>
          )}

          <Button
            disabled={!customerData || submitting}
            type="submit"
            className="w-full bg-primary disabled:opacity-100 disabled:hover:cursor-not-allowed shadow-lg shadow-blue-300/40 hover:shadow-xl hover:shadow-blue-400/50 font-bold"
          >
            Submit
            <SendHorizonal className="size-4" />
            {submitting && <Loader2 className="size-4 animate-spin" />}
          </Button>
        </form>
      </Form>
    </div>
  );
};
