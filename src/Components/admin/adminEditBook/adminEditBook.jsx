import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axiosInstance from "../../../apis/axiosInstance";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import toast from "react-hot-toast";
import "./adminEditBook.css"
import axios from "axios";
function AdminEditBook({ booksId }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [show, setShow] = useState(false);
  const[state,setState] = useState({})
  const [data, setData] = useState({
    bookTitle: "",
    author: "",
    yearOfPublication: "",
    language: "",
    availableCopies: "",
    category: "",
    status: "",
    bookImage: null,
  });

  console.log(booksId,"booksid");

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append("bookTitle", data.bookTitle);
    formData.append("author", data.author);
    formData.append("yearOfPublication", data.yearOfPublication);
    formData.append("language", data.language);
    formData.append("availableCopies", data.availableCopies);
    formData.append("category", data.category);
    formData.append("status", data.status);
    formData.append("bookImage", data.bookImage);
    sendDataToServer(formData)
  };

  const sendDataToServer = async (formData) => {
    try {
      const response = await axios.post(`http://localhost:3005/edit-bookDetails/${booksId}`,formData);
      {
        if(response.status === 200)
        {
            toast.success("book details updated")
        }
      }
    } catch (error) {
        console.log(error);
    }
  };

  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const getData = async () => {
    try {
        console.log(booksId,"booksif");
      const response = await axios.get(
        `http://localhost:3005/view-single-product/${booksId}`
      );

      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [booksId]);

  console.log(state);

  return (
    <>
      <button className="adminEditBook-btn" onClick={handleShow}>
        Edit
      </button>

      <Modal show={show} onHide={handleClose} className="adminEditBook-modal">
        <Modal.Header closeButton>
          <Modal.Title>Edit book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Row>
              <div className="adminAddProduct-body ">
                <Form
                  noValidate
                  onSubmit={handleSubmit}
                  className="adminAddProduct-form"
                >
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                      className="adminAddProduct-inp"
                    >
                      <Form.Label>Book title</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          placeholder="Book title"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="bookTitle"
                          onChange={handleChange}
                          value={data.bookTitle}
                        />
                       
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                      className="adminAddProduct-inp"
                    >
                      <Form.Label>Author</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          placeholder="author"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="author"
                          onChange={handleChange}
                          value={data.author}
                        />
                        
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                      className="adminAddProduct-inp"
                    >
                      <Form.Label>Year of publication</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="date"
                          placeholder="Year of publication"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="yearOfPublication"
                          onChange={handleChange}
                          value={data.yearOfPublication}
                        />
                       
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                      className="adminAddProduct-inp"
                    >
                      <Form.Label>Launguage</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          placeholder="language"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="language"
                          onChange={handleChange}
                          value={data.language}
                        />

                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                      className="adminAddProduct-inp"
                    >
                      <Form.Label>Available copies</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="text"
                          placeholder="Available copies"
                          aria-describedby="inputGroupPrepend"
                          required
                          name="availableCopies"
                          onChange={handleChange}
                          value={data.availableCopies}
                        />
                       
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                      className="adminAddProduct-inp"
                    >
                      <Form.Label>Category</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Select
                          aria-label="Default select example"
                          name="category"
                          onChange={handleChange}
                          value={data.category}
                        >
                          <option>Open this select menu</option>
                          <option value="Poetry">Poetry</option>
                          <option value="Mystery">Mystery</option>
                          <option value="Text Books">Text Books</option>
                          <option value="Fantacy">Fantacy</option>
                          <option value="Thriller">Thriller</option>
                          <option value="Western">Western</option>
                        </Form.Select>
                       
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                      className="adminAddProduct-inp"
                    >
                      <Form.Label>Book image</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Control
                          type="file"
                          id="fileInput"
                          name="bookImage"
                          style={{ display: "block" }}
                          onChange={handleChange}
                     />
                      
                      </InputGroup>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="4"
                      controlId="validationCustomUsername"
                      className="adminAddProduct-inp"
                    >
                      <Form.Label>Status</Form.Label>
                      <InputGroup hasValidation>
                        <Form.Select
                          aria-label="Default select example"
                          name="status"
                          onChange={handleChange}
                          value={data.status}

                        >
                          <option>Open this select menu</option>
                          <option value="Available">Available</option>
                          <option value="Not Available">Not Available</option>
                        </Form.Select>
                      
                      </InputGroup>
                    </Form.Group>
                  </Row>
                  <div
                    className="d-flex  justify-content-center"
                    style={{ width: "100%" }}
                  >
                    <Button type="submit" onClick={handleClose}>
                      upload
                    </Button>
                  </div>{" "}
                </Form>
              </div>
            </Row>
          </div>
        </Modal.Body>
       
      </Modal>
    </>
  );
}

export default AdminEditBook;
