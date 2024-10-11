import { useState } from "react";
import { StudentNav } from "../../student/studentHome/studentNav/studentNav";
import { useNavigate } from "react-router-dom";

export const TutorSidebar = ({changeSelectedPage}) => {
  const [dropCat, setDropCat] = useState(false);
const navigate = useNavigate()
  return (
    <div>
        <div>

      <div className="d-flex ">
        <div className="student-sidebar">
        <h2 className="openlibrary-heading my-3">Open Library</h2>

          <ul>
            <li
              onClick={() => {
                setDropCat(!dropCat)
                changeSelectedPage("dashBoard")
              }}
            >
              DashBoard
            </li>
            <></>

            <li onClick={()=>{changeSelectedPage("activeRental")}}>Active Rentals</li>
            <li onClick={()=>{changeSelectedPage("tutorWishlist")}}>Wishlist</li>
            {/* <li>Notification</li> */}
            <li onClick={()=>{changeSelectedPage("cart")}}>Cart</li>
            {/* <li>Request book</li> */}
            <li onClick={()=>{changeSelectedPage("profile")}}>profile</li>

            <li 
            
            className="text-danger fs-3 fw-bolder"
            onClick={()=>{localStorage.removeItem("tutorId")
              navigate("/tutorLogin")

            }
          }
            
            >Logout</li>
          </ul>
        </div>
      </div>
    </div>
    
    </div>
  );
};
