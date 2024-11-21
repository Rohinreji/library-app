import book from "../../../Assests/mysteryBooks.jpg";
import { FaRupeeSign } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { SiBookstack } from "react-icons/si";
import { GiBlackBook } from "react-icons/gi";
import { FaPenFancy } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { BASE_URL } from "../../../apis/baseURL";
import { useNavigate, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
import { TutorChatBox } from "../tutorChatBox/tutorChatBox";
import("./tutorViewBook.css");
export const TutorViewBook = ({ reDirectToViewSingleBook }) => {
  const [fixedData, setFixedData] = useState([]);
  const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const navigate = useNavigate();
  const [wish, setWish] = useState([]);
  const [booksId, setBookId] = useState();

  const tutorId = localStorage.getItem("tutorId");

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

  // tutor wishlist

  const addTowislist = async (booksId) => {
    try {
      console.log(booksId, "booksId");
      const response = await axiosInstance.post("/tutorwishlist", {
        tutorId,
        booksId,
      });
      if (response.status == 200) {
        toast.success("book added to wishlist");
        setWish(response.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      getData();
    }
  };

  const removeFromWishlist = async (booksId) => {
    try {
      console.log(booksId, "booksId");
      console.log(tutorId, "tutorId");
      const response = await axiosInstance.post("/tutorRemoveFromWishlist", {
        booksId,
        tutorId,
      });
      if (response.status === 200) {
        toast.success("book removed from wishlist");
      }
    } catch (error) {
      console.log(error);
    } finally {
      getData();
    }
  };

  const viewAllWishlist = async () => {
    try {
      const response = await axiosInstance.get(`/viewAllWishlist/${tutorId}`);
      console.log("res", response);
      if (response.status === 200) {
        setWishlist(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let existingWishlist = false;
  wishlist.filter((item) => {
    if (item.booksId._id.includes(booksId)) {
      existingWishlist = true;
    }
  });

  useEffect(() => {
    viewAllWishlist();
  }, []);

  // search functionality

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e?.target?.value;
    if (value) {
      const filterData = fixedData.filter((item) => {
        return item?.bookTitle?.toLowerCase().includes(value.toLowerCase());
      });
      setData(filterData);
    } else {
      setData(fixedData);
    }
  };

  return (
    <div>
      <div>
        <TutorChatBox />
      </div>
      <div className="student-view-product">
        <div>
          <div className="student_viewBooks">
            <h2>
              {" "}
              <SiBookstack />
              Books
            </h2>
          </div>{" "}
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
        </div>
        {data.length === 0 ? (
          <h2 className="text-center">No data found </h2>
        ) : (
          <div className="d-flex flex-wrap gap-5 px-5 py-5 student-view-product-body">
            {data.map((e, index) => {
              const wishlistArr = e?.wishlistedUserId || [];
              let isAlreadyWishlisted = false;

              if (wishlistArr.includes(tutorId)) {
                isAlreadyWishlisted = true;
              }

              return (
                <div className="student-product-view-box shadow" key={e.id}>
                  <div className="">
                    <img
                      src={`${BASE_URL}${e?.bookImage?.filename}`}
                      alt=""
                      className="student-product-view-box-img "
                      onClick={() => {
                        reDirectToViewSingleBook(e._id);
                        // navigate(`/tutor/view-single-product/${e._id}`);
                      }}
                    />

                    <div className="tutorWishlistBox">
                      {isAlreadyWishlisted ? (
                        <FaHeart
                          className="tutor-wishlist-filled-heart"
                          onClick={() => {
                            removeFromWishlist(e._id);
                            setBookId(e._id);
                          }}
                        />
                      ) : (
                        <CiHeart
                          className="tutor-wishlist-heart"
                          onClick={() => {
                            addTowislist(e._id);
                            setBookId(e._id);
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="">
                    <h5 className="student_viewBookTitle">
                      <GiBlackBook /> {e?.bookTitle}{" "}
                    </h5>
                    <p style={{ height: "20px", marginLeft: "8px" }}>
                      <FaPenFancy style={{ fontSize: "15px" }} /> {e?.author}
                    </p>
                    <h5 className="student_viewBookAvailable">
                      {e.availableCopies <= 0 ? (
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
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
