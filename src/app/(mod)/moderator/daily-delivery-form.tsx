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
import { Customer } from "@/generated/prisma";
import {
  addDailyDeliveryRecord,
  DeliveryRecord,
  getCustomerDataById,
} from "@/actions/mod-delivery.action";
import { Loader2 } from "lucide-react";
import { useModeratorStore } from "@/lib/moderator-state";
import { toast } from "sonner";

// FORM SCHEMA
const formSchema = z.object({
  customer_id: z.string().min(2).max(50),
  filled_bottles: z.number().min(1),
  empty_bottles: z.number().min(1),
  payment: z.number().min(0),
});

// MAIN COMPONENT
export const DailyDeliveryForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer_id: "",
      filled_bottles: undefined,
      empty_bottles: undefined,
      payment: undefined,
    },
  });

  // STATES
  const [customerData, setCustomerData] = useState<Customer | null>(null);
  const { moderator } = useModeratorStore();

  if (!moderator) {
    // Handle moderator middleware or redirect
  }

  const current_balance =
    customerData &&
    (customerData?.bottle_price * form.watch("filled_bottles") -
      form.watch("payment") ||
      0);

  const advance_payment =
    customerData &&
    current_balance &&
    Math.abs(customerData?.balance + current_balance);

  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // FORM SUBMISSION HANDLER
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setSubmitting(true);

    // Check if customer data is available
    if (!customerData) {
      alert("Please search for a customer first.");
      return;
    }

    // Calculate balance
    const current_balance =
      customerData.bottle_price * values.filled_bottles - values.payment || 0;
    const balance = current_balance + customerData.balance || 0;

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

    const deliveryRecord = await addDailyDeliveryRecord(data);
    console.log({ deliveryRecord });

    setSubmitting(false);

    if (deliveryRecord) {
      toast.success("Delivery record added successfully!");
      form.reset();
      setCustomerData(null);
    } else {
      alert("Failed to add delivery record. Please try again.");
    }
  }

  const handleCustomerSearch = async () => {
    setLoading(true);
    const data = await getCustomerDataById(form.getValues("customer_id"));
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
                    >
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
                          // Convert to number or null if empty
                          field.onChange(value ? parseFloat(value) : null);
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
                          // Convert to number or null if empty
                          field.onChange(value ? parseFloat(value) : null);
                        }}
                      />
                    </div>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

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
                          // Convert to number or null if empty
                          field.onChange(value ? parseFloat(value) : null);
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
            <div>
              <h1 className="text-xl font-bold">Balance:</h1>
              <p>
                <span className="font-bold">Previous Balance = </span>{" "}
                {customerData?.balance || 0}/-
              </p>
              <p>
                <span className="font-bold">Current Balance = </span>{" "}
                {current_balance}
                /-
              </p>
              {current_balance &&
                customerData.balance + current_balance < 0 && (
                  <p>
                    <span className="font-bold">Advance Amount = </span>{" "}
                    {advance_payment}/-
                  </p>
                )}
            </div>
          )}

          <Button
            disabled={!customerData || submitting}
            type="submit"
            className="w-full"
          >
            Submit
            {submitting && <Loader2 className="size-4 animate-spin" />}
          </Button>
        </form>
      </Form>
    </div>
  );
};
