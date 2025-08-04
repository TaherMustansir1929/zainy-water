"use server";

import { prisma } from "../lib/prisma";
import { cookies } from "next/headers";

export async function loginModerator(name: string, password: string) {
  const mod_data = await prisma.moderator.findFirst({
    where: {
      name,
      password,
    },
  });

  if (!mod_data) {
    return { success: false, message: "Invalid credentials", id: null };
  }

  (await cookies()).set("moderator_id", mod_data.id);

  return { success: true, message: "Login successful", mod_data };
}
