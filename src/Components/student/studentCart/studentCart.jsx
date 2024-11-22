import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../apis/baseURL";
import { FaCartShopping } from "react-icons/fa6";

export const StudentCart = () => {
  const [data, setdata] = useState([]);
  const studentId = localStorage.getItem("studentId");

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/studentViewCart",
        { studentId }
      );
      console.log("res", response);
      if (response.status == 200) {
        setdata(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log("data", data);

  const removeBookFromCart = async (cartId) => {
    try {
      console.log("cart", cartId);
      const response = await axios.post(
        `http://localhost:3005/removeBookFromCart/${cartId}`
      );
      if (response.status === 200) {
        toast.error("book removed from cart");
      }
    } catch (error) {
      console.log(error);
    } finally {
      getData();
    }
  };
  const updateQuantity = async (id, quantity) => {
    console.log("id", id);
    console.log("qua", quantity);

    try {
      const response = await axiosInstance.post(`/addBookQuantity/${id}`, {
        quantity,
      });
      if (response.status === 200) {
        console.log("quantity added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clickToRemove = (Id) => {
    removeBookFromCart(Id);
    console.log("cartid", Id);
  };

  const rentAllBook = async () => {
    try {
      const response = await axiosInstance.post("/rentAllBookFromCart", {
        studentId,
      });
      if (response.status === 200) {
        toast.success(response.data.msg);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!!");
    }
  };
  return (
    <div className="tutorCartMainBox">
      <div className="student_viewBooks">
        <h2>
          {" "}
          <FaCartShopping />
          Cart
        </h2>
      </div>

      {data.map((e, index) => {
        const booksId = e?.booksId;
        return (
          <div key={index} className="tutorCartBody">
            <Row>
              <Col
                className="d-flex justify-content-center align-items-center "
                style={{ height: "50vh" }}
              >
                <img
                  src={`${BASE_URL}${booksId?.bookImage?.filename}`}
                  alt=""
                />
              </Col>
              <Col
                className="d-flex justify-content-center align-items-center"
                style={{ height: "50vh" }}
              >
                <table>
                  <tbody>
                    <tr>
                      <td className="stdCart_headings"> BookTitle</td>
                      <td style={{ fontWeight: "bold" }}>:</td>
                      <td className="stdCart_Headname">{booksId?.bookTitle}</td>
                    </tr>
                    <tr>
                      <td className="stdCart_headings">Author</td>
                      <td>:</td>
                      <td className="stdCart_Headname">{booksId?.author}</td>
                    </tr>
                    <tr>
                      <td className="stdCart_headings">Category</td>
                      <td>:</td>
                      <td className="stdCart_Headname">{booksId?.category}</td>
                    </tr>
                    <tr>
                      <td className="stdCart_headings">Language</td>
                      <td>:</td>
                      <td className="stdCart_Headname">{booksId?.language}</td>
                    </tr>
                    <tr>
                      <td className="stdCart_headings"> Status</td>
                      <td>:</td>
                      <td className="stdCart_status ">
                        {booksId?.availableCopies > 0
                          ? "✅Available"
                          : "❌Not available"}
                      </td>
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
                  onClick={() => {
                    clickToRemove(e._id);
                    updateQuantity(booksId._id, e.addedQuantity);
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
      <button className="tutorCart-rentAllBook" onClick={rentAllBook}>
        <FaCartShopping /> Rent All Books
      </button>
    </div>
  );
};
