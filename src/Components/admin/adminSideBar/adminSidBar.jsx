import { useState } from "react";
import "./adminSideBar.css";
export const AdminSideBar = ({changeSelectedPage}) => {
  const [viewTutorDD, setViewTutorDD] = useState(false);
  const [rentProductByTutor, setRentProductByTutor] = useState(false);

  const toggleViewTutor = () => {
    setViewTutorDD(!viewTutorDD);
    setRentProductByTutor(false);
  };

  const toggleTutorRentProduct = () => {
    setRentProductByTutor(!rentProductByTutor);
    setViewTutorDD(false);
  };

  return (
    <div>
      <div className="admin-sidebar">
        <h2 className="openlibrary-heading">Open Library</h2>
        <ul>
    
          <li
          onClick={()=>{changeSelectedPage("adminAddBook")}}
          >Add books</li>
          <li onClick={toggleViewTutor}>View tutors</li>
          {viewTutorDD && (
            <div className="shadow mx-3">
              <li
                onClick={() => {
                    changeSelectedPage("approveTutor");
                }}
              >
                approve tutor
              </li>
              <li
                onClick={() => {
                    changeSelectedPage("viewAllTutor");
                }}
              >
                View all tutors
              </li>
            </div>
          )}

          <li onClick={toggleTutorRentProduct}>tutor rent product</li>
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
              >
                view rented books
              </li>
            </div>
          )}
             <li onClick={()=>{changeSelectedPage("tutorReturnReq")}}>
            Tutor return request
          </li>
        </ul>
      </div>
    </div>
  );
};
