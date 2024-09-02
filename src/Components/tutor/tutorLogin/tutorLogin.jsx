import React, { Profiler, useState } from "react";
import { Row, Col } from "react-bootstrap";
import adminImg from "../../../Assests/tutorImg.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function TutorLogin() {
  const [showPassword, SetShowPassword] = useState(true);
  const [data, setData] = useState({
    email: "",
    pasword: "",
  });
  const clickPassword = () => {
    SetShowPassword(!showPassword);
  };

  const validation = () => {
    const { email, password } = data;
    if (!email) {
      toast.error("email is required");
      return false;
    }
    if (!password) {
      toast.error("password is required");
      return false;
    }
    return true;
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  console.log(data, "data");

  const handleSubmit = (e) => {
    e.preventDefault();
    validation();
    sendDataToServer();
  };

  const navigate = useNavigate();


  const sendDataToServer = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3005/tutorLogin",
        data
      );
      if (response.status === 200) {
        const tutorId = response.data.data._id
        if(tutorId)
        {
          localStorage.setItem("tutorId",tutorId)
        }
        toast.success(response.data.msg);
        navigate("/tutor-dashboard")

      }  
      console.log(response.status);
    } catch (error) {
      if (error.status === 405 || error.status === 409) {
        toast.error(error.response.data.msg);
      } else {
        toast.error("log in again");
      }
      console.log(error);
    }
  };
console.log(data,"data");

  return (
    <div>
      <div className="adminLogin-main">
        <div className="adminLogin-box">
          <Row className="adminLogin-content">
            <h3>Educational Tutor Login</h3>
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
                    onChange={handleChange}
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
                <span
                 className="adminLogin-forgot"
                 onClick={()=>{navigate("/tutor/forgot-password")}}
                 >Forgot password?</span>
                <div className="adminLogin-submitBtn">
                  <Button variant="success" type="submit">
                    Login
                  </Button>{" "}
                </div>
                Don't have an account yet?{" "}
                <span style={{ cursor: "pointer", fontWeight: "bold" }}
                onClick={()=>{navigate("/tutorSignup")}}
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

export default TutorLogin;
