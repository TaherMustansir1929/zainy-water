"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { area_list, customer } from "@/constants/data";
import { useState } from "react";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  customer_id: z.string().min(2).max(50),
  filled_bottles: z.coerce.number().min(1).nullish(),
  empty_bottles: z.coerce.number().min(1).nullish(),
  payment: z.coerce.number().min(0).nullish(),
});

const ModeratorPage = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customer_id: "",
      filled_bottles: null,
      empty_bottles: null,
      payment: null,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  const [customerData, setCustomerData] = useState<Record<string, any> | null>(
    null
  );

  const current_balance =
    customerData?.bottle_price * form.watch("filled_bottles") -
      form.watch("payment") || 0;

  const advance_payment = Math.abs(customerData?.balance + current_balance)

  const handleCustomerSearch = () => {
    const data = customer;

    if (data.id === form.getValues("customer_id")) {
      setCustomerData(data);
    } else {
      setCustomerData(null);
      alert("Customer not found");
    }
  };

  const programmingLanguages = [
  {
    id: "1",
    name: "JavaScript",
    releaseYear: "1995",
    developer: "Brendan Eich",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".js",
    latestVersion: "ES2021",
    popularity: "High",
  },
  {
    id: "2",
    name: "Python",
    releaseYear: "1991",
    developer: "Guido van Rossum",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".py",
    latestVersion: "3.10",
    popularity: "High",
  },
  {
    id: "3",
    name: "Java",
    releaseYear: "1995",
    developer: "James Gosling",
    typing: "Static",
    paradigm: "Object-oriented",
    extension: ".java",
    latestVersion: "17",
    popularity: "High",
  },
  {
    id: "4",
    name: "C++",
    releaseYear: "1985",
    developer: "Bjarne Stroustrup",
    typing: "Static",
    paradigm: "Multi-paradigm",
    extension: ".cpp",
    latestVersion: "C++20",
    popularity: "High",
  },
  {
    id: "5",
    name: "Ruby",
    releaseYear: "1995",
    developer: "Yukihiro Matsumoto",
    typing: "Dynamic",
    paradigm: "Multi-paradigm",
    extension: ".rb",
    latestVersion: "3.0",
    popularity: "Low",
  },
]

  return (
    <main className="min-h-screen w-full flex flex-col my-4 gap-y-4 p-2">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center">Daily Delivery Entry</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="customer_id"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Customer ID</FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2">
                        <Input {...field} />
                        <Button type="button" onClick={handleCustomerSearch}>
                          Enter
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
                      <span className="font-bold">ID:</span> {customerData.id}
                    </p>
                    <p>
                      <span className="font-bold">Name:</span>{" "}
                      {customerData.name}
                    </p>
                    <p>
                      <span className="font-bold">Address:</span>{" "}
                      {customerData.address}
                    </p>
                    <p>
                      <span className="font-bold">Phone:</span>{" "}
                      {customerData.phone}
                    </p>
                    <p>
                      <span className="font-bold">Bottle Price:</span>{" "}
                      {customerData.bottle_price}/-
                    </p>
                  </CardContent>
                </Card>
              )}

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
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                          />
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

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
                    <span className="font-bold">Current Balance = </span> {current_balance}
                    /-
                  </p>
                  {customerData.balance + current_balance < 0 && (
                    <p>
                      <span className="font-bold">Advance Amount = </span>{" "}
                      {advance_payment}/-
                    </p>
                  )}
                </div>
              )}

              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <div>
      <div className="bg-background overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="h-9 py-2">Date</TableHead>
              <TableHead className="h-9 py-2">C. Code</TableHead>
              <TableHead className="h-9 py-2">Name</TableHead>
              <TableHead className="h-9 py-2">Address</TableHead>
              <TableHead className="h-9 py-2">Filled</TableHead>
              <TableHead className="h-9 py-2">Empty</TableHead>
              <TableHead className="h-9 py-2">Payment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {programmingLanguages.map((language) => (
              <TableRow key={language.id}>
                <TableCell className="py-2 font-medium">
                  {language.name}
                </TableCell>
                <TableCell className="py-2">{language.releaseYear}</TableCell>
                <TableCell className="py-2">{language.developer}</TableCell>
                <TableCell className="py-2">{language.typing}</TableCell>
                <TableCell className="py-2">{language.paradigm}</TableCell>
                <TableCell className="py-2">{language.extension}</TableCell>
                <TableCell className="py-2">{language.latestVersion}</TableCell>
                <TableCell className="py-2">{language.popularity}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Dense table
      </p>
    </div>
    </main>
  );
};
export default ModeratorPage;
