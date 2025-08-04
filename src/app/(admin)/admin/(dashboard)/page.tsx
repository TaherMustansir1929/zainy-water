import { adminMiddleware } from "@/actions/admin/admin-middleware";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const admin = await adminMiddleware();

  if (!admin) {
    redirect("/admin/login");
  }

  return <div>AdminPage</div>;
};
export default AdminPage;
