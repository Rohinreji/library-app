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
function StudentLogin() {
  const [showPassword, SetShowPassword] = useState(true);
  const [data, setData] = useState({ email: "", password: "" });
  const handleChanges = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = data;
    const validateFields = () => {
      if (!email) {
        toast.error("Enter email");
        return false;
      }
      if (!password) {
        toast.error("Enter password");
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
      const response = await axios.post("http://localhost:3005/studentLogin");
      if (response.status === 200) {
        toast.success("Login Success");
      }
    } catch (error) {
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
                <span className="adminLogin-forgot">Forgot password?</span>
                <div className="adminLogin-submitBtn">
                  <Button variant="success" type="submit">
                    Login
                  </Button>{" "}
                </div>
              Don't have an account yet?{" "}
              <span style={{ cursor: "pointer", fontWeight: "bold" }}>
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
