import { useState } from "react";
import { StudentNav } from "../../student/studentHome/studentNav/studentNav";

export const TutorSidebar = ({changeSelectedPage}) => {
  const [dropCat, setDropCat] = useState(false);

  return (
    <div>
        <div>
      <div className="d-flex ">
        <div className="student-sidebar">
          <ul>
            <li
              onClick={() => {
                setDropCat(!dropCat)
                changeSelectedPage("category")
              }}
            >
              Category
            </li>
            <></>

            <li>Active Rentals</li>
            <li>Wishlist</li>
            <li>Notification</li>
            <li>Cart</li>
            <li>Request book</li>
            <li onClick={()=>{changeSelectedPage("profile")}}>profile</li>

            <li className="text-danger fs-3 fw-bolder">Logout</li>
          </ul>
        </div>
      </div>
    </div>
    
    </div>
  );
};
