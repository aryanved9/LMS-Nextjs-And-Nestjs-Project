const API = "http://localhost:3000/courses";

export interface Course {
  id: number;
  title: string;
  description?: string;
  instructor: string;
  duration: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface CourseFormData {
  title: string;
  description?: string;
  instructor: string;
  duration?: number;
}

export const courseService = {
  getAll: async (): Promise<Course[]> => {
    const res = await fetch(API);
    return res.json();
  },

  create: async (data: CourseFormData): Promise<Course> => {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  update: async (id: number, data: Partial<CourseFormData>): Promise<Course> => {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.json();
  },

  delete: async (id: number): Promise<void> => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
  },
};
