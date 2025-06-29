# DevFirstDay – Interactive Onboarding Dashboard

**DevFirstDay** is a modern, responsive onboarding dashboard built with **ReactJS**. This project is designed to simulate a first-day experience for new users, using clean layout design, modular UI components, and smooth micro-interactions.

---

## 🧩 Features

- Responsive layout using CSS Flexbox/Grid
- Reusable UI components (cards, buttons, status blocks)
- Clean and consistent visual design
- Built with modern React project setup (Vite)
- Simple animations for better user experience (planned)
- Easily extendable for additional onboarding steps or modules

---

## 🔧 Tech Stack

| Tech         | Description                     |
|--------------|---------------------------------|
| ReactJS      | Frontend framework              |
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
