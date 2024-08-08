import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import stdImg from "../../../Assests/stdImg.png"
function StudentLogin() {
  const [showPassword, SetShowPassword] = useState(true);
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
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Password"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      type={showPassword ? "password" : "text"}
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
              </Form>
              <span className="adminLogin-forgot">Forgot password?</span>
              <div className="adminLogin-submitBtn">
                <Button variant="success">Login</Button>{" "}
              </div>
              Don't have an account yet?{" "}
              <span style={{ cursor: "pointer", fontWeight: "bold" }}>
                {" "}
                Register Now
              </span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default StudentLogin;
