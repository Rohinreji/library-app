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
import axiosInstance from "../../../apis/axiosInstance";
export const StudentviewSingleProduct = ({ productId, reDirectToCart }) => {
  const [cartCount, setCartCount] = useState(1);
  const [data, SetData] = useState({});
  const [studentId, SetStudentId] = useState();
  const [cartData, setCartData] = useState([]);
  const [rentNowApprove, setRentNowApprove] = useState(false);

  const getData = async () => {
    console.log(productId, "or");
    try {
      const response = await axios.get(
        `http://localhost:3005/view-single-product/${productId}`
      );
      if (response.status === 200) {
        SetData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("studentId");
    if (id) {
      SetStudentId(id);
    } else {
      toast.error("login Again");
    }
    getData();
  }, []);

  const addToCart = async (booksId) => {
    try {
      console.log("bookid", booksId);
      const response = await axios.post(
        "http://localhost:3005/studentAddToCart",
        { booksId, studentId, addedQuantity: cartCount }
      );
      if (response.status === 200) {
        toast.success(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    } finally {
      getData();
    }
  };
  const clickToCart = (booksId) => {
    if (data.availableCopies == 0) {
      toast.error("Book not available");
    } else {
      addToCart(booksId);
      updateQuantity(booksId, cartCount);
    }
  };

  const rentBook = async (booksId) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/studentAddRentBook",
        { booksId, studentId, addedQuantity: cartCount }
      );
      if (response.status == 200) {
        toast.success(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const clickToRent = (booksId) => {
    if (data.availableCopies == 0) {
      toast.error("Book not available");
    } else {
      rentBook(booksId);
      updateQuantity(booksId, cartCount);
    }
  };
  const updateQuantity = async (booksId, cartCount) => {
    try {
      console.log(cartCount, "cartCount");
      const response = await axiosInstance.post(
        `removeBookQuantity/${booksId}`,
        { quantity: cartCount }
      );
      if (response.status === 200) {
        console.log("available copies updated");
        setRentNowApprove(true);
      }
    } catch (error) {
      if (error.status === 408) {
        toast.error("book is not available");
        setRentNowApprove(false);
      }
      console.log(error);
    }
  };
  const ViewCart = async (studentId) => {
    try {
      const response = await axiosInstance.post("/studentViewCart", {
        studentId,
      });
      if (response.status === 200) {
        setCartData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    ViewCart(studentId);
  }, [data]);
  console.log("cart", cartData);
  const newArray = cartData.find((value) => {
    if (data._id === value?.booksId._id) return true;
  });

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
          {/* <div className="d-flex pt-4"> */}
            {/* <h2>
              <FaRupeeSign />
              {cartCount > 1 ? product.price * cartCount : product.price}
            </h2> */}
            {/* <h5>Quantity</h5>
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
          </div> */}
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
            {/* <button
              className="student-view-single-product-addToCart"
              style={{ cursor: "pointer" }}
              onClick={() => {
                clickToCart(data._id);
              }}
            >
              {" "}
              <MdOutlineShoppingCart /> Add to cart
            </button> */}

            {newArray?.isActive ? (
              <button
                className="student-view-single-product-addToCart"
                onClick={() => {
                  // navigate("/tutor/cart");
                  reDirectToCart();
                }}
              >
                {" "}
                <MdOutlineShoppingCart /> Go to Cart
              </button>
            ) : (
              <button
                className="student-view-single-product-addToCart"
                onClick={() => {
                  clickToCart(data._id);
                }}
              >
                {" "}
                <MdOutlineShoppingCart /> Add to cart
              </button>
            )}
            <button
              className="student-view-single-product-buyNow"
              style={{ cursor: "pointer" }}
              onClick={() => {
                clickToRent(data._id);
              }}
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
