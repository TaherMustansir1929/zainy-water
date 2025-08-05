import { adminMiddleware } from "@/actions/admin/admin-middleware";
import { AppSidebar } from "../../_components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { redirect } from "next/navigation";

type Props = { children: React.ReactNode };

const DashboardLayout = async ({ children }: Props) => {
  const admin = await adminMiddleware();

  if (!admin) {
    redirect("/admin/login");
  }

  return (
    <SidebarProvider>
      <main className="w-full min-h-screen flex">
        <AppSidebar />
        {children}
      </main>
    </SidebarProvider>
  );
};
export default DashboardLayout;
