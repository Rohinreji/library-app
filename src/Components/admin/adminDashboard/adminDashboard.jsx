import { useState } from "react";
import { AdminApproveTutor } from "../adminApproveTutor.jsx/adminApproveTutotor";
import { AdminViewApproveTutor } from "../adminViewApprovedTutor/adminViewApprovedTutor";
import { AdminViewAllRental } from "../adminViewAllRent/adminViewAllRent";
import { AdminViewReturnReq } from "../adminViewReturnReq/adminViewReturnReq";
import { AdminSideBar } from "../adminSideBar/adminSidBar";
import { AdminAddProduct } from "../adminAddProduct/adminAddProduct";
import { AdminViewRentedBooks } from "../adminViewRentedBook/adminViewRentedBooks";

export const AdminDashboard = () => {
  const [selectedpage, setSelectedPage] = useState();
  const changeSelectedPage = (value) => {
    setSelectedPage(value);
  };
  return (
  <div className="row">
      <div className="col-2">
        <AdminSideBar changeSelectedPage={changeSelectedPage}/>
        </div>
        <div className="col-10">
            {selectedpage === "adminAddBook" && <AdminAddProduct/>}
          {selectedpage === "approveTutor" && <AdminApproveTutor />}
          {selectedpage === "viewAllTutor" && <AdminViewApproveTutor />}
          {selectedpage === "approveRentOfTutor" && <AdminViewAllRental />}
          {selectedpage === "viewRentedBooksByTutor"&& <AdminViewRentedBooks/>} 
          {selectedpage === "tutorReturnReq" && <AdminViewReturnReq />}
        </div>
  </div>
  );
};
