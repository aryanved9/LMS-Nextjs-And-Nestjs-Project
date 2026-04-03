# 🚀 LMS Full Stack Project

A **full-stack Learning Management System (LMS)** built with **Next.js** for the frontend and **NestJS** for the backend.
This project demonstrates a **modern monorepo architecture** with scalable frontend and backend separation.

---

## 📌 Tech Stack

### Frontend (`lms-frontend`)

* **Next.js 15**
* **React.js**
* **TypeScript**
* **Tailwind CSS**
* Reusable UI Components
* Service-based API layer

### Backend (`nestjs-lms`)

* **NestJS**
* **TypeScript**
* REST APIs
* Modular architecture
* DTO validation
* Scalable service/controller pattern

---

## 📂 Project Structure

```bash
LMS-Nextjs-And-Nestjs-Project
├── lms-frontend     # Next.js frontend
├── nestjs-lms       # NestJS backend
└── README.md
```

---

## ✨ Features

* 📚 Course management
* ➕ Add new courses
* ✏️ Update existing courses
* ❌ Delete courses
* 📊 Dashboard stats cards
* 🧩 Reusable modal + form components
* 🔗 Frontend and backend API integration
* 📱 Responsive UI
* ⚡ Clean full-stack monorepo setup

---

## ⚙️ Installation & Setup

### 1) Clone repository

```bash
git clone <your-repo-url>
cd LMS-Nextjs-And-Nestjs-Project
```

### 2) Frontend setup

```bash
cd lms-frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:3000
```

### 3) Backend setup

```bash
cd nestjs-lms
npm install
npm run start:dev
```

Backend runs on:

```bash
http://localhost:5000
```

---

## 🔌 API Flow

The frontend communicates with the backend using a dedicated service layer:

```ts
courseService → NestJS REST API → Course Module → Controller → Service
```

This keeps the architecture **clean, maintainable, and scalable**.

---

## 🎯 Why This Project Matters

This project showcases:

* Full-stack development skills
* Monorepo architecture
* Clean component design
* REST API integration
* Scalable NestJS backend modules
* Production-style folder structure

A strong portfolio project for **Frontend / Full Stack Developer roles**.

---

## 👨‍💻 Author

**Aryan Ved**

* Frontend Developer
* React / Next.js / NestJS
* Building scalable full-stack applications

---

## ⭐ Support

If you like this project, give it a **star ⭐ on GitHub**.
