
import { Routes, Route } from "react-router-dom";
import { UserProvider } from './context/UserContext'
import { TaskProvider } from './context/TaskContext'
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import NavBar from "./components/NavBar";
import './styles/App.css'

function App() {

  return (
    <UserProvider>
      <TaskProvider>
        <NavBar />
        <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      </TaskProvider>
    </UserProvider>
  )
}

export default App
