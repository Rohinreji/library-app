import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../studentHome.css";
import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import StudentProfile from "../../studentProfile/studentProfile";
import { useState } from "react";

export const StudentNav = ({ changeSelectedPage }) => {
  const navigate = useNavigate();


  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="student-navbar">
        <Container>
          <Navbar.Brand
            href="#home"
            className="student-nav-heading"
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/");
            }}
          >
            Open Library
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto student-navbar-text student-nav-right-side-text">
              <Nav href="#deets" className="mx-4">
                Home
              </Nav>
              <Nav eventKey={2} href="#memes" className="mx-4">
                About
              </Nav>
              <Nav
                eventKey={2}
                href="#memes"
                onClick={() => {
                  navigate("/student-dashboard");
                }}
                className="mx-4 student-nav-dashboard "
              >
                Dashboard
              </Nav>
              <Nav
                className="student_Profile"
                onClick={() => {
                  changeSelectedPage("studentProfile");
                }}
              >
                <FaUserCircle />
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
