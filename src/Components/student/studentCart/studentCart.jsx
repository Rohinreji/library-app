import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../apis/baseURL";
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
  const clickToRemove = (cartId) => {
    removeBookFromCart(cartId);
    console.log("cartid", cartId);
  };

  return (
    <div className="tutorCartMainBox">
      <h2>Cart</h2>
      {data.map((e, index) => {
        const booksId = e?.booksId;

        return (
          <div key={index} className="tutorCartBody shadow">
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
                  onClick={() => {
                    clickToRemove(e._id);
                  }}
                >
                  Remove
                </Button>
              </Col>
            </Row>
          </div>
        );
      })}
      <button
        className="tutorCart-rentAllBook"
        // onClick={rentAllBooks}
      >
        Rent all Books
      </button>
    </div>
  );
};
