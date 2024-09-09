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
import { AdminApproveTutor } from "./Components/admin/adminApproveTutor.jsx/adminApproveTutotor";
import { AdminViewApproveTutor } from "./Components/admin/adminViewApprovedTutor/adminViewApprovedTutor";
import { TutorActiveRental } from "./Components/tutor/tutorActiveRental/tutorActiveRental";
import { TutorCart } from "./Components/tutor/tutorcart/tutorCart";
import { AdminViewAllRental } from "./Components/admin/adminViewAllRent/adminViewAllRent";
import { TutorReturnBooks } from "./Components/tutor/tutorReturnBooks/tutorReturnBooks";
import { AdminViewReturnReq } from "./Components/admin/adminViewReturnReq/adminViewReturnReq";
import { TutorEditProfile } from "./Components/tutor/tutorEditProfile/tutorEditProfile";
import { AdminSideBar } from "./Components/admin/adminSideBar/adminSidBar";
import { AdminDashboard } from "./Components/admin/adminDashboard/adminDashboard";

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
          <Route path="/admin/approve-tutor" element={<AdminApproveTutor/>} />
          <Route path="/admin/view-approved-tutor" element={<AdminViewApproveTutor/>} />
          <Route path="/admin/view-all-rental" element={<AdminViewAllRental/>} />
          <Route path="/admin/view-retun-req" element={<AdminViewReturnReq/>} />
          <Route  path="/admin/sidebar" element={<AdminSideBar/>} />
          <Route path="/admin/dashBoard" element={<AdminDashboard/>} />
          {/* tutor */}
          <Route path="/tutorLogin" element={<TutorLogin />} />
          <Route path="/tutorSignup" element={<TutorSignUp/>} />
          <Route path="/tutor-sidebar" element={<TutorSidebar/>} />
          <Route path="/tutor-dashboard" element={<TutorDashboard/>} />
          <Route path="/tutor-viewBook" element={<TutorViewBook/>} />
          <Route path="/tutor/profile" element={<TutorProfile/>} />
          <Route path ="/tutor/Edit-profile" element={<TutorEditProfile/>} />
          <Route path="/tutor/forgot-password" element={<TutorForgotPassword/>} />
          <Route path="/tutor/view-single-product/:id" element={<TutorviewSingleProduct/>} />
          <Route path="/tutor/active-rental" element={<TutorActiveRental/>} />
          <Route path="/tutor/cart" element={<TutorCart/>}/>
          <Route path="/tutor/return-books/:id" element={<TutorReturnBooks/>} />
          {/* 404 page */}
          <Route path="/*" element={<h1>The page not available</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
