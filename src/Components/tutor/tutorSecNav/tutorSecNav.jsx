import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import "./tutorSecNav.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../apis/baseURL";
export const TutorSecNav = ({changeSelectedPage}) => {
  const [data, setData] = useState({});
  const navigate = useNavigate()
  const id = localStorage.getItem("tutorId");
  const getData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3005/tutorViewProfile/${id}`
      );
      if (response.status == 200) {
        setData(response?.data?.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(data, "data");

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="tutorSecNav">
        <Container>
          <Navbar.Brand href="#home" className="tutorSecNav-heading ">
            Open Library
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="tutorSecNav-nav" />
          <Navbar.Collapse id="tutorSecNav-nav">
            <Nav className="ms-auto tutorSecNav-text tutorSecNav-right-side-text">
              {/* <Nav href="#deets" className="mx-4 my-2"
              >
                Home
              </Nav> */}
              <Nav href="#deets" className="mx-4 d-flex"
              onClick={()=>
              {
                changeSelectedPage("profile")
              }
              }
              >
                <h5 className="my-2"> {data?.firstName}</h5>
                <img
                  src={`${BASE_URL}${data?.profile?.filename}`}
                  alt=""
                  className="tutorProfile-viewImage"
                />
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
