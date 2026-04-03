import { Course } from '@/services/course.service';

interface Props {
  courses: Course[];
}

export default function CourseStats({ courses }: Props) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
        <p className="text-3xl font-bold text-indigo-400">{courses.length}</p>
        <p className="text-gray-400 text-sm mt-1">Total Courses</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
        <p className="text-3xl font-bold text-green-400">
          {courses.filter((course) => course.isActive).length}
        </p>
        <p className="text-gray-400 text-sm mt-1">Active</p>
      </div>
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 text-center">
        <p className="text-3xl font-bold text-yellow-400">
          {courses.reduce((acc, c) => acc + c.duration, 0)}h
        </p>
        <p className="text-gray-400 text-sm mt-1">Total Hours</p>
      </div>
    </div>
  );
}