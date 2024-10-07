import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import "./adminApproveTutor.css";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import img from "../../../Assests/noDataFound.jpg";
export const AdminApproveTutor = () => {
  const [data, setData] = useState([]);
  const [rejectId, setRejectId] = useState("");
  const [approveId, setApproveId] = useState("");
  const [fixedData, setFixedData] = useState([]);
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/viewAllPendingTutors"
      );
      if (response.status === 200) {
        const tutors = response.data.data;
        setData(tutors);
        setFixedData(tutors);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(rejectId, "reject");
  console.log(approveId, "approve");

  const handleApprove = async (approveId) => {
    try {
      const response = await axios.put(
        `http://localhost:3005/approveTutor/${approveId}`
      );
      if (response.status === 200) {
        toast.success("successlly approved");
      }
    } catch (error) {
      if (error.status === 500) {
        toast.error("user not found");
      }
      console.log(error);
    } finally {
      getData();
    }
  };

  const handleReject = async (rejectId) => {
    try {
      const response = await axios.put(
        `http://localhost:3005/rejectTutor/${rejectId}`
      );
      if (response.status === 200) {
        toast.success("tutor rejected sucessfully");
      }
    } catch (error) {
      if (error.status === 500) {
        toast.error("no user found");
      }
    } finally {
      getData();
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      const filterData = fixedData.filter((item) => {
        return `${item.firstName}${item.lastName}`
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setData(filterData);
    } else {
      setData(fixedData);
    }
  };

  return (
    <div>
      <h2 className="mx-5 my-4">pending tutor</h2>
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
      {data.length <= 0 ? (
        <div
          className="tuturWishlist-noData"
          style={{ height: "100vh", width: "100%" }}
        >
          <div>
            <img src={img} alt="" style={{ height: "450px", width: "450px" }} />
            <h2 className="px-5">No data found</h2>
          </div>{" "}
        </div>
      ) : (
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
                  <td>{e.firstName} </td>
                  <td>{e.lastName}</td>
                  <td>{e.email}</td>
                  <td>{e.idNo}</td>
                  <td className="d-flex justify-content-evenly">
                    <button
                      className="admin-approve-tutor-cross"
                      onClick={() => {
                        setRejectId(e._id);
                        handleReject(e._id);
                      }}
                    >
                      <ImCross />
                    </button>
                    <button
                      className="admin-approve-tutor-check"
                      onClick={() => {
                        setApproveId(e._id);
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
      )}
    </div>
  );
};
