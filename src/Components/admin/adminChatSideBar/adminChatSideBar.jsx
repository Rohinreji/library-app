import axios from "axios";
import "./adminChatSideBar.css";
import axiosInstance from "../../../apis/axiosInstance";
import { useEffect, useLayoutEffect, useState } from "react";
export const AdminchatSideBar = ({getTutorId,tutorId}) => { 
  const [data, setData] = useState([]);
  const getuser = async () => {
    try {
      const response = await axiosInstance.get("/view-all/tutor");
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useLayoutEffect(() =>{
    getuser();
  },[]);
  
  console.log(data);
  return (
    <div>
      <div className="adminchatSideBar">
        {data.map((e) => {
          return (
            <div 
            className={`adminSideBar-profile-box my-2  ${e._id === tutorId && `active-tutor`}`}
            onClick={()=>
            {
                getTutorId(e._id)
            }
            }
            >
              <h3>{e.firstName}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};