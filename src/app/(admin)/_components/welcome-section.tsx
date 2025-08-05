"use client";

import { useAdminStore } from "@/lib/admin-state";
import { useEffect, useState } from "react";

type Props = {
  text: string;
};

export const WelcomeSection = ({ text }: Props) => {
  const admin_store = useAdminStore((state) => state.admin);
  const [adminName, setAdminName] = useState<string | null>(null);

  useEffect(() => {
    if (admin_store?.name) {
      setAdminName(admin_store.name);
    }
  }, [admin_store?.name]);

  return (
    <div className="p-4 w-full max-w-7xl space-y-20">
      <h1 className="text-2xl md:text-4xl font-bold mb-4">
        Welcome {adminName ?? "Admin"}!
      </h1>
      <p className="text-xs md:text-sm text-muted-foreground mb-6">{text}</p>
    </div>
  );
};
