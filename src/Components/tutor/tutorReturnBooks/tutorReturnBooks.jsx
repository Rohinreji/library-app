import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../apis/baseURL";
import toast from "react-hot-toast";

export const TutorReturnBooks = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const[rentData,setRentData] = useState("")
  const [rentId, setRentId] = useState("");

  // api call for rented book

  const getData = async () => {
    try {
      const response = await axiosInstance.get(
        `/tutorViewRentalInReturn/${id}`
      );
      console.log(response);
      if (response.status === 200) {
        
        setData(response.data.data.booksId);
        setRentData(response.data.data)
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    getData();
  }, []);

  // api call for returnBooks

  console.log(rentId,"rentId");

  const handleReturn = async (rentId) => {
    try {
      const response = await axiosInstance.post(`tutorReturnReq/${rentId}`);
      if (response.status === 200) {
        toast.success("request send successfully");
      }
    } catch (error) {
      console.log(error);
    }
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
                  <td>status</td>
                  <td>:</td>
                  <td>{data.status}</td>
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
                setRentId(rentData._id);
                handleReturn(rentData._id);
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
