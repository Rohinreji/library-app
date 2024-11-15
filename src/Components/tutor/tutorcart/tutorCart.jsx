import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./tutorCart.css";
import { useEffect, useState } from "react";
import axios from "axios";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
import { BASE_URL } from "../../../apis/baseURL";
import img from "../../../Assests/noDataFound.jpg";
export const TutorCart = () => {
  const [data, setdata] = useState([]);
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

  const addBookQuantity = async (id, quantity) => {
    try {
      const response = await axiosInstance.post(`/addBookQuantity/${id}`, {
        quantity,
      });
      if (response.status === 200) {
        console.log("book quantity added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRemove = async (cartId) => {
    try {
      const response = await axiosInstance.post(
        `tutorRemoveFromCart/${cartId}`
      );
      if (response.status === 200) {
        toast.success("removed from cart");
      }
    } catch (error) {
      console.log(error);
    } finally {
      getData();
    }
  };

  const rentAllBooks = async () => {
    try {
      const response = await axiosInstance.get(
        `/rentCartProductsByTutor/${tutorId}`
      );
      if (response.status == 200) {
        toast.success("rent request sended");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Cart</h2>

      {data.length <= 0 ? (
        <div
          className="tuturWishlist-noData"
          style={{ height: "100vh", width: "100%" }}
        >
          <div>
            <img src={img} alt="" style={{ height: "450px", width: "450px" }} />
            <h2 className="px-5">No data found </h2>
          </div>{" "}
        </div>
      ) : (
        <div className="tutorCartMainBox">
          {data.map((e, index) => {
            const booksId = e.booksId;

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
                          <td>{booksId?.bookTitle}</td>
                        </tr>
                        <tr>
                          <td>author</td>
                          <td>:</td>
                          <td>{booksId?.author}</td>
                        </tr>
                        <tr>
                          <td>language</td>
                          <td>:</td>
                          <td>{booksId?.language}</td>
                        </tr>
                        <tr>
                          <td>Quantity</td>
                          <td>:</td>
                          <td>{e.addedQuantity}</td>
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
                        addBookQuantity(booksId._id, e.addedQuantity);

                        handleRemove(e._id);
                      }}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </div>
            );
          })}
          <button className="tutorCart-rentAllBook" onClick={rentAllBooks}>
            Rent all Books
          </button>
        </div>
      )}
    </div>
  );
};
