import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
export const AdminViewReturnReq = () => {
    const[data,setData] = useState([])

    // api call for view tutor return req

const getData =async () =>{
try {
    const response = await axiosInstance.get("adminViewReturnReq")
if(response.status === 200)
{
    setData(response.data.data)
}
} catch (error) {
 console.log(error);   
}
}

useEffect(()=>
{
    getData()
},[])

console.log(data);


// approve retrun req api call

const adminApproveReq = async (id) =>
{
    try {
        const response= await axiosInstance.post ("/adminApproveReturnReq",{id})
        if(response.status === 200)
        {
            toast.success(response.data.msg)
        }
    } catch (error) {
        console.log(error);
    }finally{
        getData()
    }
}

// reject return req api call

const adminRejectReq =async (id) =>
{
    try {
      const response = await axiosInstance.post("adminRejectReturnReq",{id})
    if(response.status === 200)
    {
toast.success(response.data.msg)

    }
    } catch (error) {
      console.log(error);
    }
    finally{
      getData()
    }
}



  return (
    <div>
        <h2 className="mx-5 my-3">Return request</h2>
      <Table striped bordered hover className="adminViewRent">
        <thead>
          <tr>
            <th>#</th>
            <th>#</th>
            <th>Name/Title</th>
            <th>Email/Author</th>
            <th>Rented/Available Copies</th>
            <th className="adminViewRental-approvel">Approvel</th>
          </tr>
        </thead>
       {
        data.map((e,index)=>
        {
            const booksId = e.booksId
            const tutorId = e.tutorId
          return(
            <tbody key={index}>
            <tr>
              <td rowSpan={2}>{index+1}</td>
              <td>Tutor</td>
              <td>{tutorId.firstName} {tutorId.lastName} </td>
              <td>{tutorId.email}</td>
              <td>{e.addedQuantity}</td>
              <td rowSpan={2} className="">
                <button className="admin-approve-tutor-cross "
                onClick={()=>{adminRejectReq(e._id)}}
                >
                  <ImCross />
                </button>
                <button className="admin-approve-tutor-check"
                onClick={()=>{
                    adminApproveReq(e._id)
                }}
                >
                  <FaCheck />
                </button>
              </td>
            </tr>
            <tr>
              <td>Book</td>
              <td>{booksId.bookTitle}</td>
              <td>{booksId.author}</td>
              <td>{booksId.availableCopies}</td>
            </tr>
          </tbody>
          )
        })
       }
      </Table>{" "}
    </div>
  );
};
