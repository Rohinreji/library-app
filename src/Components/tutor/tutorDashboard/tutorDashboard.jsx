import { useState } from "react";
import { TutorSidebar } from "../tutorSidebar/tutorSidebar";
import { TutorViewBook } from "../tutorViewBook/tutorViewBook";
import { TutorProfile } from "../tutorProfile/tutorProfile";
import { TutorActiveRental } from "../tutorActiveRental/tutorActiveRental";
import { TutorCart } from "../tutorcart/tutorCart";
import { useNavigate } from "react-router-dom";
import { Tutorwishlist } from "../tutorWishlist/tutorwishlist";
import { TutorviewSingleProduct } from "../tutorViewSingleProduct.jsx/tutorViewSingleProduct";
import { TutorReturnBooks } from "../tutorReturnBooks/tutorReturnBooks";
import { BiLogIn } from "react-icons/bi";
import { StudentNav } from "../../student/studentHome/studentNav/studentNav";
import Footer from "../../common/footer/footer";
import { TutorNav } from "../TutorHome/studentNav/tutorNav";
import { TutorSecNav } from "../tutorSecNav/tutorSecNav";

export const TutorDashboard = () => {
  const navigate = useNavigate();
  const [selectePage, setSelectedPage] = useState("dashBoard");
  const [productId, setProductId] = useState("");
  const changeSelectedPage = (value) => {
    setSelectedPage(value);
  };
  const [fine,setFine] = useState("")
  const [date,setDate] = useState("")

  const reDirectToViewSingleBook = (value) =>
  {
    
// navigate(`/tutor/view-single-product/${value}`)
setProductId(()=>value)
setSelectedPage("tutorViewSingleProduct")
  }

  const redirectToReturnBook = (id) => {
    setProductId(() => id);
    setSelectedPage("redirectToReturnBook");
  };

  const redirectToCart = () =>
  {
    setSelectedPage("cart")
  }
  
  const getFine = (value) =>
  {
setFine(value)
  }

  const getDate = (value) =>

    {
      setDate(value)
    }

  return (
    <div>
      <TutorSecNav changeSelectedPage={changeSelectedPage}/>
      <div className="row">
      <div className="col-2">
        <TutorSidebar changeSelectedPage={changeSelectedPage} />
      </div>
      <div className="col-10">
        {selectePage === "dashBoard" && (
          <TutorViewBook reDirectToViewSingleBook={reDirectToViewSingleBook} />
        )}
        {selectePage === "tutorViewSingleProduct" && (
          <TutorviewSingleProduct
            productId={productId}
            redirectToCart={redirectToCart}
          />
        )}
        {selectePage === "cart" && <TutorCart />}
        {selectePage === "profile" && <TutorProfile />}
        {selectePage === "activeRental" && <TutorActiveRental redirectToReturnBook={redirectToReturnBook} getFine={getFine} getDate={getDate}/>}
        {selectePage ==="redirectToReturnBook" && <TutorReturnBooks productId={productId} fine={fine} date={date}/>}
        {selectePage === "tutorWishlist" && <Tutorwishlist reDirectToViewSingleBook={reDirectToViewSingleBook}/>} 
     
      
      </div>
    </div>
    <Footer/>
    </div>
  );
};
