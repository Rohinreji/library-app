import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../apis/baseURL";
import { SiBookstack } from "react-icons/si";
import { GiBlackBook } from "react-icons/gi";
import { FaPenFancy } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
export const TutorFilterByCat = () => {
  const { cat } = useParams();
  const [data, setData] = useState([]);
  const filterByCat = async () => {
    try {
      const respone = await axiosInstance.get(`/filterBookByCategory/${cat}`);
      if (respone.status == 200) {
        setData(respone.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data);

  useEffect(() => {
    filterByCat();
  }, []);

  return (
    <div>
      {data.map((e) => {
        return (
          <div>
            <div className="student_viewBooks">
              <h2>
                {" "}
                <SiBookstack />
                Books
              </h2>
            </div>{" "}
            <div
              className="d-flex align-item-center justify-content-evenly "
              style={{ width: "100%", height: "100vh" }}
            >
              <div className="student-product-view-box shadow">
                <div className="">
                  <img
                    src={`${BASE_URL}${e?.bookImage?.filename}`}
                    alt=""
                    className="student-product-view-box-img"
                  />
                </div>
                <h5 className="student_viewBookTitle">
                  <GiBlackBook /> {e?.bookTitle}{" "}
                </h5>
                <p style={{ height: "20px", marginLeft: "8px" }}>
                  <FaPenFancy style={{ fontSize: "15px" }} /> {e?.author}
                </p>
                <h5 className="student_viewBookAvailable">
                  {e.availableCopies < 0 ? (
                    <div>
                      {" "}
                      <FcHighPriority />
                      Not Available
                    </div>
                  ) : (
                    <div>
                      {" "}
                      <FcApproval /> Available
                    </div>
                  )}
                </h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
