import { useState } from "react";
import { StudentNav } from "../../student/studentHome/studentNav/studentNav";
import { useNavigate } from "react-router-dom";
import { SiBookstack } from "react-icons/si";
import { MdFavoriteBorder } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { AiFillBook } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import "../../student/studentSidebar/studentSidebar.css";
export const TutorSidebar = ({ changeSelectedPage }) => {
  const [dropCat, setDropCat] = useState(false);
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div className="d-flex ">
          <div className="student-sidebar">
            <div className="openlibrary-heading">
              <h3>DashBoard</h3>
            </div>

            <ul>
              <li
                onClick={() => {
                  setDropCat(!dropCat);
                  changeSelectedPage("dashBoard");
                }}
              >
                <SiBookstack /> Books
              </li>
              <></>

              <li
                onClick={() => {
                  changeSelectedPage("tutorWishlist");
                }}
              >
                <MdFavoriteBorder className="wishlist_icon" />
                Wishlist
              </li>
              {/* <li>Notification</li> */}
              <li
                onClick={() => {
                  changeSelectedPage("cart");
                }}
              >
                <FaShoppingCart /> Cart
              </li>
              {/* <li>Request book</li> */}
              <li
                onClick={() => {
                  changeSelectedPage("activeRental");
                }}
              >
                <AiFillBook />
                Rentals
              </li>

              {/* <li
                onClick={() => {
                  changeSelectedPage("profile");
                }}
              >
                profile
              </li> */}

              <li
                className="  fw-bolder studentSidebar_logout"
                onClick={() => {
                  localStorage.removeItem("tutorId");
                  navigate("/tutorLogin");
                }}
              >
                {" "}
                <MdOutlineLogout /> Logout
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
