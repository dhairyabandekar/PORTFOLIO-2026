
import { useEffect, useState } from "react";
import { X } from "lucide-react";

const initialForm = {
  company: "",
  role: "",
  employmentType: "",
  location: "",
  startDate: "",
  endDate: "",
  isPresent: false,
  description: "",
  technologies: "",
};

function ExperienceForm({
  onClose,
  onAddExperience,
  editingExperience,
  onUpdateExperience,
}) {
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => {
    if (editingExperience) {
      setFormData({
        ...initialForm,
        ...editingExperience,
        technologies:
          editingExperience.technologies?.join(", ") || "",
      });
    }
  }, [editingExperience]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const experienceData = {
      ...formData,
      endDate: formData.isPresent ? "" : formData.endDate,
      technologies: formData.technologies
        .split(",")
        .map((tech) => tech.trim())
        .filter(Boolean),
    };

    if (editingExperience) {
      onUpdateExperience({
        ...editingExperience,
        ...experienceData,
      });
    } else {
      onAddExperience(experienceData);
    }
  };

  const inputStyle =
    "mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none focus:border-neutral-900";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative max-h-[85vh] w-[550px] max-w-[90vw] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl">

        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {editingExperience
                ? "Edit Experience"
                : "Add Experience"}
            </h2>
            <p className="mt-1 text-sm text-neutral-500">
              Manage your professional experience.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-neutral-500 hover:bg-neutral-100"
          >
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          <div>
            <label className="text-sm font-medium text-neutral-700">
              Company Name
            </label>
            <input
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. SKTECHUB"
              required
              className={inputStyle}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">
              Job Title / Role
            </label>
            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Frontend Development Intern"
              required
              className={inputStyle}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">
              Employment Type
            </label>
            <select
              name="employmentType"
              value={formData.employmentType}
              onChange={handleChange}
              required
              className={inputStyle}
            >
              <option value="">Select Type</option>
              <option value="Internship">Internship</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Freelance">Freelance</option>
              <option value="Contract">Contract</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">
              Location
            </label>
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Remote / Mumbai"
              className={inputStyle}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-neutral-700">
                Start Date
              </label>
              <input
                type="month"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
                className={inputStyle}
              />
            </div>

            <div>
              <label className="text-sm font-medium text-neutral-700">
                End Date
              </label>
              <input
                type="month"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                disabled={formData.isPresent}
                required={!formData.isPresent}
                min={formData.startDate || undefined}
                className={inputStyle}
              />
            </div>
          </div>

          <label className="flex items-center gap-2 text-sm text-neutral-700">
            <input
              type="checkbox"
              name="isPresent"
              checked={formData.isPresent}
              onChange={handleChange}
            />
            I currently work here
          </label>

          <div>
            <label className="text-sm font-medium text-neutral-700">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              placeholder="Describe your responsibilities..."
              required
              className={inputStyle}
            />
          </div>

          <div>
            <label className="text-sm font-medium text-neutral-700">
              Technologies
            </label>
            <input
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
              placeholder="React, JavaScript, Tailwind CSS"
              className={inputStyle}
            />
            <p className="mt-2 text-xs text-neutral-400">
              Separate technologies using commas.
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-neutral-200 px-5 py-3 text-sm text-neutral-600"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-neutral-900 px-5 py-3 text-sm font-medium text-white hover:bg-neutral-700"
            >
              {editingExperience
                ? "Save Changes"
                : "Save Experience"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default ExperienceForm;