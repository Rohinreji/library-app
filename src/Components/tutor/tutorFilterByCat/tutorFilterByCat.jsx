import { useParams } from "react-router-dom";
import axiosInstance from "../../../apis/axiosInstance";
import { useEffect, useState } from "react";

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
        
      }
    }
console.log(data);

useEffect(()=>
{
  filterByCat()
},[])

  return (

    <div>
      <div className="student-product-view-box shadow">
        <div className="">
          <img
            //   src={`${BASE_URL}${e?.bookImage?.filename}`}
            alt=""
            className="student-product-view-box-img"
          />
        </div>
        <h5 className="py-1"></h5>
        <p></p>
      </div>
    </div>
  );
};
