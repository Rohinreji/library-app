import { Navbar } from "react-bootstrap";
import { StudentSidebar } from "../studentSidebar/studentSidebar";
import { StudentViewProduct } from "../studentViewProduct/studentViewProduct";
import { useState } from "react";
import { StudentViewBook } from "../studentViewAllBook/studentViewAllBook";

export const StudentDashboard = () => {
  const [selectedpage, setSelectedPage] = useState();
  const changeSelectedPage = (value) => {
    setSelectedPage(value);
  };
  return (
    <div>
      <div className="d-flex">
        <div className="col-2">
          <StudentSidebar changeSelectedPage={changeSelectedPage} />
        </div>
        <div className="col-10">
          {selectedpage === "viewProduct" && <StudentViewBook />}
        </div>{" "}
      </div>
    </div>
  );
};
