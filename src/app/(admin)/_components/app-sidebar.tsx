"use client";
import {
  Calendar,
  Home,
  Inbox,
  Key,
  PlusCircle,
  Search,
  Settings,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

// Menu items.
const items = [
  {
    title: "Bottle Inventory",
    url: "/bottle-inventory",
    icon: Home,
  },
  {
    title: "Customer History",
    url: "/customer-history",
    icon: Inbox,
  },
  {
    title: "Set Bottle Price",
    url: "/set-bottle-price",
    icon: Calendar,
  },
  {
    title: "Other Expenses",
    url: "/other-expenses",
    icon: Search,
  },
  {
    title: "Moderator Reports",
    url: "/moderator-reports",
    icon: Settings,
  },
];

const admin_features = [
  {
    title: "Add Moderator",
    url: "/add-moderator",
    icon: PlusCircle,
  },
  {
    title: "Change Password",
    url: "/change-password",
    icon: Key,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="">
      <SidebarContent>
        <SidebarGroup className="space-y-4">
          <SidebarGroupLabel className="flex items-center justify-center space-x-2 my-8">
            {/* <h1 className="text-2xl">Zainy Water</h1> */}
            <Image
              src={"/logo.jpg"}
              alt="Zainy Water"
              width={150}
              height={150}
            />
          </SidebarGroupLabel>
          <Separator />
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "hover:bg-gray-100",
                      pathname === item.url ? "bg-gray-300" : ""
                    )}
                  >
                    <Link href={item.url} className="text-lg">
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <Separator />

              {admin_features.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
