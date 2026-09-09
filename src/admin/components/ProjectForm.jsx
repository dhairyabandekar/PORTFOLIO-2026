import { X } from "lucide-react";

function ProjectForm({ onClose }) {
  return (
    /* Full-screen dark overlay */
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      {/* Center popup */}
      <div className="relative w-[550px] max-w-[90vw] max-h-[85vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              Add New Project
            </h2>

            <p className="mt-1 text-sm text-neutral-500">
              Add a project to your portfolio.
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
        <form className="mt-6 space-y-5">
          {/* Project Title */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Project Title
            </label>

            <input
              type="text"
              placeholder="e.g. DermaClust"
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Description
            </label>

            <textarea
              rows="4"
              placeholder="Write a short description of your project..."
              className="mt-2 w-full resize-none rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            />
          </div>

          {/* Technologies */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Technologies
            </label>

            <input
              type="text"
              placeholder="React, Node.js, MongoDB"
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            />

            <p className="mt-2 text-xs text-neutral-400">
              Separate technologies using commas.
            </p>
          </div>

          {/* GitHub Link */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              GitHub Link
            </label>

            <input
              type="url"
              placeholder="https://github.com/..."
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
            />
          </div>

          {/* Live Demo Link */}
          <div>
            <label className="text-sm font-medium text-neutral-700">
              Live Demo Link
            </label>

            <input
              type="url"
              placeholder="https://..."
              className="mt-2 w-full rounded-xl border border-neutral-200 px-4 py-3 text-sm outline-none transition focus:border-neutral-900"
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
              Save Project
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectForm;