import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseURL";
import img from "../../../Assests/noDataFound.jpg";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const Studentwishlist = ({ reDirectToViewSingleBook }) => {
  const [heart, setHeart] = useState(false);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const studentId = localStorage.getItem("studentId");
  const getData = async () => {
    try {
      const response = await axiosInstance.get(
        `/studentViewAllWishlist/${studentId}`
      );
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  const removeFromWishlist = async (booksId) => {
    try {
      console.log(booksId, "booksId");
      
      const response = await axiosInstance.post("/removeFromWishlist", {
        booksId,
        studentId,
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
        <div className="d-flex flex-wrap gap-5 px-5 py-5">
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
                        // navigate(`/tutor/view-single-product/${booksId._id}`);
                        reDirectToViewSingleBook(booksId._id);
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
