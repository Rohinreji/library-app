import React, { useState } from "react";
import "./adminLogin.css";
import { Row, Col } from "react-bootstrap";
import adminImg from "../../Assests/adminImg2.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import CommonNavbar from "../common/commonNavbar/commonNavbar";
import Footer from "../common/footer/footer";
function AdminLogin() {
  const navigate = useNavigate();
  const [showPassword, SetShowPassword] = useState(true);

  const adminEmail = "admin@gmail.com";
  const adminPassword = "admin@123";

  const [adminData, setAdminData] = useState({ email: "", password: "" });
  const handleChanges = (data) => {
    setAdminData({ ...adminData, [data.target.name]: data.target.value });
  };
  const clickPassword = () => {
    SetShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login()

    console.log("admin", adminData);
    const { email, password } = adminData;
    if (!email) {
      toast.error("Enter your email");
      return;
    }
    if (!password) {
      toast.error("Enter password");
      return;
    }
  };

  const login = () => {
    if (adminEmail !== adminData.email) {
      toast.error("email is incorrect");
    } else if (adminPassword !== adminData.password) {
      toast.error("password is incorrect");
    } else {
      toast.success("login successfully");
      navigate("/admin/dashBoard")
    }
  };

  return (
    <div>
      <CommonNavbar />
      <div className="adminLogin-main">
        <div className="adminLogin-box">
          <Row className="adminLogin-content">
            <h3>Admin Login</h3>
            <Col className="adminLogin-adminImg" md={5}>
              <img src={adminImg} alt="" />
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
                      type={showPassword ? "password" : "text"}
                      name="password"
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
                    navigate("/adminForgotPassword");
                  }}
                >
                  Forgot password?
                </span>
                <div className="adminLogin-submitBtn">
                  <Button type="submit" variant="success">
                    Login
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AdminLogin;
