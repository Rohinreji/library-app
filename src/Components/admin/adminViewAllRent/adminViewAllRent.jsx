import Table from "react-bootstrap/Table";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import "./adminViewAllRent.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
export const AdminViewAllRental = () => {
  const [data, setdata] = useState([]);
  const[rentId,setRentId] = useState("")
  // get all tutor rent data

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3005/adminViewPendingRental");
      if (response.status === 200) {
        setdata(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(rentId);

  // api call for approve

const approveRent = async() =>
{
  try {
    const response = await axios.post(`http://localhost:3005/adminApproveRental/${rentId}`)
    if(response.status === 200)
    {
      toast.success(response.data.msg)
    }
  } catch (error) {
    console.log(error);
  }
}
// api call for rent

const rejectRent = async () =>
{
  try {
    const response = await axiosInstance.post(`adminRejectRental/${rentId}`)
    if(response.status ===200)

      {
        toast.success(response.data.msg)
      }
  } catch (error) {
    console.log(error);
  }
}
console.log(data);

  return (
    <div>
      <div>
        <h2>Tutor rental request</h2>
        <Table striped bordered hover className="adminViewRent">
          <thead>
            <tr>
              <th>#</th>
              <th>#</th>
              <th>Name/Title</th>
              <th>Email/Author</th>
              <th>Id No/Available Copies</th>
              <th className="adminViewRental-approvel">Approvel</th>
            </tr>
          </thead>
          {data.map((e,index) => {
            const booksId = e?.booksId;
            const tutorId = e.tutorId;
            console.log(tutorId);
            console.log(booksId);
            return (
              <tbody key={index}>
                <tr>
                  <td rowSpan={2}>1</td>
                  <td>Tutor</td>
                  <td>
                    {tutorId.firstName} {tutorId.lastName}
                  </td>
                  <td>{tutorId.email}</td>
                  <td>{tutorId.idNo}</td>
                  <td rowSpan={2} className="">
                    <button className="admin-approve-tutor-cross "
                    onClick={()=>
                    {
                      setRentId(e._id)
                      rejectRent()
                    }
                    }
                    >
                      <ImCross />
                    </button>
                    <button 
                    className="admin-approve-tutor-check"
                       onClick={()=>
                        {
                          setRentId(e._id)
                          approveRent()
                        }
                        }
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
            );
          })}
        </Table>
      </div>
    </div>
  );
};
