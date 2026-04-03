'use client';

import { useState, useEffect } from 'react';
import { courseService, Course, CourseFormData } from '@/services/course.service';
import CourseCard from '@/components/CourseCard';
import CourseForm from '@/components/CourseForm';
import CourseStats from '@/components/CourseStats';
import DeleteModal from '@/components/DeleteModal';

const emptyForm: CourseFormData = {
  title: '',
  description: '',
  instructor: '',
  duration: 0,
};

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [form, setForm] = useState<CourseFormData>(emptyForm);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const data = await courseService.getAll();
      setCourses(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleSubmit = async () => {
    if (!form.title || !form.instructor) return alert('Title and Instructor are required!');
    if (editingId) {
      await courseService.update(editingId, form);
    } else {
      await courseService.create(form);
    }
    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
    fetchCourses();
  };

  const handleEdit = (course: Course) => {
    setForm({ title: course.title, description: course.description, instructor: course.instructor, duration: course.duration });
    setEditingId(course.id);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async () => {
    if (!deleteConfirm) return;
    await courseService.delete(deleteConfirm);
    setDeleteConfirm(null);
    fetchCourses();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-white">🎓 LMS Dashboard</h1>
            <p className="text-gray-400 text-sm">Learning Management System</p>
          </div>
          <button
            onClick={() => { setShowForm(!showForm); setForm(emptyForm); setEditingId(null); }}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-lg font-medium transition-all duration-200"
          >
            {showForm ? '✕ Cancel' : '+ New Course'}
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Form */}
        {showForm && (
          <CourseForm
            form={form}
            editingId={editingId}
            onChange={setForm}
            onSubmit={handleSubmit}
            onCancel={() => { setShowForm(false); setForm(emptyForm); setEditingId(null); }}
          />
        )}

        {/* Stats */}
        <CourseStats courses={courses} />

        {/* Grid */}
        {loading ? (
          <div className="text-center py-20 text-gray-500">Loading courses...</div>
        ) : courses.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">📚</p>
            <p className="text-gray-400 text-lg">No courses yet. Create your first one!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
                onEdit={handleEdit}
                onDelete={setDeleteConfirm}
              />
            ))}
          </div>
        )}
      </main>

      {/* Delete Modal */}
      {deleteConfirm && (
        <DeleteModal
          onConfirm={handleDelete}
          onCancel={() => setDeleteConfirm(null)}
        />
      )}
    </div>
  );
}