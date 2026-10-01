
import { useState } from "react";
import {
  Plus,
  Pencil,
  Trash2,
  BriefcaseBusiness,
  MapPin,
  CalendarDays,
} from "lucide-react";
import ExperienceForm from "../components/ExperienceForm";

function AdminExperience() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingExperience, setEditingExperience] =
    useState(null);

  // Temporary frontend data
  const [experiences, setExperiences] = useState([]);

  // Add Experience
  const handleAddExperience = (newExperience) => {
    setExperiences((current) => [
      ...current,
      {
        ...newExperience,
        id: crypto.randomUUID(),
      },
    ]);

    setIsFormOpen(false);
  };

  // Open Edit Form
  const handleEditExperience = (experience) => {
    setEditingExperience(experience);
    setIsFormOpen(true);
  };

  // Update Experience
  const handleUpdateExperience = (updatedExperience) => {
    setExperiences((current) =>
      current.map((experience) =>
        experience.id === updatedExperience.id
          ? updatedExperience
          : experience
      )
    );

    setEditingExperience(null);
    setIsFormOpen(false);
  };

  // Delete Experience
  const handleDeleteExperience = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this experience?"
    );

    if (!confirmed) return;

    setExperiences((current) =>
      current.filter((experience) => experience.id !== id)
    );
  };

  // Close Form
  const handleCloseForm = () => {
    setIsFormOpen(false);
    setEditingExperience(null);
  };

  // Format YYYY-MM
  const formatDate = (date) => {
    if (!date) return "";

    const [year, month] = date.split("-");
    const parsed = new Date(Number(year), Number(month) - 1);

    return parsed.toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="mx-auto max-w-6xl">

      {/* Header */}
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium text-neutral-500">
            Portfolio Content
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-neutral-900">
            Experience
          </h1>

          <p className="mt-3 text-neutral-500">
            Manage your professional experience.
          </p>
        </div>

        <button
          onClick={() => {
            setEditingExperience(null);
            setIsFormOpen(true);
          }}
          className="flex items-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-700"
        >
          <Plus size={18} />
          Add Experience
        </button>
      </div>

      {/* Experience List */}
      <div className="mt-10 space-y-4">

        {experiences.length === 0 && (
          <div className="rounded-2xl border border-dashed border-neutral-300 bg-white p-12 text-center">
            <BriefcaseBusiness
              size={36}
              className="mx-auto text-neutral-400"
            />

            <h2 className="mt-4 font-semibold text-neutral-900">
              No experiences added yet
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              Click Add Experience to create your first entry.
            </p>
          </div>
        )}

        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="flex items-start justify-between gap-6 rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm"
          >
            {/* Information */}
            <div className="min-w-0 flex-1">

              <h2 className="text-lg font-semibold text-neutral-900">
                {experience.role}
              </h2>

              <div className="mt-2 flex items-center gap-2 text-sm text-neutral-600">
                <BriefcaseBusiness size={16} />
                {experience.company}
                <span>·</span>
                {experience.employmentType}
              </div>

              {experience.location && (
                <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
                  <MapPin size={16} />
                  {experience.location}
                </div>
              )}

              <div className="mt-2 flex items-center gap-2 text-sm text-neutral-500">
                <CalendarDays size={16} />
                {formatDate(experience.startDate)}
                {" - "}
                {experience.isPresent
                  ? "Present"
                  : formatDate(experience.endDate)}
              </div>

              <p className="mt-4 whitespace-pre-line text-sm leading-relaxed text-neutral-500">
                {experience.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={() =>
                  handleEditExperience(experience)
                }
                title="Edit Experience"
                className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
              >
                <Pencil size={19} />
              </button>

              <button
                onClick={() =>
                  handleDeleteExperience(experience.id)
                }
                title="Delete Experience"
                className="rounded-lg p-2 text-neutral-500 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 size={19} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isFormOpen && (
        <ExperienceForm
          onClose={handleCloseForm}
          onAddExperience={handleAddExperience}
          editingExperience={editingExperience}
          onUpdateExperience={handleUpdateExperience}
        />
      )}
    </div>
  );
}

export default AdminExperience;