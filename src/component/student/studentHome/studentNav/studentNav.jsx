import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../studentHome.css";

export const StudentNav = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" className="student-navbar">
        <Container>
          <Navbar.Brand href="#home" className="student-nav-heading">
            Open Library
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto student-navbar-text student-nav-right-side-text">
              <Nav href="#deets" className="mx-5">Home</Nav>
              <Nav eventKey={2} href="#memes" className="mx-5">
                About
              </Nav>
              <Nav eventKey={2} href="#memes" className="mx-5">
                Dashboard
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
