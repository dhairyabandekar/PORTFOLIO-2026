import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  ExternalLink,
  Code2,
} from "lucide-react";
import ProjectForm from "../components/ProjectForm";

function AdminProjects() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "DermaClust",
      description:
        "An AI-powered skincare analysis and recommendation system.",
      technologies: ["Python", "TensorFlow", "BERT"],
      github: "https://github.com/yourusername/dermaclust",
      demo: "https://your-demo-link.com",
    },
    {
      id: 2,
      title: "Authentication System",
      description:
        "A secure MERN authentication system using JWT and protected routes.",
      technologies: ["React", "Node.js", "MongoDB"],
      github: "https://github.com/yourusername/authentication-system",
      demo: "https://your-demo-link.com",
    },
    {
      id: 3,
      title: "Cook Book",
      description:
        "A recipe discovery application with search and filtering features.",
      technologies: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/yourusername/cook-book",
      demo: "https://your-demo-link.com",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <p className="mb-2 text-sm font-medium text-neutral-500">
            Portfolio Content
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Projects
          </h1>

          <p className="mt-3 text-neutral-500">
            Manage the projects displayed on your portfolio.
          </p>
        </div>

        <button
          onClick={() => setIsFormOpen(true)}
          className="flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
        >
          <Plus size={18} />
          Add Project
        </button>
      </div>

      {/* Project List */}
      <div className="mt-10 space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex items-center justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            {/* Project Information */}
            <div className="max-w-xl">
              <h2 className="text-lg font-semibold text-neutral-900">
                {project.title}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="ml-6 flex items-center gap-2">
              {/* GitHub */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                  title="View GitHub Repository"
                >
                  <Code2 size={20} />
                </a>
              )}

              {/* Live Demo */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                  title="View Live Demo"
                >
                  <ExternalLink size={19} />
                </a>
              )}

              {/* Edit */}
              <button
                className="rounded-lg p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
                title="Edit Project"
              >
                <Pencil size={19} />
              </button>

              {/* Delete */}
              <button
                className="rounded-lg p-2 text-neutral-500 transition hover:bg-red-50 hover:text-red-600"
                title="Delete Project"
              >
                <Trash2 size={19} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Project Modal */}
      {isFormOpen && (
        <ProjectForm onClose={() => setIsFormOpen(false)} />
      )}
    </div>
  );
}

export default AdminProjects;