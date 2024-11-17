import { Profiler, useEffect, useState } from "react";
import axios from "axios";
import "./tutorProfile.css";
import { BASE_URL } from "../../../apis/baseURL";
import toast from "react-hot-toast";
import { TutorEditProfile } from "../tutorEditProfile/tutorEditProfile";
// import { BASE_URL } from "../../../apis/BaseURL";
export const TutorProfile = () => {
  const [data, setData] = useState({});
  const id = localStorage.getItem("tutorId");
  console.log(id, "id");
  const getData = async () => {
    try {
      const response = await axios.get(`http://localhost:3005/tutorViewProfile/${id}`);
      if (response.status == 200) {
        setData(response?.data?.data);
      }
    } catch (error) {
     
      console.log(error);
    }
  };
  console.log(data, "data");

  useEffect(() => {
    getData();
  },[]);

  console.log(`${BASE_URL}${data?.profile?.filename}`);
  return (
    <div className="tutorProfile-body">
      <div className="tutorProfile-box shadow">
        <div className="tutorProfile-viewImage">

          <img 
          src={`${BASE_URL}${data?.profile?.filename}`}
           alt=""
           className="tutorProfile-viewImage"
            />
        </div>
        

        <table >
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td className="px-4">{data?.firstName} {data?.lastName}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td className="px-4">{data?.email}</td>{" "}
            </tr>
            <tr>
              <td>Id Number</td>
              <td>:</td>
              <td className="px-4">{data?.idNo}</td>
            </tr>
          </tbody>
        </table>
        <div className="tutorProfile-button-box">
<TutorEditProfile/>
    </div>
      </div>
    </div>
  );
};
