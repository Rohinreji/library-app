import Table from "react-bootstrap/Table";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import "./adminApproveTutor.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const AdminApproveTutor = () => {
  const [data, setData] = useState([]);
  const [rejectId, setRejectId] = useState("");
  const[approveId,setApproveId] = useState("")
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/viewAllPendingTutors"
      );
      if (response.status === 200) {
        const tutors = response.data.data;
        setData(tutors);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();

 
  }, []);

  console.log(rejectId,"reject");
  console.log(approveId,"approve");

  const handleApprove =async () =>
  {

   try {
    const response = await axios.put(`http://localhost:3005/approveTutor/${approveId}`)
    if(response.status === 200)
    {
      toast.success("successlly approved")
    }
   } catch (error) {
    if(error.status ===500)
    {
      toast.error("user not found")
    }
    console.log(error);
   }finally{
    getData()
   }


  }

  const handleReject = async() =>
  {
try {
  const response = await axios.put(`http://localhost:3005/rejectTutor/${rejectId}`)
  if(response.status === 200)
  {
    toast.success("tutor rejected sucessfully")
  }

} catch (error) {
  if(error.status === 500)
  {
    toast.error("no user found")
  }
}finally{
  getData()
}
  }
  


  return (
    <div>
      <h2>pending tutor</h2>
      <Table 
      striped bordered hover
      className="adminApproveTutor-table"
      >
        <thead>
          <tr>
            <th>#</th>
            <th>first Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>Id No</th>
            <th className="admin-approvae-tutor-approval">approval</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{e.firstName} </td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.idNo}</td>
                <td className="d-flex justify-content-evenly">
                  <button
                    className="admin-approve-tutor-cross"
                    onClick={()=>
                    {
                      setRejectId(e._id)
                      handleReject()
                    }
                    }
                  >
                    <ImCross />
                  </button>
                  <button
                    className="admin-approve-tutor-check"
                    onClick={()=>
                    {
                      setApproveId(e._id)
                      handleApprove()
                    }
                    }
                  
                  >
                    <FaCheck />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
