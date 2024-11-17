import axios from "axios";
import "./adminChatNav.css";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../apis/baseURL";
export const AdminChatNav = ({ tutorId }) => {
  console.log(tutorId, "tutoId");
  const [data, setData] = useState({});
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3005/tutorViewProfile/${tutorId}`
      );
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
  }, [tutorId]);
  return (
    <div className="adminChatNav d-flex">
      <img
        src={`${BASE_URL}${data?.profile?.filename}`}
        alt=""
      />
      <h2 className="mx-4">{data?.firstName}</h2>
    </div>
  );
};
