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
import { Separator } from "./ui/separator";
import Image from "next/image";

// Menu items.
const items = [
  {
    title: "Bottle Inventory",
    url: "#",
    icon: Home,
  },
  {
    title: "Customer History",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Set Bottle Price",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Other Expenses",
    url: "#",
    icon: Search,
  },
  {
    title: "Moderator Reports",
    url: "#",
    icon: Settings,
  },
];

const admin_features = [
  {
    title: "Add Moderator",
    url: "#",
    icon: PlusCircle,
  },
  {
    title: "Change Password",
    url: "#",
    icon: Key,
  },
];

export function AppSidebar() {
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
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="text-lg">
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <Separator />
              {admin_features.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
