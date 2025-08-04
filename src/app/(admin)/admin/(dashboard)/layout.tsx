import { AppSidebar } from "../../_components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { SidebarToggleButton } from "../../_components/sidebar-toggle-button";
import { PanelLeftIcon } from "lucide-react";

type Props = { children: React.ReactNode };

const DashboardLayout = ({ children }: Props) => {
  return (
    <SidebarProvider>
      <main className="w-full min-h-screen flex">
        <AppSidebar />
        <SidebarToggleButton icon={<PanelLeftIcon className="size-6" />} />
        {children}
      </main>
    </SidebarProvider>
  );
};
export default DashboardLayout;
