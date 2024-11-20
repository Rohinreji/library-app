import Table from "react-bootstrap/Table";
import axiosInstance from "../../../apis/axiosInstance";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { IoSearch } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { useEffect, useState } from "react";
import { FiGrid } from "react-icons/fi";

export const AdminViewStdRented = () => {
  const [data, setData] = useState([]);
  const [fixedData, setFixedData] = useState([]);
  const getData = async () => {
    try {
      const response = await axiosInstance.post("/adminViewStdApprovedRental");
      if (response.status === 200) {
        setData(response.data.data);
        setFixedData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  // search functionality

  const handleSearch = (e) => {
    const value = e.target.value;
    if (value) {
      const filterData = fixedData.filter((item) => {
        return `${item.studentId?.firstname} ${item.studentId?.lastname}`
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
  <div className="admin_viewBooks">
        <h4> 
        <FiGrid className="mx-2"/>

    Rented Books</h4>
      </div>{" "}      <InputGroup className="mb-3 student-serach-box">
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

      <Table className="adminViewRentedBook-table" striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>#</th>
            <th>Name/Title</th>
            <th>Email/Author</th>
            <th>Rented/available copies</th>
          </tr>
        </thead>
        {data.map((e, index) => {
          const booksId = e.booksId;
          const studentId = e?.studentId;
          return (
            <tbody>
              <tr>
                <td rowspan={2}>{index + 1}</td>
                <td>Tutor</td>
                <td>
                  {studentId?.firstname} {studentId?.lastname}{" "}
                </td>
                <td>{studentId?.email}</td>
                <td>{e?.addedQuantity}</td>
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
  );
};
