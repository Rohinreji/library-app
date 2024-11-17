import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../apis/baseURL";
import toast from "react-hot-toast";
import TutorFinePayment from "../tutorFinePayment/tutorFinePayment";

export const TutorReturnBooks = ({productId,fine,date}) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [rentData, setRentData] = useState("");
  const [rentId, setRentId] = useState("");
  const [rentedCopies, setRentedCopies] = useState("");
  // api call for rented book

  const getData = async () => {
    try {
      const response = await axiosInstance.get(
        `/tutorViewRentalInReturn/${productId}`
      );
      console.log(response);
      if (response.status === 200) {
        setData(response.data.data.booksId);
        setRentData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

console.log(rentData,"rent data 111111");


  console.log(rentedCopies, "renteddCoptis");

  useEffect(() => {
    setRentedCopies(rentData.addedQuantity);
    getData();
  }, []);

  // api call for returnBooks

  console.log(rentId, "rentId");

  const returnBook = async (rentId) => {
    try {
      const response = await axiosInstance.post(`tutorReturnReq/${rentId}`);
      if (response.status === 200) {
        toast.success("request sended successfully");
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
    <div className="my-5 d-flex justify-content-center align-items-center" style={{height:"70vh",width:"100%"}}>
      <div className=" shadow" style={{height:"95%",width:"95%"}}>
        <Row>
          <Col
            className="d-flex justify-content-center align-items-center my-5"
            style={{ height: "50vh" }}
          >
            <img src={`${BASE_URL}${data?.bookImage?.filename}`} alt="" style={{height:"90%",width:"80%"}}/>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >
            <table style={{height:"48%",width:"80%"}}>
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
              {fine > 150 ? 
              <tr>
                  <td>Fine</td>
                  <td>:</td>
                 <td> {fine-150}</td>
                </tr> :
              <tr>
                  <td>submission date</td>
                  <td>:</td>
                 <td> {date}</td>
                </tr> 
                
                }
              </tbody>
            </table>
          </Col>
          <Col
            className="d-flex justify-content-center align-items-center"
            style={{ height: "70vh" }}
          >


            {fine > 150 ? <TutorFinePayment fine={fine} rentId={rentData._id} quantity ={rentData.addedQuantity} booksId={data._id}/> : <Button
              variant="warning"
              onClick={() => {
                setRentId(rentData._id);
                handleReturn(rentData._id);
              }}
            >
              Return Book
            </Button> }
            
          </Col>
        </Row>
      </div>
    </div>
  );
};
