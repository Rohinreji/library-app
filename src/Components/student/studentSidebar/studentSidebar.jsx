import { useState } from "react";

import "./studentSidebar.css";
export const StudentSidebar = () => {
  const [dropCat, setDropCat] = useState(false);

  return (
  <div>
      <div className="d-flex ">
      <div className="student-sidebar">
        <h2 className="openlibrary-heading">Open library</h2>
        <ul>
          <li
            onClick={() => {
              setDropCat(!dropCat);
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

          <li className="text-danger fs-3 fw-bolder">Logout</li>
        </ul>
      </div>
    </div>
  </div>
  );
};
