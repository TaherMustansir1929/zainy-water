"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import { Delivery } from "@prisma/client";
import { format } from "date-fns";
import { useModeratorStore } from "@/lib/moderator-state";
import {
  getCustomerById,
  getDailyDeliveryRecords,
} from "@/actions/mod-delivery.action";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

type DeliveryTableData = {
  delivery: Delivery;
  name: string;
  address: string;
};

export const DailyDeliveryTable = () => {
  const [listLoading, setListLoading] = useState(false);

  const [deliveries, setDeliveries] = useState<DeliveryTableData[]>([]);
  const { moderator } = useModeratorStore();

  const getCustomer = async (id: string) => {
    return await getCustomerById(id);
  };

  const fetchDeliveries = async () => {
    setListLoading(true);
    // Fetch deliveries for the current moderator
    const delivery_data = await getDailyDeliveryRecords(
      moderator?.id || "cmdwsek000000ijja4qqbsa8t"
    );

    setListLoading(false);

    if (!delivery_data) return;

    setDeliveries(
      await Promise.all(
        delivery_data.map(async (delivery) => {
          const customer = await getCustomer(delivery.customer_id);

          return {
            delivery,
            name: customer?.name || "Unknown Customer",
            address: customer?.address || "Unknown Address",
          };
        })
      )
    );
  };

  return (
    <div className="w-full max-w-full">
      <div className="w-full flex justify-end mb-4">
        <Button variant={"outline"} onClick={fetchDeliveries} className="">
          {deliveries.length > 0 ? "Refresh" : "Show"} List
          {listLoading && <Loader2 className="ml-2 h-4 w-4 animate-spin" />}
        </Button>
      </div>
      <div className="bg-background overflow-x-auto rounded-md border">
        <Table className="min-w-full">
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="h-9 py-2 min-w-[100px]">Date</TableHead>
              <TableHead className="h-9 py-2 min-w-[80px]">C.Code</TableHead>
              <TableHead className="h-9 py-2 min-w-[120px]">Name</TableHead>
              <TableHead className="h-9 py-2 min-w-[150px]">Address</TableHead>
              <TableHead className="h-9 py-2 min-w-[60px]">Filled</TableHead>
              <TableHead className="h-9 py-2 min-w-[60px]">Empty</TableHead>
              <TableHead className="h-9 py-2 min-w-[80px]">Payment</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {deliveries.map(({ delivery, name, address }) => (
              <TableRow key={delivery.id}>
                <TableCell className="py-2 min-w-[100px] whitespace-nowrap">
                  {format(delivery.delivery_date, "PPP")}
                </TableCell>
                <TableCell className="py-2 min-w-[80px] whitespace-nowrap">
                  {delivery.customer_id.slice(-6)}
                </TableCell>
                <TableCell className="py-2 min-w-[120px]">
                  <div className="truncate max-w-[120px]" title={name}>
                    {name}
                  </div>
                </TableCell>
                <TableCell className="py-2 min-w-[150px]">
                  <div className="truncate max-w-[150px]" title={address}>
                    {address}
                  </div>
                </TableCell>
                <TableCell className="py-2 min-w-[60px] text-center">
                  {delivery.filled_bottles}
                </TableCell>
                <TableCell className="py-2 min-w-[60px] text-center">
                  {delivery.empty_bottles}
                </TableCell>
                <TableCell className="py-2 min-w-[80px] whitespace-nowrap">
                  Rs. {delivery.payment}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-muted-foreground mt-4 text-center text-sm">
        Delivery History for today
      </p>
    </div>
  );
};
