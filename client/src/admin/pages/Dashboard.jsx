import {
  FolderKanban,
  BriefcaseBusiness,
  Plus,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

function Dashboard() {
  const stats = [
    {
      title: "Total Projects",
      value: "04",
      description: "Projects displayed on your portfolio",
      icon: FolderKanban,
    },
    {
      title: "Experience",
      value: "03",
      description: "Professional experiences",
      icon: BriefcaseBusiness,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="mb-10">
        <p className="mb-2 text-sm font-medium text-neutral-500">
          Portfolio Management
        </p>

        <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
          Dashboard
        </h1>

        <p className="mt-3 text-neutral-500">
          Manage your portfolio content from one place.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-8 flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-3 text-4xl font-bold text-neutral-900">
                    {stat.value}
                  </h2>
                </div>

                <div className="rounded-xl bg-neutral-100 p-3 text-neutral-800">
                  <Icon size={22} />
                </div>
              </div>

              <p className="text-sm text-neutral-500">
                {stat.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Quick Actions */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-neutral-900">
          Quick Actions
        </h2>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Link
            to="/admin/projects"
            className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-neutral-100 p-3 text-neutral-800">
                <Plus size={22} />
              </div>

              <ArrowRight
                size={20}
                className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-900"
              />
            </div>

            <h3 className="mt-8 text-lg font-semibold text-neutral-900">
              Manage Projects
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Add, edit, or remove projects from your portfolio.
            </p>
          </Link>

          <Link
            to="/admin/experience"
            className="group rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-neutral-100 p-3 text-neutral-800">
                <Plus size={22} />
              </div>

              <ArrowRight
                size={20}
                className="text-neutral-400 transition group-hover:translate-x-1 group-hover:text-neutral-900"
              />
            </div>

            <h3 className="mt-8 text-lg font-semibold text-neutral-900">
              Manage Experience
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-neutral-500">
              Add, edit, or remove professional experience details.
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;