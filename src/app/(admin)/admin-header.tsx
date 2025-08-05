"use client";

import { Button } from "@/components/ui/button";
import { redirect, usePathname } from "next/navigation";

export const AdminHeader = () => {
  const pathname = usePathname();

  const handleLogout = () => {
    cookieStore.delete("admin_id");
    redirect("/admin/login");
  };

  return (
    <header className="w-full border-b border-gray-200 p-2 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Zainy Water</h1>
      <div>
        {!(pathname === "/admin/login") && (
          <Button variant="outline" size={"sm"} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </div>
    </header>
  );
};
