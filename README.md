# DevFirstDay – Interactive Onboarding Dashboard

**DevFirstDay** is a modern, responsive onboarding dashboard built with **ReactJS**. This project is designed to simulate a first-day experience for new users, using clean layout design, modular UI components, and smooth micro-interactions.

---

## 🧩 Features

- 🧭 Sidebar navigation (responsive & mobile-friendly)
- 📋 Onboarding checklist (step-based progress)
- 📦 Reusable UI components (card, button, dropdown)
- 📊 Metrics section (progress overview)
- 🎨 Clean UI layout using Flex/Grid
- 💡 Simulated API data for projects/tasks

---

## 🔧 Tech Stack

| Tech         | Description                     |
|--------------|---------------------------------|
| ReactJS      | Frontend framework              |
| Lucide React         | Icons       |
| Vite         | Lightweight React tooling       |
| CSS Modules* | Styling & responsive layout |
| Netlify      | Deployment (CI/CD)              |
| GitHub       | Version control & collaboration |


---

## 🚀 Live Demo

_https://dev-first-day.netlify.app/_

---

## 📁 Folder Structure (Preview)


```bash
src/
├── assets/        # Icons, images, SVGs used in UI
├── components/    # Reusable UI elements (e.g. Card, Button, Dropdown)
├── context/       # React Context providers (e.g. for Theme, User, Sidebar toggle)
├── data/          # Static/dummy JSON data used to simulate metrics, projects, etc.
├── pages/         # Main route-based views (Dashboard, Projects, Profile, Settings)
├── styles/        # Global CSS, utility classes or Tailwind config (if used)
└── App.jsx        # Main app entry, router setup
