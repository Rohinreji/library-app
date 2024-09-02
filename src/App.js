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
import { StudentViewProduct } from "./Components/student/studentViewProduct/studentViewProduct";
import { StudentSidebar } from "./Components/student/studentSidebar/studentSidebar";
import { StudentDashboard } from "./Components/student/studentDashboard/studentDashboard";
import { StudentviewSingleProduct } from "./Components/student/studentViewSingleProduct.js/studentViewSingleProduct";
import AdminForgotPassword from "./Components/admin/adminForgotPassword/adminForgotPassword";
import { Toaster } from "react-hot-toast";
import { TutorSignUp } from "./Components/tutor/tutorSignup/tutorSignup";
import { TutorSidebar } from "./Components/tutor/tutorSidebar/tutorSidebar";
import { TutorDashboard } from "./Components/tutor/tutorDashboard/tutorDashboard";
import { TutorViewBook } from "./Components/tutor/tutorViewBook/tutorViewBook";
import { TutorProfile } from "./Components/tutor/tutorProfile/tutorProfile";
import { AdminAddProduct } from "./Components/admin/adminAddProduct/adminAddProduct";
import TutorForgotPassword from "./Components/tutor/tutorForgotPassword/tutorForgotPassword";
import { TutorviewSingleProduct } from "./Components/tutor/tutorViewSingleProduct.jsx/tutorViewSingleProduct";

function App() {
  return (
    <>
    <Toaster/>
      <BrowserRouter basename="open_library">
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
          <Route path="/student/view-product" element={<StudentViewProduct/>}/>
          <Route path="/student/sidebar" element={<StudentSidebar/>} />
          <Route path="/student/dashboard" element={<StudentDashboard/>} />
          <Route path="/student/view-single-product" element={<StudentviewSingleProduct/>}/>
          {/* common */}
          <Route path="/commonNavbar" element={<CommonNavbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/landingPage" element={<LandingPage />} />

          {/* admin */}

          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route
            path="/adminForgotPassword"
            element={<AdminForgotPassword />}
          />
          <Route path="/admin-add/products" element={<AdminAddProduct/>} />
          
          {/* tutor */}

          <Route path="/tutorLogin" element={<TutorLogin />} />
          <Route path="/tutorSignup" element={<TutorSignUp/>} />
          <Route path="/tutor-sidebar" element={<TutorSidebar/>} />
          <Route path="/tutor-dashboard" element={<TutorDashboard/>} />
          <Route path="/tutor-viewBook" element={<TutorViewBook/>} />
          <Route path="/tutor/profile" element={<TutorProfile/>} />
          <Route path="/tutor/forgot-password" element={<TutorForgotPassword/>} />
          <Route path="/tutor/view-single-product/:id" element={<TutorviewSingleProduct/>} />
          {/* 404 page */}
          <Route path="/*" element={<h1>The page not available</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
