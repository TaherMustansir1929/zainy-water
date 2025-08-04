"use server";

import { cookies } from "next/headers";

export async function adminMiddleware() {
  const admin_id = (await cookies()).get("admin_id")?.value;
  console.log({ admin_id });

  if (!admin_id) return false;

  return true;
}
