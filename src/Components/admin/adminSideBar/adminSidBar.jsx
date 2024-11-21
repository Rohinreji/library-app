import { useState } from "react";
import "./adminSideBar.css";
import { useNavigate } from "react-router-dom";
import { SiBookstack } from "react-icons/si";
import { BiSolidBookAdd } from "react-icons/bi";
import { BsChatDotsFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FaUsersCog } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";
import { AiFillBook } from "react-icons/ai";
import { FaCodePullRequest } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";

export const AdminSideBar = ({ changeSelectedPage }) => {
  const [viewTutorDD, setViewTutorDD] = useState(false);
  const [rentProductByTutor, setRentProductByTutor] = useState(false);
  const [viewStudent, setViewStudent] = useState(false);
  const [studentRentProduct, setStudentRentProduct] = useState(false);
  const [viewUser, setViewUser] = useState(false);
  const [rental, setRental] = useState(false);
  const [retunReq, setReturnReq] = useState(false);
  const navigate = useNavigate();
  const toggleViewTutor = () => {
    setViewTutorDD(!viewTutorDD);
    setRentProductByTutor(false);
    setViewStudent(false);
    setStudentRentProduct(false);
    setViewUser(true);
  };
  const toggleViewStudents = () => {
    setViewStudent(!viewStudent);
    setViewTutorDD(false);
    setRentProductByTutor(false);
    setStudentRentProduct(false);
    setViewUser(true);
  };
  const toggleTutorRentProduct = () => {
    setRentProductByTutor(!rentProductByTutor);
    setViewTutorDD(false);
    setViewStudent(false);
    setStudentRentProduct(false);
    setViewUser(false);
  };
  const toggleStudentRentProduct = () => {
    setStudentRentProduct(!studentRentProduct);
    setViewTutorDD(false);
    setViewStudent(false);
    setRentProductByTutor(false);
    setViewUser(false);
  };

  const toggleViewUsers = () => {
    setViewUser(!viewUser);
    setStudentRentProduct(false);
    setViewTutorDD(false);
    setViewStudent(false);
    setRentProductByTutor(false);
    setRental(false);
    setReturnReq(false);
  };

  const toggleRentals = () => {
    setRental(!rental);
    setViewUser(false);
    setStudentRentProduct(false);
    setViewTutorDD(false);
    setViewStudent(false);
    setRentProductByTutor(false);
    setReturnReq(false);
  };

  const toggleRetunReq = () => {
    setReturnReq(!retunReq);
    setViewUser(false);
    setStudentRentProduct(false);
    setViewTutorDD(false);
    setViewStudent(false);
    setRentProductByTutor(false);
    setRental(false);
  };

  return (
    <div>
      <div className="admin-sidebar">
        <h2 className="openlibrary-heading">Admin Panel</h2>
        <ul>
          <li
            onClick={() => {
              changeSelectedPage("adminViewBooks");
            }}
          >
            <SiBookstack /> Books
          </li>
          <li
            onClick={() => {
              changeSelectedPage("adminAddBook");
            }}
          >
            <BiSolidBookAdd /> Add books
          </li>
          <li
            onClick={() => {
              changeSelectedPage("chat");
            }}
          >
            <BsChatDotsFill /> chat with tutor
          </li>

          <li onClick={toggleViewUsers}>
            <FaUsers /> Users
          </li>
          {viewUser && (
            <div className="admin_toggle shadow mx-3">
              <li onClick={toggleViewTutor}>
                {" "}
                <FaUsersCog />
                tutors
              </li>
              {viewTutorDD && (
                <div className="shadow mx-3">
                  <li
                    onClick={() => {
                      changeSelectedPage("approveTutor");
                    }}
                  >
                    <TiUserAdd /> Approve
                  </li>
                  <li
                    onClick={() => {
                      changeSelectedPage("viewAllTutor");
                    }}
                  >
                    <FaUsers /> View all
                  </li>
                </div>
              )}
              <li onClick={toggleViewStudents}>
                <FaUsersCog />
                Students
              </li>
              {viewStudent && (
                <div className="admin_toggle shadow mx-3">
                  <li
                    onClick={() => {
                      changeSelectedPage("studentReq");
                    }}
                  >
                    <TiUserAdd /> Approve
                  </li>
                  <li
                    onClick={() => {
                      changeSelectedPage("approvedStudent");
                    }}
                  >
                    <FaUsers /> View all
                  </li>
                </div>
              )}
            </div>
          )}

          <li onClick={toggleRentals}>
            {" "}
            <AiFillBook /> Rentals
          </li>
          {rental && (
            <div className="admin_toggle shadow mx-3">
              <li onClick={toggleStudentRentProduct}>
                {" "}
                <FaUsers /> Students{" "}
              </li>
              {studentRentProduct && (
                <div className="shadow mx-3">
                  <li
                    onClick={() => {
                      changeSelectedPage("viewStdRentals");
                    }}
                  >
                    approve rent
                  </li>
                  <li
                    onClick={() => {
                      changeSelectedPage("viewStdRentedBooks");
                    }}
                  >
                    rented books
                  </li>
                </div>
              )}

              <li onClick={toggleTutorRentProduct}>
                {" "}
                <FaUsers /> tutors{" "}
              </li>
              {rentProductByTutor && (
                <div className="admin_toggle shadow mx-3">
                  <li
                    onClick={() => {
                      changeSelectedPage("approveRentOfTutor");
                    }}
                  >
                    approve rent
                  </li>
                  <li
                    onClick={() => {
                      changeSelectedPage("viewRentedBooksByTutor");
                    }}
                  >
                    {" "}
                    rented books
                  </li>
                </div>
              )}
            </div>
          )}

          <li onClick={toggleRetunReq}>
            <FaCodePullRequest /> Return Request
          </li>

          {retunReq && (
            <div className="admin_toggle shadow mx-3">
              <li
                onClick={() => {
                  changeSelectedPage("tutorReturnReq");
                }}
              >
                <FaUsers /> Tutors
              </li>

              <li
                onClick={() => {
                  changeSelectedPage("studentReturnRequest");
                }}
              >
                <FaUsers /> Students
              </li>
            </div>
          )}

          <li
            className="text-danger fs-3"
            onClick={() => {
              localStorage.removeItem("adminId");
              navigate("/adminLogin");
            }}
          >
           <MdOutlineLogout />   Logout
          </li>
        </ul>
      </div>
    </div>
  );
};
