"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { redirect, usePathname } from "next/navigation";

export const ModHeader = () => {
  const pathname = usePathname();

  const handleLogout = () => {
    cookieStore.delete("moderator_id");
    redirect("/moderator/login");
  };

  return (
    <header className="w-full border-b border-gray-200 p-2 flex justify-between items-center">
      <h1 className="text-lg font-semibold">
        <Image src={"/logo.jpg"} alt="Zainy Water" width={150} height={100} />
      </h1>
      {!(pathname === "/moderator/login") && (
        <Button variant="outline" size={"sm"} onClick={handleLogout}>
          Logout
        </Button>
      )}
    </header>
  );
};
