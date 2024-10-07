import Table from "react-bootstrap/Table";
import axiosInstance from "../../../apis/axiosInstance";
import "./adminViewRentedBook.css"
import { useEffect, useState } from "react";
export const AdminViewRentedBooks = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const response = await axiosInstance.get("/adminApprovedBooks");
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {}
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2 className="mx-5 my-3">Rented Books</h2>
      <Table
      className="adminViewRentedBook-table"
      striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name/Title</th>
            <th>Email/Author</th>
            <th>Rented/available copies</th>
          </tr>
        </thead>
        {
          data.map((e)=>
          {
            const booksId = e.booksId
            const tutorId = e.tutorId
            return(
              <tbody>
          <tr>
            <td rowspan={2}>1</td>
            <td>{tutorId.firstName} {tutorId.lastName} </td>
            <td>{tutorId.email}</td>
            <td>{e.addedQuantity}</td>
          </tr>
          <tr>
            <td>{booksId.bookTitle}</td>
            <td>{booksId.author}</td>
            <td>{booksId.availableCopies}</td>
          </tr>
        </tbody>
            )
          })
        }
      </Table>
    </div>
  );
};
