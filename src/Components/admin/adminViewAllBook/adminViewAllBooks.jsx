import book from "../../../Assests/mysteryBooks.jpg";
import { FaRupeeSign } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { SiBookstack } from "react-icons/si";
import { BASE_URL } from "../../../apis/baseURL";
import "./adminViewAllBooks.css"
export const AdminViewAllBook = ({getProductId,reDirectViewSingleBook}) => {
  const [fixedData, setFixedData] = useState([]);
  const [data, setData] = useState([]);
  


  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3005/viewAllBooks");
      if (response.status === 200) {
        const books = response?.data?.data;
        setFixedData(books);
        setData(books);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e?.target?.value;
    if (value) {
      const filterData = fixedData.filter((item) => {
        return item?.bookTitle.toLowerCase().includes(value.toLowerCase());
      });
      setData(filterData);
    } else {
      setData(fixedData);
    }
  };
  
  return (
    <div>
          <div className="student_viewBooks">
            <h2>
              {" "}
              <SiBookstack />
              Books
            </h2>
          </div>{" "}
      <div className="student-view-product">
        {/* <h2 className="px-5 pt-4">view products</h2> */}
        <InputGroup className="mb-3 student-serach-box">
          <Form.Control
            placeholder="Search"
            aria-label="search"
            aria-describedby="basic-addon1"
            onChange={handleSearch}
          />
          <InputGroup.Text id="basic-addon1">
            <IoSearch />
          </InputGroup.Text>
        </InputGroup>

        {data.length === 0 ? (
          <h2 className="text-center">no data found </h2>
        ) : (
          <div className="d-flex flex-wrap gap-4 justify-content-between px-5 py-5 student-view-product-body">
            {data.map((e, index) => {
              return (
                <div
                  className="student-product-view-box shadow"
                  key={e.id}
                 onClick={()=>
                 {
                  getProductId(e._id)
                  reDirectViewSingleBook()
                 }
                 }
                >
                  <div className="">
                    <img
                      src={`${BASE_URL}${e?.bookImage?.filename}`}
                      alt=""
                      className="student-product-view-box-img "
                     
                    />

                   
                  </div>
                 <div className="tutorViewBooks-text my-5">
                 <h5 className="py-1">{e?.bookTitle}</h5>
                  <p>
                   
                    {e?.author}
                  </p>
                  <h5 className="mb-5">
                   

                    {e.availableCopies <= 0 ? (
                      <div>Not Available</div>
                    ) : (
                      <div>Available</div>
                    )}
                  </h5>
                 </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
