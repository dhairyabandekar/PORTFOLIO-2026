import { useEffect, useState } from "react";
import { X } from "lucide-react";

function ProjectForm({ onClose, onAddProject, editingProject, onUpdateProject }) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    technologies: "",
    github: "",
    demo: "",
  });

  // Fill form when editing an existing project
  useEffect(() => {
    if (editingProject) {
      setFormData({
        title: editingProject.title || "",
        description: editingProject.description || "",
        technologies: editingProject.technologies?.join(", ") || "",
        github: editingProject.github || "",
        demo: editingProject.demo || "",
      });
    }
  }, [editingProject]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const projectData = {
      title: formData.title,
      description: formData.description,
      technologies: formData.technologies
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean),
      github: formData.github,
      demo: formData.demo,
    };

    if (editingProject) {
      onUpdateProject({
        ...editingProject,
        ...projectData,
      });
    } else {
      onAddProject(projectData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[85vh] w-[550px] max-w-[90vw] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {editingProject ? "Edit Project" : "Add New Project"}
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              {editingProject
                ? "Update your project details."
                : "Add a project to your portfolio."}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-500 transition hover:bg-neutral-100 hover:text-neutral-900"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          {/* Title */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Project Title
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="e.g. DermaClust"
              required
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Description
            </label>

            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Write a short description..."
              required
              className="mt-2 w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900"
            />
          </div>

          {/* Technologies */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Technologies
            </label>

            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="React, Node.js, MongoDB"
              required
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900"
            />

            <p className="mt-2 text-xs text-neutral-400">
              Separate technologies using commas.
            </p>
          </div>

          {/* GitHub */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              GitHub Link
            </label>

            <input
              type="url"
              name="github"
              value={formData.github}
              onChange={handleChange}
              placeholder="https://github.com/..."
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900"
            />
          </div>

          {/* Live Demo */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Live Demo Link
            </label>

            <input
              type="url"
              name="demo"
              value={formData.demo}
              onChange={handleChange}
              placeholder="https://..."
              className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none transition focus:border-neutral-900"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-neutral-200 px-5 py-3 text-sm font-medium text-neutral-600 transition hover:bg-neutral-50"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-700"
            >
              {editingProject ? "Save Changes" : "Save Project"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;