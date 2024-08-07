import studentSignupImg from "../../../Assests/studentSignupImg.avif";
import { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import { BiCloudUpload } from "react-icons/bi";
import { FaRegImages } from "react-icons/fa6";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
import "./studentSignUp.css";
export const StudentSignUp = () => {
  const [validated, setValidated] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const[show1,setshow1] = useState(false)
  const[show2,setshow2] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const handleFileChange = (e) => {
    handleImgUpload(e);
  };
  const handleImgUpload = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };
  const handleShow1 = () =>
  {
    setshow1(!show1)
  }
  const handleShow2 = () =>
  {
    setshow2(!show2)
  }
  return (
    <div className="studentSignUp  ">
      <Row className="row">
        <Col className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-item-center">
          <img
            src={studentSignupImg}
            alt=""
            className="img-fluid my-5"
            style={{ width: "630px", height: "330px" }}
          />
        </Col>
        <Col className="col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center align-item-center">
          <Form
            noValidate
            validated={validated}
            style={{ width: "650px" }}
            className="shadow px-5 py-3"
            onSubmit={handleSubmit}
          >
            <Row>
              <Col>
                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom03"
                  style={{ width: "95%" }}
                >
                  <Form.Label> First name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    required
                  />
                  <Form.Control.Feedback type="invalid" className="">
                    first name is required.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  as={Col}
                  md="6"
                  controlId="validationCustom03"
                  style={{ width: "95%" }}
                >
                  <Form.Label> Last name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    required
                  />
                  <Form.Control.Feedback type="invalid" className="">
                    Last name is required.
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
              <Col className="d-flex justify-content-center align-item-center">
                <div className="student-signup-profile">
                  {profilePic ? (
                    <img src={profilePic} alt="" />
                  ) : (
                    <FaRegImages
                      color="grey"
                      className="student-signup-fake-image"
                    />
                  )}

                  <label className="student-signup-upload-icon">
                    <BiCloudUpload color="" />
                    <input
                      type="file"
                      style={{ display: "none" }}
                      name="profile"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
              </Col>
            </Row>

            <Row className="mb-3 my-2">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label> Enter email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
                <Form.Control.Feedback type="invalid" className="">
                  please provide email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Admission number</Form.Label>
                <Form.Control
                  as="input"
                  name="description"
                  placeholder="Enter admission number"
                  required
                  min="0"
                  max="100000000"
                  type="number"
                />
                <Form.Control.Feedback type="invalid" className="">
                  Please provide admission number.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <Row className="mb-3">
              <Form.Group as={Col} md="6" controlId="validationCustom03">
                <Form.Label> Password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    as="input"
                    name="password"
                    placeholder="Enter your password"
                    required
                    min="0"
                    max="100000000"
                    type={show1 ?   "text": "password"}
                  />
                  <InputGroup.Text id="basic-addon1">
                  {show1 ? <BsEye  onClick={handleShow1} /> : <BsEyeSlash onClick={handleShow1}/>}
                  
                  
                  </InputGroup.Text>
                </InputGroup>
                <Form.Control.Feedback type="invalid" className="">
                  Please provide a valid password.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="6">
                <Form.Label>Confirm password</Form.Label>
                <InputGroup className="mb-3">
                  <Form.Control
                    as="input"
                    name="confirmPasword"
                    placeholder="Enter confirm password"
                    required
                    min="0"
                    max="100000000"
                    type={show2 ? "text": "password"}
                  />
                  <InputGroup.Text id="basic-addon1">
                  {show2 ? <BsEye  onClick={handleShow2} /> : <BsEyeSlash onClick={handleShow2}/>}

                  </InputGroup.Text>
                </InputGroup>
                <Form.Control.Feedback type="invalid" className="">
                  Please provide password.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
            <div className=" d-flex justify-content-center align-item-center">
              <Button
                className="mx-auto w-25 my-4 student-signup-btn"
                type="submit"
              >
                Upload
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
