import { Profiler, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../apis/baseURL";
import Button from "react-bootstrap/Button";
import StudentEditProfile from "./studentProfile";

export const StudentProfile = () => {
  const [data, setData] = useState({});
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const id = localStorage.getItem("studentId");
  console.log(id, "id");
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3005/viewStudentById/${id}`
      );
      if (response.status == 200) {
        setData(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }finally{
      getData()
    }
  };
  console.log(data, "data");

  useEffect(() => {
    getData();
  }, []);

  console.log(`${BASE_URL}${data?.photo?.filename}`);
  return (
    <div className="tutorProfile-body">
      <div className="tutorProfile-box shadow">
        <div className="tutorProfile-viewImage">
          <img
            src={`${BASE_URL}${data?.photo?.filename}`}
            alt=""
            className="tutorProfile-viewImage"
          />
        </div>

        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>:</td>
              <td className="px-4">
                {data?.firstname} {data?.lastname}
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>:</td>
              <td className="px-4">{data?.email}</td>{" "}
            </tr>
            <tr>
              <td>Id Number</td>
              <td>:</td>
              <td className="px-4">{data?.addNo}</td>
            </tr>
          </tbody>
        </table>
        <div className="tutorProfile-button-box">
          <Button
            onClick={handleShow}
            style={{ width: "100px" }}
            variant="primary"
          >
            Edit
          </Button>
          <StudentEditProfile
            handleShow={handleShow}
            show={show}
            setShow={setShow}
          />
        </div>
      </div>
    </div>
  );
};
