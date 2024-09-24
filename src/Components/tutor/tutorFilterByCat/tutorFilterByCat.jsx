import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { useEffect, useState } from "react";
import { BASE_URL } from "../../../apis/baseURL";

export const TutorFilterByCat = () => {
  const {cat} = useParams()
const[data,setData]= useState([])
  const filterByCat = async () =>
    {
      try {
        const respone = await axiosInstance.get(`/filterBookByCategory/${cat}`)
        if(respone.status == 200)
        {
      setData(respone.data.data)
        }
      } catch (error) {
        console.log(error);
      }
    }
console.log(data);

useEffect(()=>
{
  filterByCat()
},[])

  return (
    <div>
      {
      data.map((e)=>
      {
return(
  <div>
    <h2>View books</h2>
      <div className="d-flex align-item-center justify-content-evenly " style={{width:"100%", height:"100vh"}}>
      <div className="student-product-view-box shadow">
        <div className="">
          <img
              src={`${BASE_URL}${e?.bookImage?.filename}`}
            alt=""
            className="student-product-view-box-img"
          />
        </div>
        <h5 className="py-1">{e.bookTitle}</h5>
        
        <p>{e.category}</p>
        <h4>{e.status}</h4>
      </div>
    </div>
  </div>
)
      })
    }
    </div>
  );
};
