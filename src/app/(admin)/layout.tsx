import { AdminHeader } from "./admin-header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
};
export default layout;
