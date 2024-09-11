import { useState } from "react";
import { TutorSidebar } from "../tutorSidebar/tutorSidebar";
import { TutorViewBook } from "../tutorViewBook/tutorViewBook";
import { TutorProfile } from "../tutorProfile/tutorProfile";
import { TutorActiveRental } from "../tutorActiveRental/tutorActiveRental";
import { TutorCart } from "../tutorcart/tutorCart";
import { useNavigate } from "react-router-dom";
import { StudentHome } from "../../student/studentHome/studentHome";

export const TutorDashboard = () => {
  const navigate = useNavigate()
  const [selectePage, setSelectedPage] = useState("tutorViewBook");
  const changeSelectedPage = (value) => {
    setSelectedPage(value);
  };
  const reDirectToViewSingleBook = (value) =>
  {
navigate(`/tutor/view-single-product/${value}`)
  }

  return (
    <div className="row">
      <div className="col-2">
        <TutorSidebar changeSelectedPage={changeSelectedPage} />
      </div>
      <div className="col-10">
        {selectePage === "dashBoard" && <TutorViewBook  reDirectToViewSingleBook={reDirectToViewSingleBook}/>}
        {selectePage === "cart" && <TutorCart />}

        {selectePage === "profile" && <TutorProfile />}
        {selectePage == "activeRental" && <TutorActiveRental />}
      </div>
    </div>
  );
};
