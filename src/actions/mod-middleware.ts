"use server";

import { cookies } from "next/headers";

export async function moderatorMiddleware() {
  const moderator_id = (await cookies()).get("moderator_id")?.value;
  console.log({ moderator_id });

  if (!moderator_id) return false;

  return true;
}
