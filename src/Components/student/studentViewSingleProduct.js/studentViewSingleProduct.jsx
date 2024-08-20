import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import bookImage from "../../../Assests/fantacyBooks1.jpg";
import "./studentViewSingleProduct.css";
import { useState } from "react";
export const StudentviewSingleProduct = () => {
  const [cartCount, setCartCount] = useState("");
  const product = {
    description:
      " THE PHENOMENAL INTERNATIONAL BESTSELLER OVER 1O MILLION COPIES SOL      WORLDWIDE Transform your life with tiny changes in behaviour,          starting now. People think that when you want to change your life,          you need to think big. But world-renowned habits expert James Clear",
    price: 750,
  };

  return (
    <div className="student-view-single-product shadow">
      <Row>
        <Col className=" student-view-single-product-left-box ">
          <img src={bookImage} alt="" className="shadow" />
        </Col>
        <Col>
          <h3>HUNTERSS</h3>
          <div className="d-flex pt-4">
            <h2>
              <FaRupeeSign />
              {cartCount > 1 ? product.price * cartCount : product.price}
            </h2>
            <div
              role="group"
              className="d-flex mx-5  my-2 student-view-single-product-count "
            >
              <div
                onClick={() => {
                  setCartCount(parseInt(cartCount + 1));
                }}
              >
                +
              </div>
              <div className="shadow">{cartCount < 2 ? 1 : cartCount}</div>
              <div
                onClick={() => {
                  setCartCount(cartCount - 1);
                }}
              >
                -
              </div>
            </div>
          </div>
          <h6>
            {product.description.length > 220
              ? product.description.substring(0, 220) + "..."
              : product.description}
          </h6>

          <div className="d-flex my-5">
            <button className="student-view-single-product-addToCart">
              {" "}
              <MdOutlineShoppingCart /> Add to cart
            </button>
            <button className="student-view-single-product-buyNow">
              {" "}
              <AiFillThunderbolt /> Rent Now
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
