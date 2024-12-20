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
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import CommonNavbar from "../../common/commonNavbar/commonNavbar";
export const StudentSignUp = () => {
  const [validated, setValidated] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    photo: null,
    addNo: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const handleSubmit = (event) => {
    console.log("data", data);
    event.preventDefault();
    const {
      firstname,
      lastname,
      email,
      photo,
      addNo,
      password,
      confirmPassword,
    } = data;
    const validateFields = () => {
      if (!firstname) {
        toast.error("Enter your firstname");
        return false;
      }
      if (!lastname) {
        toast.error("Enter your lastname");
        return false;
      }
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(email)) {
        toast.error("Please enter a valid email address");
        return false;
      }
      if (!email) {
        toast.error("Enter your email");
        return false;
      }
      if (!photo) {
        toast.error("Upload your photo");
        return false;
      }
      if (!addNo) {
        toast.error("Enter your addmission number");
        return false;
      }
      if (addNo > 99999 || addNo < 1000) {
        toast.error("Enter a valid id number");
        return false;
      }
      if (!password) {
        toast.error("Enter password");
        return false;
      }
      if (password.length < 8) {
        toast.error("Password needs minimum 8 charaters");
        return false;
      }
      const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).{6,}$/;
      if (!passwordRegex.test(password)) {
        toast.error(
          "Password must contain at least one number, one special character, and one capital letter"
        );
        return false;
      }
      if (!confirmPassword) {
        toast.error("Enter confirm password");
        return false;
      }
      if (password !== confirmPassword) {
        toast.error("entered password doesn't matches");
        return false;
      }
      return true;
    };
    if (!validateFields()) {
      return;
    }
    const formdata = new FormData();
    formdata.append("firstname", firstname);
    formdata.append("lastname", lastname);
    formdata.append("password", password);
    formdata.append("addNo", addNo);
    formdata.append("confirmPassword", confirmPassword);
    formdata.append("email", email);
    formdata.append("photo", photo);
    sendToServer(formdata);

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
  };
  const handleFileChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.files[0] });
    handleImgUpload(e);
  };
  const handleImgUpload = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };
  const handleShow1 = () => {
    setshow1(!show1);
  };
  const handleShow2 = () => {
    setshow2(!show2);
  };

  const sendToServer = async (data) => {
    try {
      const response = await axios.post(
        "http://localhost:3005/studentSignup",
        data
      );
      if (response?.status === 200) {
        toast.success(response.data.msg);
        navigate("/studentLogin");
      } else {
        toast.error(response.data.msg);
      }
      console.log(response?.status);
    } catch (error) {
      if (error?.status === 409 || error?.status === 408) {
        toast.error(error?.response?.data.msg);
      } else {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <CommonNavbar />
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
                      name="firstname"
                      placeholder="Enter first name"
                      required
                      onChange={handleChange}
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
                      name="lastname"
                      placeholder="Enter last name"
                      required
                      onChange={handleChange}
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
                        name="photo"
                        onChange={handleFileChange}
                        accept="image/*"
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
                    onChange={handleChange}
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
                    name="addNo"
                    placeholder="Enter admission number"
                    required
                    min="0"
                    max="100000000"
                    type="number"
                    onChange={handleChange}
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
                      onChange={handleChange}
                      type={show1 ? "text" : "password"}
                    />
                    <InputGroup.Text id="basic-addon1">
                      {show1 ? (
                        <BsEye onClick={handleShow1} />
                      ) : (
                        <BsEyeSlash onClick={handleShow1} />
                      )}
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
                      name="confirmPassword"
                      placeholder="Enter confirm password"
                      required
                      onChange={handleChange}
                      min="0"
                      max="100000000"
                      type={show2 ? "text" : "password"}
                    />
                    <InputGroup.Text id="basic-addon1">
                      {show2 ? (
                        <BsEye onClick={handleShow2} />
                      ) : (
                        <BsEyeSlash onClick={handleShow2} />
                      )}
                    </InputGroup.Text>
                  </InputGroup>
                  <Form.Control.Feedback type="invalid" className="">
                    Please provide password.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <div className="studentSignup-login">
                <p>
                  Have an account?{" "}
                  <span
                    style={{
                      color: "blue",
                      fontSize: "18px",
                      cursor: "pointer",
                      fontWeight: "500",
                    }}
                    onClick={() => {
                      navigate("/studentLogin");
                    }}
                  >
                    Login
                  </span>
                </p>
              </div>
              <div className=" d-flex justify-content-center align-item-center">
                <Button
                  className="mx-auto w-25 my-4 student-signup-btn"
                  type="submit"
                >
                  Register
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};
