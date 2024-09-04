import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import img1 from "../../../Assests/adminAddBook.jpg";
import "./adminAddProduct.css";
import axios from "axios";
import toast from "react-hot-toast";
export const AdminAddProduct = () => {
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
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    const formData = new FormData();
    formData.append("bookTitle", data.bookTitle);
    formData.append("author", data.author);
    formData.append("yearOfPublication", data.yearOfPublication);
    formData.append("language", data.language);
    formData.append("availableCopies", data.availableCopies);
    formData.append("category", data.category);
    formData.append("status", data.status);
    formData.append("bookImage", data.bookImage);

    sentDataToServer(formData);
  };
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    if (type === "file") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const sentDataToServer = async (formData) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/add-books",
        formData
      );
      if (response.status === 200) {
        toast.success("sucess!!");
      }
    } catch (error) {
      if (error.status === 500) {
        toast.error(error?.response?.data?.msg);
      }
      console.log(error);
    }
  };

  console.log(data);

  return (
    <div>
      <Row>
        <Col className="col-12 col-sm-12 col-md-12 col-lg-6">
          <img src={img1} alt="" className="adminAddBook-image img-fluid" />
        </Col>
        <Col className="col-12 col-sm-12 col-md-12 col-lg-6">
          <div className="adminAddProduct-body shadow">
            <h2>Add Books</h2>

            <Form
              noValidate
              validated={validated}
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
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a title.
                    </Form.Control.Feedback>
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
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a author.
                    </Form.Control.Feedback>
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
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a year.
                    </Form.Control.Feedback>
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
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a language.
                    </Form.Control.Feedback>
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
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose copies.
                    </Form.Control.Feedback>
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
                    >
                      <option>Open this select menu</option>
                      <option value="Poetry">Poetry</option>
                      <option value="Mystery">Mstery</option>
                      <option value="Text Books">Text Books</option>
                      <option value="Fantacy">Fantacy</option>
                      <option value="Thriller">Thriller</option>
                      <option value="Western">Western</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please choose a duration.
                    </Form.Control.Feedback>
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
                      placeholder="title"
                      aria-describedby="inputGroupPrepend"
                      required
                      name="bookImage"
                      onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a title.
                    </Form.Control.Feedback>
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
                    >
                      <option>Open this select menu</option>
                      <option value="Available">Available</option>
                      <option value="Not Available">Not Available</option>
                    </Form.Select>
                    <Form.Control.Feedback type="invalid">
                      Please choose a status.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <div
                className="d-flex  justify-content-center"
                style={{ width: "100%" }}
              >
                <Button type="submit">Add Books</Button>
              </div>{" "}
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
