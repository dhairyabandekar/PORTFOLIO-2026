import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  FolderKanban,
  BriefcaseBusiness,
  ArrowLeft,
} from "lucide-react";

function AdminSidebar() {
  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Projects",
      path: "/admin/projects",
      icon: FolderKanban,
    },
    {
      name: "Experience",
      path: "/admin/experience",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <aside className="flex min-h-screen w-64 flex-col justify-between bg-neutral-950 p-4 text-white">
      {/* Top Section */}
      <div>
        {/* Brand */}
        <div className="mb-12 flex items-center gap-3 px-2 pt-2">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white font-bold text-neutral-950">
            DB
          </div>

          <div>
            <h2 className="text-base font-semibold">Dhairya</h2>
            <p className="mt-0.5 text-xs text-neutral-400">
              Admin Panel
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium transition ${
                    isActive
                      ? "bg-neutral-800 text-white"
                      : "text-neutral-400 hover:bg-neutral-900 hover:text-white"
                  }`
                }
              >
                <Icon size={19} />
                <span>{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <NavLink
        to="/"
        className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-neutral-400 transition hover:bg-neutral-900 hover:text-white"
      >
        <ArrowLeft size={19} />
        <span>View Portfolio</span>
      </NavLink>
    </aside>
  );
}

export default AdminSidebar;