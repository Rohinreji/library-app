import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import axios from "axios";
import bookImage from "../../../Assests/fantacyBooks1.jpg";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../apis/baseURL";
import axiosInstance from "../../../apis/axiosInstance";
export const TutorviewSingleProduct = () => {
  const [cartCount, setCartCount] = useState(1);
  const [tutorId, setTutorId] = useState("");
  const [booksId, setBooksId] = useState("");
  const [rentBookId, setRentBookId] = useState("");
  const [data, setData] = useState({});
  const { id } = useParams();
  const [rentNowApprove, setRentNowApprove] = useState(false);

  // book details api call

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3005/view-single-product/${id}`
      );
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const id = localStorage.getItem("tutorId");
    if (id) {
      setTutorId(id);
    } else {
      toast.error("login again");
    }
    getData();
  }, []);

  console.log(booksId, "bookid");
  console.log(tutorId, "tutorid");

  // rent api call

  const bookRentNow = async (booksId, cartCount) => {
    try {
      const response = await axios.post(
        `http://localhost:3005/rendBookByTutor`,
        { tutorId, booksId, addedQuantity: cartCount }
      );
      if (response.status === 200) {
        toast.success("rent request sended");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // add to cart api call

  const addToCart = async (booksId, cartCount) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/tutorAddToCart",
        { tutorId, booksId, addedQuantity: cartCount }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToCart = (booksId) => {
    addToCart(booksId, cartCount);
    updateQuantity(booksId, cartCount);
  };

  // api call to update available copies

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

  const handleRentNow = (booksId) => {
    updateQuantity(booksId, cartCount);
    if (rentNowApprove) {
      bookRentNow(booksId, cartCount);
    }
  };

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
              className="d-flex mx-5  my-1 student-view-single-product-count "
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
            {/* {product.description.length > 220
              ? product.description.substring(0, 220) + "..."
              : product.description} */}
          </h6>

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
              onClick={() => {
                handleAddToCart(data._id);
              }}
            >
              {" "}
              <MdOutlineShoppingCart /> Add to cart
            </button>

            <button
              className="student-view-single-product-buyNow"
              onClick={() => {
                setBooksId(data._id);
                handleRentNow(data._id);
              }}
            >
              <AiFillThunderbolt /> Rent Now
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
