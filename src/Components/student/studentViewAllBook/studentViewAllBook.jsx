import book from "../../../Assests/mysteryBooks.jpg";
import { FaRupeeSign } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../apis/baseURL";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import "./studentViewAllBook.css";
import { FcLike } from "react-icons/fc";
import { GrFavorite } from "react-icons/gr";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

export const StudentViewBook = () => {
  const [fixedData, setFixedData] = useState([]);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [favBtn, setFavBtn] = useState();
  const [studentId, setStudentId] = useState();
  const [wishlist, setWishlist] = useState();
  const [booksId,setBookId]=useState()

  const reDirectToViewSingleBook = (id) => {
    navigate(`/student/view-single-product/${id}`);
  };

  const addToWishlist = async (booksId) => {
    try {
      const response = await axios.post("http://localhost:3005/addToWishlist", {
        booksId,
        studentId,
      });
      if (response.status == 200) {
        toast.success(response.data.msg);
        setWishlist(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }finally{
      getData()
    }
  };
  const clickToWishlist = (booksId) => {
    addToWishlist(booksId);
  };

  const removeFromWishlist = async (booksId) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/removeFromWishlist",
        { booksId, studentId }
      );
      if (response.status == 200) {
        toast.error("remove from wishlist");
      }
    } catch (error) {
      console.log(error);
    }finally{
      getData()
    }
  };
  console.log("wishId", wishlist);

  const clickToRemoveWishlist = (id) => {
    removeFromWishlist(id);
  };
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
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      setStudentId(studentId);
    }
    getData();
  }, []);
  console.log("studentId", studentId);

  const handleSearch = (e) => {
    e.preventDefault();
    const value = e?.target?.value;
    if (value) {
      const filterData = fixedData.filter((item) => {
        return item?.name.toLowerCase().includes(value.toLowerCase());
      });
      setData(filterData);
    } else {
      setData(fixedData);
    }
  };
  console.log(BASE_URL);
  console.log(data, "data");
  return (
    <div>
      <div className="student-view-product">
        <h2 className="px-5 pt-4">view products</h2>
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
                const wishlistArr = e?.wishlistedUserId || [];
                let isAlreadyWishlisted = false;
  
                if (wishlistArr.includes(studentId)) {
                  isAlreadyWishlisted = true;
                }
              return (
                <div className="student-product-view-box shadow" key={e.id}>
                  <div className="">
                    <img
                      src={`${BASE_URL}${e?.bookImage?.filename}`}
                      alt=""
                      className="student-product-view-box-img"
                      onClick={() => {
                        reDirectToViewSingleBook(e._id);
                      }}
                    />
                    <div className="tutorWishlistBox">
                      {isAlreadyWishlisted ? (
                        <FaHeart
                          className="tutor-wishlist-filled-heart"
                          onClick={() => {
                            clickToRemoveWishlist(e._id);
                            setBookId(e._id);
                          }}
                        />
                      ) : (
                        <CiHeart
                          className="tutor-wishlist-heart"
                          onClick={() => {
                            clickToWishlist(e._id);
                            setBookId(e._id);
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <h5 className="py-1">{e?.bookTitle} </h5>
                  <p>
                    {/* {e?.description?.length > 15
                      ? e.description?.substring(0, 28) + "..."
                      : e.description}{" "} */}
                    {e?.author}
                  </p>
                  <h5 className="mb-5">
                    {/* <FaRupeeSign />
                    {e.price} */}
                    {/* {e?.status} */}
                    {e.availableCopies < 0 ? (
                      <div>Not Available</div>
                    ) : (
                      <div>Available</div>
                    )}
                  </h5>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
