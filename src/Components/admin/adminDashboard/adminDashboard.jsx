import { useState } from "react";
import { AdminApproveTutor } from "../adminApproveTutor.jsx/adminApproveTutotor";
import { AdminViewApproveTutor } from "../adminViewApprovedTutor/adminViewApprovedTutor";
import { AdminViewAllRental } from "../adminViewAllRent/adminViewAllRent";
import { AdminViewReturnReq } from "../adminViewReturnReq/adminViewReturnReq";
import { AdminSideBar } from "../adminSideBar/adminSidBar";
import { AdminAddProduct } from "../adminAddProduct/adminAddProduct";
import { AdminViewRentedBooks } from "../adminViewRentedBook/adminViewRentedBooks";
import { AdminViewAllBook } from "../adminViewAllBook/adminViewAllBooks";

export const AdminDashboard = () => {
  const [selectedpage, setSelectedPage] = useState("adminViewBooks");
  const changeSelectedPage = (value) => {
    setSelectedPage(value);
  };

const redirectToAdminViewAllBook = () =>
{
setSelectedPage("adminViewBooks")
}

  return (
  <div className="row">
      <div className="col-2">
        <AdminSideBar changeSelectedPage={changeSelectedPage}/>
        </div>
        <div className="col-10">
          {selectedpage === "adminViewBooks" && <AdminViewAllBook/>} 
            {selectedpage === "adminAddBook" && <AdminAddProduct redirectToAdminViewAllBook={redirectToAdminViewAllBook} />}
          {selectedpage === "approveTutor" && <AdminApproveTutor />}
          {selectedpage === "viewAllTutor" && <AdminViewApproveTutor />}
          {selectedpage === "approveRentOfTutor" && <AdminViewAllRental />}
          {selectedpage === "viewRentedBooksByTutor"&& <AdminViewRentedBooks/>} 
          {selectedpage === "tutorReturnReq" && <AdminViewReturnReq />}
        </div>
  </div>
  );
};
