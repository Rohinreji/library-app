import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import forgotImg from "../../../Assests/ForgotPasswordImg.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function TutorForgotPassword() {
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate()
  const [showPassword, SetShowPassword] = useState(true);
  const [showPassword1, SetShowPassword1] = useState(true);
  const clickPassword = () => {
    SetShowPassword(!showPassword);
  };
  const clickPassword1 = () => {
    SetShowPassword1(!showPassword1);
  };

  const validation = () => {
    const { email, password, confirmPassword } = data;
    if (!email) {
      toast.error("email is required");
      return false;
    }
    if (!password) {
      toast.error("password is required");
      return false;
    }
    if (!confirmPassword) {
      toast.error("confirm password is required");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("password mismatch");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log(data);

  const sendToServer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/tutor-forgot-password",
        data
      );
      if (response.status === 200) {
        toast.success(response.data.msg);
        navigate("/tutorLogin")

      } else {
        toast.error(response.data.msg);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
    sendToServer();
  };

  return (
    <div>
      <div className="adminLogin-main">
        <div className="adminLogin-box">
          <Row className="adminLogin-content">
            <h3>Reset Password</h3>
            <Col className="adminLogin-adminImg" md={5}>
              <img src={forgotImg} alt="" />
            </Col>
            <Col className="adminLogin-loginSection" md={7}>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email"
                    name="email"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter New Password"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      type={showPassword ? "password" : "text"}
                      name="password"
                      onChange={handleChange}
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
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Re Enter Password"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      type={showPassword1 ? "password" : "text"}
                      name="confirmPassword"
                      onChange={handleChange}
                    />
                    <InputGroup.Text id="basic-addonAdminLogin">
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={clickPassword1}
                      >
                        {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                      </span>
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <div className="adminLogin-submitBtn">
                  <Button variant="success" type="submit">
                    Submit
                  </Button>{" "}
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default TutorForgotPassword;
