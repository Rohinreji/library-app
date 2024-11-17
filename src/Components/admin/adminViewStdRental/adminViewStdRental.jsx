import Table from "react-bootstrap/Table";
import { ImCross } from "react-icons/im";
import { FaCheck } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";

export const AdminViewAllStdRental = () => {
  const [data, setdata] = useState([]);
  const [fixedData, setFixedData] = useState([]);
  // get all tutor rent data

  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/viewAllPendingStdRentals"
      );
      if (response.status === 200) {
        setdata(response.data.data);
        setFixedData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  // api call for approve

  const approveRent = async (rentId) => {
    try {
      const response = await axios.post(
        `http://localhost:3005/approveStdRental/${rentId}`
      );
      if (response.status === 200) {
        toast.success(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    } finally {
      getData();
    }
  };
  // api call for rent

  const rejectRent = async (rentId) => {
    try {
      const response = await axiosInstance.post(`/rejectStdRental/${rentId}`);
      if (response.status === 200) {
        toast.success(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    } finally {
      getData();
    }
  };
  console.log(data);

  // search functionality

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      const filterData = fixedData.filter((item) => {
        return `${item.studentId.firstName} ${item.studentId.lastName}`
          .toLowerCase()
          .includes(value.toLowerCase());
      });
      setdata(filterData);
    } else {
      setdata(fixedData);
    }
  };

  return (
    <div>
      <div>
        <h2 className="mx-5 my-4">Student rental request</h2>

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
          {data.map((e, index) => {
            const booksId = e?.booksId;
            const studentId = e?.studentId;

            return (
              <tbody key={index}>
                <tr>
                  <td rowSpan={2}>{index + 1}</td>
                  <td>Tutor</td>
                  <td>
                    {studentId.firstname} {studentId.lastname}
                  </td>
                  <td>{studentId.email}</td>
                  <td>{studentId.addNo}</td>
                  <td rowSpan={2} className="">
                    <button
                      className="admin-approve-tutor-cross "
                      onClick={() => {
                        rejectRent(e._id);
                      }}
                    >
                      <ImCross />
                    </button>
                    <button
                      className="admin-approve-tutor-check"
                      onClick={() => {
                        approveRent(e._id);
                      }}
                    >
                      <FaCheck />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>Book</td>
                  <td>{booksId?.bookTitle}</td>
                  <td>{booksId?.author}</td>
                  <td>{booksId?.availableCopies}</td>
                </tr>
              </tbody>
            );
          })}
        </Table>
      </div>
    </div>
  );
};
