import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { BASE_URL } from "../../../apis/baseURL";
import { useNavigate } from "react-router-dom";

export const TutorActiveRental = () => {
  const [data, setdata] = useState([]);
  const navigate = useNavigate();
  const tutorId = localStorage.getItem("tutorId");

  const getData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/tutorViewRental",
        { tutorId }
      );
      console.log(response,"response");
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

  // console.log("approved date",data);

  return (
    <div>
      <div className="student-view-product">
        <h2 className="px-5 pt-4">Active rentals</h2>
        <InputGroup className="mb-3 student-serach-box">
          <Form.Control
            placeholder="Search"
            aria-label="search"
            aria-describedby="basic-addon1"
          />
          <InputGroup.Text id="basic-addon1">
            <IoSearch />
          </InputGroup.Text>
        </InputGroup>

        <div className="d-flex flex-wrap gap-4 justify-content-between px-5 py-5 student-view-product-body">
          {data.map((e, index) => {
            const approvedDate = new Date(e?.approvedDate);
            console.log(approvedDate);
            
            const lastSubmissionDate = new Date();
            const date1 = new Date(
              lastSubmissionDate.getFullYear(),
              lastSubmissionDate.getMonth(),
              lastSubmissionDate.getDate()
            );
            const date2 = new Date(
              approvedDate.getFullYear(),
              approvedDate.getMonth(),
              approvedDate.getDate()
            );

            // const numberOfRendedDate = lastSubmissionDate - approvedDate;
            const timeDifference = date1.getTime() - date2.getTime();
            const numberOfRendedDate = timeDifference / (1000 * 3600 * 24); // 1000 ms/s, 3600 s/h, 24 h/day

            console.log(numberOfRendedDate);

            const booksId = e?.booksId;

            return (
              <div>
                <div
                  className="student-product-view-box shadow"
                  onClick={() => {
                    navigate(`/tutor/return-books/${e._id}`);
                  }}
                >
                  <div className="">
                    <img
                      src={`${BASE_URL}${booksId?.bookImage?.filename}`}
                      alt=""
                      className="student-product-view-box-img"
                    />
                  </div>
                  <h5 className="py-1"></h5>
                  <p>{booksId?.bookTitle}</p>
                  <h5 className="mb-5">{booksId?.category}</h5>
                  <h5 className="tutorActiveRentalFine">
                    {numberOfRendedDate > 15 ? (
                      <p>fine:{numberOfRendedDate * 10}</p>
                    ) : (
                      <p></p>
                    )}
                  </h5>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
