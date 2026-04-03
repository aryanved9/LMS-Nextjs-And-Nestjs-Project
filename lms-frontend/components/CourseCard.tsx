import { Course } from "@/services/course.service";

interface Props {
  course: Course;
  onEdit: (course: Course) => void;
  onDelete: (id: number) => void;
}

export default function CourseCard({ course, onEdit, onDelete }: Props) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-5 hover:border-indigo-500 transition-all duration-200">
      <div className="flex items-start justify-between mb-3">
        <span
          className={`text-xs px-2 py-1 rounded-full font-medium ${
            course.isActive
              ? "bg-green-900 text-green-400"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          {course.isActive ? "● Active" : "○ Inactive"}
        </span>
        <span className="text-xs text-gray-500">#{course.id}</span>
      </div>

      <h3 className="text-lg font-semibold text-white mb-1">{course.title}</h3>

      {course.description && (
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {course.description}
        </p>
      )}

      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
        <span>👤 {course.instructor}</span>
        <span>⏱ {course.duration}h</span>
      </div>
      <div className="flex gap-2 pt-3 border-t border-gray-800">
        <button
          onClick={() => onEdit(course)}
          className="flex-1 bg-gray-800 hover:bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-200"
        >
          ✏️ Edit
        </button>
        <button
          onClick={() => onDelete(course.id)}
          className="flex-1 bg-gray-800 hover:bg-red-600 text-white py-2 rounded-lg text-sm font-medium transition-all duration-200"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
}
