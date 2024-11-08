
import { useState } from "react";
import { TutorSidebar } from "../tutorSidebar/tutorSidebar";
import { TutorViewBook } from "../tutorViewBook/tutorViewBook";
import { TutorProfile } from "../tutorProfile/tutorProfile";
import { TutorActiveRental } from "../tutorActiveRental/tutorActiveRental";
import { TutorCart } from "../tutorcart/tutorCart";
import { useNavigate } from "react-router-dom";
import { StudentHome } from "../../student/studentHome/studentHome";
import { Tutorwishlist } from "../tutorWishlist/tutorwishlist";
import { TutorviewSingleProduct } from "../tutorViewSingleProduct.jsx/tutorViewSingleProduct";
import { TutorReturnBooks } from "../tutorReturnBooks/tutorReturnBooks";

export const TutorDashboard = () => {
  const navigate = useNavigate()
  const [selectePage, setSelectedPage] = useState("dashBoard");
  const changeSelectedPage = (value) => {
    setSelectedPage(value);
  };
  const[productId,setProductId] = useState("")
  
  const reDirectToViewSingleBook = (value) =>
  {
// navigate(`/tutor/view-single-product/${value}`)
setProductId(()=>value)
setSelectedPage("tutorViewSingleProduct")
  }

  const redirectToReturnBook=(id)=>
  {
    setProductId(()=>id)
    setSelectedPage("redirectToReturnBook")
  }

  const redirectToCart = () =>
  {
    setSelectedPage("cart")
  }

  return (
    <div className="row">
      <div className="col-2">
        <TutorSidebar changeSelectedPage={changeSelectedPage} />
      </div>
      <div className="col-10">
        {selectePage === "dashBoard" && <TutorViewBook  reDirectToViewSingleBook={reDirectToViewSingleBook}/>}
        {selectePage ==="tutorViewSingleProduct" && <TutorviewSingleProduct productId={productId} redirectToCart={redirectToCart}/>}
        {selectePage === "cart" && <TutorCart />}

        {selectePage === "profile" && <TutorProfile />}
        {selectePage === "activeRental" && <TutorActiveRental redirectToReturnBook={redirectToReturnBook} />}
        {selectePage ==="redirectToReturnBook" && <TutorReturnBooks productId={productId}/>}
        {selectePage === "tutorWishlist" && <Tutorwishlist reDirectToViewSingleBook={reDirectToViewSingleBook}/>} 
      </div>
    </div>
  );
};
