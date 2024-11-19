import axios from "axios";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import "./adminChatSideBar.css";
import axiosInstance from "../../../apis/axiosInstance";
import { useEffect, useLayoutEffect, useState } from "react";
import { BASE_URL } from "../../../apis/baseURL";
export const AdminchatSideBar = ({getTutorId,tutorId}) => { 
  const [data, setData] = useState([]);
  const [fixedData,setFixedData] = useState([])
  const getuser = async () => {
    try {
      const response = await axiosInstance.get("/view-all/tutor");
      if (response.status === 200) {
        setData(response.data.data);
        setFixedData(response.data.data)
      }
    } catch (error) {
      console.log(error);
    }
  };
  useLayoutEffect(() =>{
    getuser();
  },[]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e?.target?.value;
    if (value) {
      const filterData = fixedData.filter((item) => {
        return item?.firstName.toLowerCase().includes(value.toLowerCase());
      });
      setData(filterData);
    } else {
      setData(fixedData);
    }
  };
  return (
    <div>
 <InputGroup className="mb-3 student-serach-box my-5">
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

      <div className="adminchatSideBar shadow">
        {data.map((e) => {
          return (
            <div 
            className={`shadow adminSideBar-profile-box my-2  ${e._id === tutorId && `active-tutor`}`}
            onClick={()=>
            {
                getTutorId(e._id)
            }
            }
            >
              <div className="d-flex">
                <img src={`${BASE_URL}${e?.profile?.filename}`} alt="" />
              <h3>{e.firstName}</h3>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
