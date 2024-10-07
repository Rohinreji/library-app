import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import bookImage from "../../../Assests/fantacyBooks1.jpg";
import "./studentViewSingleProduct.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../../apis/baseURL";
import toast from "react-hot-toast";
export const StudentviewSingleProduct = () => {
  const [cartCount, setCartCount] = useState("");
  const [data, SetData] = useState({});
  const { id } = useParams();
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3005/view-single-product/${id}`
      );
      if (response.status == 200) {
        SetData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      getData();
    }else{
      toast.error("login Again")
    }
  }, []);
  return (
    <div className="student-view-single-product shadow">
      <Row>
        <Col className=" student-view-single-product-left-box ">
          <img
            src={`${BASE_URL}${data?.bookImage?.filename}`}
            alt=""
            className="shadow"
          />
        </Col>
        <Col>
          <h3>{data.bookTitle}</h3>
          <div className="d-flex pt-4">
            {/* <h2>
              <FaRupeeSign />
              {cartCount > 1 ? product.price * cartCount : product.price}
            </h2> */}
            <h5>Quantity</h5>
            <div
              role="group"
              className="d-flex mx-5  my-2 student-view-single-product-count "
            >
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCartCount(parseInt(cartCount + 1));
                }}
              >
                +
              </div>
              <div className="shadow" style={{ cursor: "pointer" }}>
                {cartCount < 2 ? 1 : cartCount}
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setCartCount(cartCount - 1);
                }}
              >
                -
              </div>
            </div>
          </div>
          {/* <h6>
            {product.description.length > 220
              ? product.description.substring(0, 220) + "..."
              : product.description}
          </h6> */}

          <table className="tutorView-single-product-table">
            <tr>
              <td>Author</td>
              <td>:</td>
              <td>{data.author}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>:</td>
              <td>{data.category}</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>:</td>
              <td>{data.language}</td>
            </tr>
            <tr>
              <td>Available copies</td>
              <td>:</td>
              <td>{data.availableCopies}</td>
            </tr>
          </table>
          <div className="d-flex my-5">
            <button
              className="student-view-single-product-addToCart"
              style={{ cursor: "pointer" }}
            >
              {" "}
              <MdOutlineShoppingCart /> Add to cart
            </button>
            <button
              className="student-view-single-product-buyNow"
              style={{ cursor: "pointer" }}
            >
              {" "}
              <AiFillThunderbolt /> Rent Now
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
