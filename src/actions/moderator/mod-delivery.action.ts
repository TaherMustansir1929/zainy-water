"use server";

import { Area, Customer, Delivery } from "@prisma/client";
import { prisma } from "../../lib/prisma";

export type DeliveryRecord = {
  balance: number;
  customer_id: string;
  filled_bottles: number;
  empty_bottles: number;

  payment: number;
  moderator_id: string;
  delivery_date: Date;
};

export async function addDailyDeliveryRecord(
  data: DeliveryRecord
): Promise<Delivery | null> {
  try {
    await prisma.customer.update({
      where: {
        customer_id: data.customer_id,
      },
      data: {
        balance: data.balance,
      },
    });

    const newDeliveryRecord = await prisma.delivery.create({
      data: {
        customer_id: data.customer_id,
        moderator_id: data.moderator_id,
        delivery_date: data.delivery_date,
        payment: data.payment,
        filled_bottles: data.filled_bottles,
        empty_bottles: data.empty_bottles,
      },
    });

    return newDeliveryRecord;
  } catch (error) {
    console.error("Error adding daily delivery record:", error);
    return null;
  }
}

export async function getDailyDeliveryRecords(
  moderator_id: string
): Promise<Delivery[] | null> {
  const data = await prisma.delivery.findMany({
    where: {
      moderator_id: moderator_id,
      delivery_date: {
        gte: new Date(new Date().setHours(0, 0, 0, 0)), // Start of today
      },
    },
    orderBy: { delivery_date: "desc" }, // Order by delivery date descending
  });

  return data;
}

export async function getCustomerDataById(customer_id: string, areas: Area[]) {
  try {
    if (!areas || areas.length === 0) {
      console.error("No areas provided for customer lookup.");
      return null;
    }

    // Fetch customer data based on customer_id and areas
    const data = await prisma.customer.findUnique({
      where: {
        customer_id: customer_id,
        area: { in: areas },
      },
    });

    return data;
  } catch (error) {
    console.error("Error fetching customer data:", error);
    return null;
  }
}
