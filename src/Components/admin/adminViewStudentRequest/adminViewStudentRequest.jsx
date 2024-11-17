import Table from "react-bootstrap/Table";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
export const AdminViewStudentRequest = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/viewAllStdPendingReq"
      );
      if (response.status === 200) {
        const students = response.data.data;
        setData(students);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const handleApprove = async (approveId) => {
    try {
      const response = await axios.post(
        `http://localhost:3005/acceptStudent/${approveId}`
      );
      if (response.status === 200) {
        toast.success("Approved successfully");
      }
    } catch (error) {
      if (error.status === 405) {
        toast.error("user not found");
      }
      console.log(error);
    } finally {
      getData();
    }
  };

  const handleReject = async (rejectId) => {
    try {
      const response = await axios.post(
        `http://localhost:3005/deleteStudent/${rejectId}`
      );
      if (response.status === 200) {
        toast.success("Student rejected successfully");
      }
    } catch (error) {
      if (error.status === 405) {
        toast.error("no user found");
      }
    } finally {
      getData();
    }
  };

  return (
    <div>
      <h2>Pending Student</h2>
      <Table striped bordered hover className="adminApproveTutor-table">
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
                <td>{e.firstname} </td>
                <td>{e.lastname}</td>
                <td>{e.email}</td>
                <td>{e.addNo}</td>
                <td className="d-flex justify-content-evenly">
                  <button
                    className="admin-approve-tutor-cross"
                    onClick={() => {
                      handleReject(e._id);
                    }}
                  >
                    <ImCross />
                  </button>
                  <button
                    className="admin-approve-tutor-check"
                    onClick={() => {
                      handleApprove(e._id);
                    }}
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
