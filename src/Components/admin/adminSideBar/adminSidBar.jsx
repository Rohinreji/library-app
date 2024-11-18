import { useState } from "react";
import "./adminSideBar.css";
export const AdminSideBar = ({ changeSelectedPage }) => {
  const [viewTutorDD, setViewTutorDD] = useState(false);
  const [rentProductByTutor, setRentProductByTutor] = useState(false);
  const [viewStudent, setViewStudent] = useState(false);
  const [studentRentProduct, setStudentRentProduct] = useState(false);
  const [viewUser, setViewUser] = useState(false);
  const [rental, setRental] = useState(false);
  const [retunReq, setReturnReq] = useState(false);
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
        <h2 className="openlibrary-heading">Open Library</h2>
        <ul>
          <li
            onClick={() => {
              changeSelectedPage("adminAddBook");
            }}
          >
            Add books
          </li>
          <li
            onClick={() => {
              changeSelectedPage("chat");
            }}
          >
            chat with tutor
          </li>

          <li onClick={toggleViewUsers}>View Users</li>
          {viewUser && (
            <div className="shadow mx-3">
              <li onClick={toggleViewTutor}> tutors</li>
              {viewTutorDD && (
                <div className="shadow mx-3">
                  <li
                    onClick={() => {
                      changeSelectedPage("approveTutor");
                    }}
                  >
                    Approve 
                  </li>
                  <li
                    onClick={() => {
                      changeSelectedPage("viewAllTutor");
                    }}
                  >
                    View all 
                  </li>
                </div>
              )}
              <li onClick={toggleViewStudents}> Students</li>
              {viewStudent && (
                <div className="shadow mx-3">
                  <li
                    onClick={() => {
                      changeSelectedPage("studentReq");
                    }}
                  >
                    Approve 
                  </li>
                  <li
                    onClick={() => {
                      changeSelectedPage("approvedStudent");
                    }}
                  >
                    View all 
                  </li>
                </div>
              )}
            </div>
          )}

          <li onClick={toggleRentals}>Rentals</li>
          {rental && (
            <div className="shadow mx-3">
              <li onClick={toggleStudentRentProduct}>Student </li>
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

              <li onClick={toggleTutorRentProduct}>tutor </li>
              {rentProductByTutor && (
                <div className="shadow mx-3">
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
                  > rented books
                  </li>
                </div>
              )}
            </div>
          )}

          <li onClick={toggleRetunReq}>Return Request</li>

          {retunReq && (
            <div className="shadow mx-3">
              <li
                onClick={() => {
                  changeSelectedPage("tutorReturnReq");
                }}
              >
                Tutor
              </li>

              <li
                onClick={() => {
                  changeSelectedPage("studentReturnRequest");
                }}
              >
                Student
              </li>
            </div>
          )}

          <li
            className="text-danger fs-3"
            onClick={() => {
              localStorage.removeItem("adminId");
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};
