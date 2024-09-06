import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img1 from "../../../Assests/adminAddBook.jpg";
import Button from "react-bootstrap/Button";
import "./tutorCart.css";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../apis/baseURL";
export const TutorCart = () => {
  const [data, setdata] = useState([]);
  const[cartId,setCartId] = useState("")
  const tutorId = localStorage.getItem("tutorId");

  const getData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/tutorViewAddToCart",
        { tutorId }
      );

      if (response.status === 200) {
        setdata(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(data, "data ");


  const handleRemove = async (cartId) =>
  {
  try {
    const response = await axiosInstance.post(`tutorRemoveFromCart/${cartId}`)
    if(response.status === 200)
    {
      toast.success("removed from cart")
    }
  } catch (error) {
    console.log(error);
  }finally{
    getData()
  }
  }


  return (
    <div className="tutorCartMainBox">
      <h2>Cart</h2>
    {
      data.map((e,index)=>
      {
       const booksId = e.booksId
        return(
          <div className="tutorCartBody shadow">
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center "
            style={{ height: "50vh" }}
          >
            <img src={`${BASE_URL}${booksId?.bookImage?.filename}`} alt="" />
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <table>
              <tbody>
                <tr>
                  <td> book title</td>
                  <td>:</td>
                  <td>{booksId.bookTitle}</td>
                </tr>
                <tr>
                  <td>author</td>
                  <td>:</td>
                  <td>{booksId.author}</td>
                </tr>
                <tr>
                  <td>language</td>
                  <td>:</td>
                  <td>{booksId.language}</td>
                </tr>
                <tr>
                  <td>status</td>
                  <td>:</td>
                  <td>{booksId.status}</td>
                </tr>
              </tbody>
            </table>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            style={{ height: "50vh" }}
          >
            <Button
             variant="warning"
             onClick={()=>
             {
              setCartId(e._id)
              handleRemove(e._id)
             }
             }
             >Remove</Button>
          </Col>
        </Row>
      </div>
        )
      })
    }
    </div>
  );
};
