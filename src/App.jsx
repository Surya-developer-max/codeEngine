import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./Pages/Publics/Home";
import AdminLogin from "./Pages/Publics/AdminLogin";
import StudentLogin from "./Pages/Publics/StudentLogin";
import ThemeDesigner from './Components/ThemeDesigner';

import Dashboard from "./Pages/Admin/Dashboard";
import StaffPage from "./Pages/Admin/StaffPage";
import ThemeCos from "./Pages/Admin/ThemeCos";

import CodingArena from "./Pages/Student/CodingArena";
import Workshop from "./Pages/Student/Workshop";
import MCQAssessmentBoard from "./Pages/Student/MCQAssessmentBoard";
import Index from './Pages/Admin/Index';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <ThemeDesigner>

        <Routes>
          {/* Public */}
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/student/login" element={<StudentLogin />} />

          {/* Admin */}
          <Route path="/admin"  element={<Navbar role={"admin"} />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="staff" element={<StaffPage />} />
            <Route path="theme" element={<ThemeCos />} />
            <Route path='index' element={<Index />} />
          </Route>

          {/* Student */}
          <Route path="/student"  element={<Navbar role={"student"}/>}>
            <Route index element={<CodingArena />} />
            <Route path="coding" element={<CodingArena />} />
            <Route path="workshop" element={<Workshop />} />
            <Route path="mcq" element={<MCQAssessmentBoard />} />
          </Route>
        </Routes>
      </ThemeDesigner>
    </div>
  )
}

export default App
