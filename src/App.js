import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loginpage from "./Components/student/Loginpage";
import Signin from "./Components/student/Signin";
import CommonNavbar from "./Components/common/commonNavbar/commonNavbar";
import Footer from "./Components/common/footer/footer";
import LandingPage from "./Components/common/landingPage/landingPage";
import { StudentNav } from "./Components/student/studentHome/studentNav/studentNav";
import StudentHomeDetails from "./Components/student/studentHome/studentHomeDetail/studentHomeDetail";
import { StudentHome } from "./Components/student/studentHome/studentHome";
import { StudentSignUp } from "./Components/student/studentSignUp/studentSignUp";
import AdminLogin from "./Components/admin/adminLogin";
import StudentLogin from "./Components/student/studentLogin/studentLogin";
import TutorLogin from "./Components/tutor/tutorLogin/tutorLogin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* student */}
          <Route path="/registration" element={<Loginpage />} />
          <Route path="/login" element={<Signin />} />

          <Route path="/student/navbar" element={<StudentNav />} />
          <Route
            path="/student/home-details"
            element={<StudentHomeDetails />}
          />
          <Route path="/student/home" element={<StudentHome />} />
          <Route path="/student/signup" element={<StudentSignUp />} />
          <Route path="studentLogin" element={<StudentLogin />} />
          {/* common */}
          <Route path="/commonNavbar" element={<CommonNavbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/landingPage" element={<LandingPage />} />
          {/* admin */}
          <Route path="/adminLogin" element={<AdminLogin />} />
          {/* tutor */}
          <Route path="/tutorLogin" element={<TutorLogin/>}/>
          {/* 404 page */}
          <Route path="/*" element={<h1>The page not available</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
