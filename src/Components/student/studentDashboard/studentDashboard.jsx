import { Navbar } from "react-bootstrap";
import { StudentSidebar } from "../studentSidebar/studentSidebar";
import { StudentViewProduct } from "../studentViewProduct/studentViewProduct";
import { useState } from "react";
import { StudentViewBook } from "../studentViewAllBook/studentViewAllBook";
import { StudentActiveRental } from "../studentActiveRental/studentActiveRental";
import { Studentwishlist } from "../studentWishlist/studentWishlist";
import { StudentviewSingleProduct } from "../studentViewSingleProduct.js/studentViewSingleProduct";
import { StudentCart } from "../studentCart/studentCart";
import { StudentReturnBooks } from "../studentReturnBook/studentReturnBook";
import { StudentNav } from "../studentHome/studentNav/studentNav";
import Footer from "../../common/footer/footer";
import { StudentProfile } from "../studentProfile/studentEditProfile";

export const StudentDashboard = () => {
  const [selectedpage, setSelectedPage] = useState("viewProduct");
  const [productId, setProductId] = useState("");
  const changeSelectedPage = (value) => {
    setSelectedPage(value);
  };
  const reDirectToViewSingleBook = (id) => {
    setProductId(() => id);
    setSelectedPage("studentViewSingleBook");
  };
  const reDirectToCart = () => {
    setSelectedPage("studentCart");
  };
  const redirectToReturnBook = (value) => {
    setProductId(() => value);
    setSelectedPage("redairectToReturnBook");
  };
  return (
    <div>
      <StudentNav changeSelectedPage={changeSelectedPage}/>
      <div className="d-flex">
        <div className="col-2">
          <StudentSidebar changeSelectedPage={changeSelectedPage} />
        </div>
        <div className="col-10">
          {selectedpage === "viewProduct" && (
            <StudentViewBook
              reDirectToViewSingleBook={reDirectToViewSingleBook}
            />
          )}
          {selectedpage === "stdActiveRentals" && (
            <StudentActiveRental redirectToReturnBook={redirectToReturnBook} />
          )}
          {selectedpage === "studentCart" && <StudentCart />}
          {selectedpage === "studentViewSingleBook" && (
            <StudentviewSingleProduct
              productId={productId}
              reDirectToCart={reDirectToCart}
            />
          )}
          {selectedpage === "redirectToReturnBook" && (
            <StudentReturnBooks productId={productId} />
          )}
          {selectedpage === "studentWishlist" && (
            <Studentwishlist
              reDirectToViewSingleBook={reDirectToViewSingleBook}
            />
          )}
          {selectedpage==="studentProfile"&& <StudentProfile/>}
        </div>{" "}
      </div>
      <Footer/>
    </div>
  );
};
