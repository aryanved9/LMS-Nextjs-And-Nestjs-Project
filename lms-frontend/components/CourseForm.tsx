import { CourseFormData as CourseFormType } from "@/services/course.service";

interface Props {
  form: CourseFormType;
  editingId: number | null;
  onChange: (form: CourseFormType) => void;
  onSubmit: () => void;
  onCancel: () => void;
}

export default function CourseForm({
  form,
  editingId,
  onChange,
  onSubmit,
  onCancel,
}: Props) {
  return (
    <div className="bg-gray-900 border border-gray-700 rounded-2xl p-6 mb-8">
      <h2 className="text-xl font-semibold mb-5 text-indigo-400">
        {editingId ? "✏️ Edit Course" : "➕ Create New Course"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-gray-400 mb-1">Title *</label>
          <input
            type="text"
            placeholder="e.g. NestJS Fundamentals"
            value={form.title}
            onChange={(e) => onChange({ ...form, title: e.target.value })}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Instructor *
          </label>
          <input
            type="text"
            placeholder="e.g. John Doe"
            value={form.instructor}
            onChange={(e) => onChange({ ...form, instructor: e.target.value })}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Duration (hours)
          </label>
          <input
            type="number"
            placeholder="e.g. 10"
            value={form.duration}
            onChange={(e) =>
              onChange({ ...form, duration: Number(e.target.value) })
            }
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-1">
            Description
          </label>
          <input
            type="text"
            placeholder="Short description..."
            value={form.description}
            onChange={(e) => onChange({ ...form, description: e.target.value })}
            className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 transition"
          />
        </div>
      </div>
      <div className="flex gap-3 mt-5">
        <button
          onClick={onSubmit}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-2.5 rounded-lg font-medium transition-all duration-200"
        >
          {editingId ? "Update Course" : "Create Course"}
        </button>
        <button
          onClick={onCancel}
          className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-2.5 rounded-lg font-medium transition-all duration-200"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
