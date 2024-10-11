import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
<<<<<<< HEAD
export const AdminViewApproveTutor = () => {
  const [data, setData] = useState([]);

=======
import { IoSearch } from "react-icons/io5";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
export const AdminViewApproveTutor = () => {
  const [data, setData] = useState([]);
  const [fixedData, setFixedData] = useState([]);
>>>>>>> 6348941f21f8a41fefbd6c249c9526d0bf6ea4de
  const getData = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3005/viewAllApprovedTutors"
      );
      setData(response.data.data);
<<<<<<< HEAD
=======
      setFixedData(response.data.data);
>>>>>>> 6348941f21f8a41fefbd6c249c9526d0bf6ea4de
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data, "data");

  useEffect(() => {
    getData();
  }, []);
<<<<<<< HEAD
  return (
    <div>
      <h2>Approved tutors</h2>
=======

  const handleSearch = (e) => {
    e.preventDefault();
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
      <h2 className="mx-5 my-4">Approved tutors</h2>
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
>>>>>>> 6348941f21f8a41fefbd6c249c9526d0bf6ea4de
      <Table striped bordered hover className="adminApproveTutor-table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>email</th>
            <th>Id No</th>
          </tr>
        </thead>
        <tbody>
          {data.map((e, i) => {
            return (
              <tr>
                <td>{i + 1}</td>
                <td>{e.firstName}</td>
                <td>{e.lastName}</td>
                <td>{e.email}</td>
                <td>{e.idNo}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
