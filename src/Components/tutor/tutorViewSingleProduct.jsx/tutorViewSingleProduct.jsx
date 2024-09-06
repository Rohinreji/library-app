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
export const TutorviewSingleProduct = () => {
  const [cartCount, setCartCount] = useState("");
  const [tutorId, setTutorId] = useState("");
  const[booksId,setBooksId]= useState("")
 const[rentBookId,setRentBookId] = useState("")
  const [data, setData] = useState({});
  const { id } = useParams();

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

  const handleRentNow = async (booksId) => {
    try {
      const response = await axios.post(`http://localhost:3005/rendBookByTutor`,{tutorId,booksId});
      if (response.status === 200) {
        toast.success("rent request sended");
      }
    } catch (error) {
      console.log(error);
    }
  };

// add to cart api call


const handleAddToCart = async (booksId) =>
{
try {
  const response = await axios.post("http://localhost:3005/tutorAddToCart",{tutorId,booksId})
  console.log(response);
  if(response.status === 200)
  {
    toast.success(response.data.msg)
  }
} catch (error) {
  console.log(error);
}
}

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

          <div className="d-flex my-5">
            <button 
            className="student-view-single-product-addToCart"
            onClick={()=>
            {
              setBooksId(data._id)
              handleAddToCart(data._id)
              
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
