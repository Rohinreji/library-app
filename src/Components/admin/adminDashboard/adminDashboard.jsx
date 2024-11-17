import { useState } from "react";
import { AdminApproveTutor } from "../adminApproveTutor.jsx/adminApproveTutotor";
import { AdminViewApproveTutor } from "../adminViewApprovedTutor/adminViewApprovedTutor";
import { AdminViewAllRental } from "../adminViewAllRent/adminViewAllRent";
import { AdminViewReturnReq } from "../adminViewReturnReq/adminViewReturnReq";
import { AdminSideBar } from "../adminSideBar/adminSidBar";
import { AdminAddProduct } from "../adminAddProduct/adminAddProduct";
import { AdminViewRentedBooks } from "../adminViewRentedBook/adminViewRentedBooks";

import { AdminViewStudentRequest } from "../adminViewStudentRequest/adminViewStudentRequest";
import { AdminViewApprovedStudent } from "../adminViewApprovedStudent/adminViewApprovedStudent";

import { AdminViewAllBook } from "../adminViewAllBook/adminViewAllBooks";
import { AdminChatDashBoard } from "../adminChatDashboard/adminChatDashBoard";
import { AdminPleaseLogin } from "../adminPleaseLogin/adminPleaseLogin";
import { MyVerticallyCenteredModal } from "../adminLoginModal/adminLoginModal";
import { AdminViewAllStdRental } from "../adminViewStdRental/adminViewStdRental";
import { AdminViewStdRented } from "../adminViewStdRented/adminViewStdRented";
import { AdminViewReturnStdReq } from "../adminViewReturnStdReq/AdminViewReturnStdReq";

export const AdminDashboard = () => {
  const [selectedpage, setSelectedPage] = useState("adminViewBooks");
  const changeSelectedPage = (value) => {
    setSelectedPage(value);
  };

  const redirectToAdminViewAllBook = () => {
    setSelectedPage("adminViewBooks");
  };
  let adminId = localStorage.getItem("adminId");

  return (
    <div>
      {adminId ? (
        <div className="row">
          <div className="col-2">
            <AdminSideBar changeSelectedPage={changeSelectedPage} />
          </div>
          <div className="col-10">
            {selectedpage ==="adminViewBooks" && <AdminViewAllBook/>}
            {selectedpage === "adminAddBook" && <AdminAddProduct />}
            {selectedpage === "approveTutor" && <AdminApproveTutor />}
            {selectedpage === "viewAllTutor" && <AdminViewApproveTutor />}
            {selectedpage === "approveRentOfTutor" && <AdminViewAllRental />}
            {selectedpage === "viewRentedBooksByTutor" && (
              <AdminViewRentedBooks />
            )}
            {selectedpage === "tutorReturnReq" && <AdminViewReturnReq />}
            {selectedpage === "studentReq" && <AdminViewStudentRequest />}
            {selectedpage === "approvedStudent" && <AdminViewApprovedStudent />}
            {selectedpage === "chat" && <AdminChatDashBoard/>}
            {selectedpage === "viewStdRentals" && <AdminViewAllStdRental />}
            {selectedpage === "viewStdRentedBooks" && <AdminViewStdRented />}
            {selectedpage === "studentReturnRequest" && (
              <AdminViewReturnStdReq />
            )}
          </div>
        </div>
      ) : (
        <AdminPleaseLogin/>
      )}
    </div>
  );
};
