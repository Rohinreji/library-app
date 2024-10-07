import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseURL";
import img from "../../../Assests/noDataFound.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./tutorWishlist.css";
export const Tutorwishlist = () => {
  const [heart, setHeart] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const tutorId = localStorage.getItem("tutorId");
  const getData = async (tutorId) => {
    try {
      const response = await axiosInstance.get(`/viewAllWishlist/${tutorId}`);
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  useEffect(() => {
    const tutorId = localStorage.getItem("tutorId");

    getData(tutorId);
  }, []);

  const removeFromWishlist = async (booksId) => {
    try {
      const response = await axiosInstance.post("/tutorRemoveFromWishlist", {
        booksId,
        tutorId,
      });
      if (response.status === 200) {
        toast.success("removed from wishlist");
      }
    } catch (error) {
      console.log(error);
    } finally {
      getData();
    }
  };



  return (
    <div className="tutorWishlist">
      <h2 className="my-3">wishlist</h2>
      {data.length <= 0 ? (
        <div
          className="tuturWishlist-noData"
          style={{ height: "100vh", width: "100%" }}
        >
          <div>
            <img src={img} alt="" style={{ height: "450px", width: "450px" }} />
            <h2 className="px-5">No book is added to wishlist</h2>
          </div>{" "}
        </div>
      ) : (
        <div className="d-flex flex-wrap gap-4 justify-content-between px-5 py-5">
          {data.map((e) => {
            const booksId = e?.booksId;
            return (
              <div>
                <div className="student-product-view-box shadow">
                  <div className="">
                    <img
                      src={`${BASE_URL}${booksId?.bookImage?.filename}`}
                      alt=""
                      className="student-product-view-box-img "
                      onClick={() => {
                        navigate(`/tutor/view-single-product/${booksId._id}`);
                      }}
                    />

                    <div className="tutorWishlistBox">
                      <FaHeart
                        className="tutor-wishlist-filled-heart"
                        onClick={() => {
                          removeFromWishlist(booksId._id);
                          // console.log(booksId._id,"wishlist id");
                        }}
                      />
                    </div>
                  </div>
                  <div className="tutorWishlist-text">
                    <h5 className="py-1">{booksId.bookTitle}</h5>
                    <p>{booksId.category}</p>
                    <h5 className="mb-5">{booksId?.status}</h5>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
