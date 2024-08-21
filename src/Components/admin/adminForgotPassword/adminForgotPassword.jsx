import React, { useState } from 'react'
import { Row, Col } from "react-bootstrap";
import forgotImg from "../../../Assests/ForgotPasswordImg.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function AdminForgotPassword() {
  const [showPassword,SetShowPassword]=useState(true)
  const [showPassword1,SetShowPassword1]=useState(true)
  const clickPassword=()=>{
    SetShowPassword(!showPassword)
  }
  const clickPassword1=()=>{
    SetShowPassword1(!showPassword1)
  }
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
              <Form>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Enter New Password"
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
                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Confirm Password</Form.Label>
                  <InputGroup className="mb-3">
                    <Form.Control
                      placeholder="Re Enter Password"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                      type={showPassword1 ? "password" : "text"}
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
              </Form>
              <div className="adminLogin-submitBtn">
                <Button variant="success">Submit</Button>{" "}
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default AdminForgotPassword