import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { BASE_URL } from "../../../apis/baseURL";

export const TutorActiveRental = () => {
  const [data, setdata] = useState()

  const tutorId = localStorage.getItem("tutorId")

  const getData =async () =>
  {
try {
  const response = await axios.post("http://localhost:3005/tutorViewRental",{tutorId})
setdata(response.data.data.booksId)
} catch (error) {
  console.log(error);
}
  }

useEffect(()=>
{
  getData()
},[])
  console.log(data);


  

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
          <div className="student-product-view-box shadow">
            <div className="">
              <img src={`${BASE_URL}${data?.bookImage?.filename}`} alt="" className="student-product-view-box-img" />
            </div>
            <h5 className="py-1"></h5>
            <p>{data?.bookTitle}</p>
            <h5 className="mb-5">{data?.category}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
