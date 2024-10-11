import { useState } from "react";
import { AdminApproveTutor } from "../adminApproveTutor.jsx/adminApproveTutotor";
import { AdminViewApproveTutor } from "../adminViewApprovedTutor/adminViewApprovedTutor";
import { AdminViewAllRental } from "../adminViewAllRent/adminViewAllRent";
import { AdminViewReturnReq } from "../adminViewReturnReq/adminViewReturnReq";
import { AdminSideBar } from "../adminSideBar/adminSidBar";
import { AdminAddProduct } from "../adminAddProduct/adminAddProduct";
import { AdminViewRentedBooks } from "../adminViewRentedBook/adminViewRentedBooks";
<<<<<<< HEAD
import { AdminViewStudentRequest } from "../adminViewStudentRequest/adminViewStudentRequest";
import { AdminViewApprovedStudent } from "../adminViewApprovedStudent/adminViewApprovedStudent";
=======
import { AdminViewAllBook } from "../adminViewAllBook/adminViewAllBooks";
>>>>>>> 6348941f21f8a41fefbd6c249c9526d0bf6ea4de

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
<<<<<<< HEAD
        <AdminSideBar changeSelectedPage={changeSelectedPage} />
      </div>
      <div className="col-10">
        {selectedpage === "adminAddBook" && <AdminAddProduct />}
        {selectedpage === "approveTutor" && <AdminApproveTutor />}
        {selectedpage === "viewAllTutor" && <AdminViewApproveTutor />}
        {selectedpage === "approveRentOfTutor" && <AdminViewAllRental />}
        {selectedpage === "viewRentedBooksByTutor" && <AdminViewRentedBooks />}
        {selectedpage === "tutorReturnReq" && <AdminViewReturnReq />}
        {selectedpage === "approveStudent" && <AdminViewStudentRequest />}
        {selectedpage === "approvedStudent" && <AdminViewApprovedStudent />}
      </div>
    </div>
=======
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
>>>>>>> 6348941f21f8a41fefbd6c249c9526d0bf6ea4de
  );
};
