import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import stdImg from "../../../Assests/stdImg.png";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function StudentLogin() {
  const navigate = useNavigate();
  const [showPassword, SetShowPassword] = useState(true);
  const [data, setData] = useState({ email: "", password: "" });
  const handleChanges = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    const { email, password } = data;
    const validateFields = () => {
      if (!email) {
        toast.error("Email is requires");
        return false;
      }
      if (!password) {
        toast.error("password is required");
        return false;
      }
      return true;
    };
    if (!validateFields()) {
      return;
    }
    sentToServer();
  };
  const sentToServer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/studentLogin",
        data
      );
      if (response.status === 200) {
        const studentId = response.data.data._id;
        if (studentId) {
          localStorage.setItem("studentId", studentId);
        }
        toast.success("Login Success");
        navigate("/student-dashboard");
      }
      console.log(response.status);
    } catch (error) {
      if (
        error.status === 401 ||
        error.status === 405 ||
        error.status === 402
      ) {
        toast.error(error?.response.data.msg);
      } else {
        toast.error("log in again");
      }
      console.log(error);
    }
  };
  const clickPassword = () => {
    SetShowPassword(!showPassword);
  };
  return (
    <div>
      <div className="adminLogin-main">
        <div className="adminLogin-box">
          <Row className="adminLogin-content">
            <h3>Student Login</h3>
            <Col className="adminLogin-adminImg" md={5}>
              <img src={stdImg} alt="" />
            </Col>
            <Col className="adminLogin-loginSection" md={7}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChanges}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Password"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      name="password"
                      type={showPassword ? "password" : "text"}
                      onChange={handleChanges}
                    />
                    <InputGroup.Text id="basic-addonAdminLogin">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={clickPassword}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <span
                  className="adminLogin-forgot"
                  onClick={() => {
                    navigate("/studentForgotpassword");
                  }}
                >
                  Forgot password?
                </span>
                <div className="adminLogin-submitBtn">
                  <Button variant="success" type="submit">
                    Login
                  </Button>{" "}
                </div>
                Don't have an account yet?{" "}
                <span
                  style={{ cursor: "pointer", fontWeight: "bold" }}
                  onClick={() => {
                    navigate("/student/signup");
                  }}
                >
                  {" "}
                  Register Now
                </span>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
