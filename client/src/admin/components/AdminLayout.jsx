import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function AdminLayout() {
  return (
    <div className="flex min-h-screen bg-neutral-100">
      <AdminSidebar />

      <main className="min-h-screen flex-1 p-12">
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;