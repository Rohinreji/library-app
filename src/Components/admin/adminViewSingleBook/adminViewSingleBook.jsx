import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRupeeSign } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import axios from "axios";
import bookImage from "../../../Assests/fantacyBooks1.jpg";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../apis/baseURL";
import axiosInstance from "../../../apis/axiosInstance";
import "./adminViewSingleBook.css"
import AdminEditBook from "../adminEditBook/adminEditBook";
export const AdminviewSingleProduct = ({ productId,redirectToAdminViewAllBook }) => {
  const [cartCount, setCartCount] = useState(1);
  const [tutorId, setTutorId] = useState("");
  const [rentBookId, setRentBookId] = useState("");
  const [data, setData] = useState({});
  const { id } = useParams();
  const [rentNowApprove, setRentNowApprove] = useState(false);
  const [cartData, setCartData] = useState([]);
  const navigate = useNavigate();
  // book details api call

  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3005/view-single-product/${productId}`
      );

      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [data]);


  const deleteBook =async (id) =>
  {
    try {
        const response = await axiosInstance.post(`/admin-deleteBook/${id}`)
        if(response.status === 200)
        {
            toast.success("book is deleted")
            redirectToAdminViewAllBook()
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
          <h3 className="mx-5">{data?.bookTitle}</h3>

          <table className="adminView-single-product-table my-5">
            <tr>
              <td>Author</td>
              <td >:</td>
              <td>{data?.author}</td>
            </tr>
            <tr>
              <td>Year of publication</td>
              <td>:</td>
              <td>{data?.yearOfPublication}</td>
            </tr>
            <tr>
              <td>Category</td>
              <td>:</td>
              <td>{data?.category}</td>
            </tr>
            <tr>
              <td>Language</td>
              <td>:</td>
              <td>{data?.language}</td>
            </tr>
            <tr>
              <td>Available copies</td>
              <td>:</td>
              <td>{data?.availableCopies}</td>
            </tr>
          </table>

          <div className="d-flex my-5">

                <AdminEditBook booksId={data?._id}/>
            <button className="student-view-single-product-buyNow"
            onClick={()=>
            {
                deleteBook(data?._id)
            }
            }
            >
              Delete
            </button>
          </div>
        </Col>
      </Row>
    </div>
  );
};
