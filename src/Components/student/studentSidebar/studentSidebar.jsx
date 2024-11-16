import { useState } from "react";
import "./studentSidebar.css";
import { useNavigate } from "react-router-dom";
import { SiBookstack } from "react-icons/si";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";

export const StudentSidebar = ({ changeSelectedPage }) => {
  const [dropCat, setDropCat] = useState(false);
  const navigate = useNavigate();
  const removeStudentId = () => {
    localStorage.removeItem("studentId", removeStudentId);
    navigate("/studentLogin");
  };

  return (
    <div>
      <div className="d-flex ">
        <div className="student-sidebar">
          <div className="openlibrary-heading">
            <h3>DashBoard</h3>
          </div>
          <ul>
            <li
              onClick={() => {
                changeSelectedPage("viewProduct");
              }}
            >
              <SiBookstack /> Books
            </li>
            <li
              onClick={() => {
                changeSelectedPage("studentWishlist");
              }}
            >
              <MdFavoriteBorder className="wishlist_icon" />
              Wishlist
            </li>
            <li
              onClick={() => {
                changeSelectedPage("studentCart");
              }}
            >
              <FaShoppingCart /> Cart
            </li>
            {/* <li>Profile</li> */}
            <li
              onClick={() => {
                changeSelectedPage("stdActiveRentals");
              }}
            >
              <AiFillBook />
              Rentals
            </li>

            <li className="studentSidebar_logout" onClick={removeStudentId}>
              <MdOutlineLogout /> Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
