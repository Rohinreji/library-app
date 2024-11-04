import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../apis/baseURL";
import toast from "react-hot-toast";

export const StudentReturnBooks = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [rentData, setRentData] = useState("");
  const [rentId, setRentId] = useState("");
  const [rentedCopies, setRentedCopies] = useState("");
  // api call for rented book

  const getData = async () => {
    try {     
      const response = await axiosInstance.post(
        `/approveStdRentalSingleBook/${id}`
      );
      console.log(response);
      if (response.status === 200) {
        setRentData(response.data.data);
        setData(response.data.data.booksId);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(rentedCopies, "renteddCoptis");
  
  useEffect(() => {
    setRentedCopies(rentData.addedQuantity);
    getData();
  }, []);

  // api call for returnBooks

  console.log(rentId, "rentId");

  const returnBook = async (rentId) => {
    try {
      const response = await axiosInstance.post(`stdReturnBookReq/${rentId}`);
      if (response.status === 200) {
        toast.success("request send successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // api call for add book Quantity

  const addBookQuantity = async () => {
    try {
      const respone = await axiosInstance.post(`/addBookQuantity/${data._id}`, {
        quantity: rentData.addedQuantity,
      });
      if (respone.status === 200) {
        console.log("book quantity added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // cartBtn
  const handleReturn = (rentId) => {
    returnBook(rentId);
    addBookQuantity();
  };

  return (
    <div className="my-5">
      <div className="tutorCartBody shadow">
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center "
            style={{ height: "50vh" }}
          >
            <img src={`${BASE_URL}${data?.bookImage?.filename}`} alt="" />
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
                  <td>{data.bookTitle}</td>
                </tr>
                <tr>
                  <td>author</td>
                  <td>:</td>
                  <td>{data.author}</td>
                </tr>
                <tr>
                  <td>language</td>
                  <td>:</td>
                  <td>{data.language}</td>
                </tr>
                <tr>
                  <td>Rented copies</td>
                  <td>:</td>
                  <td>{rentData.addedQuantity}</td>
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
                handleReturn(rentData._id);
                setRentId(rentData._id);
              }}
            >
              Return Book
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};
