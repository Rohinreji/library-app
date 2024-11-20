import React from "react";
import "./commonNavbar.css";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";
function CommonNavbar() {
  const navigate = useNavigate();
  return (
    <div>
      <nav className="navbar navbar-expand-lg commonNavbar-bg">
        <div className="container-fluid">
          <a
            className="navbar-brand fs-3"
            style={{ fontWeight: "700" }}
            href="#"
          >
            Open Library
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  style={{ fontWeight: "300px" }}
                onClick={()=>{
                  navigate("/landingPage")
                }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  style={{ fontWeight: "300px" }}
                  href="#"
                  onClick={()=>
                    {
                      navigate("/contact")
                    }
                  }
                >
                  Contact
                </a>
              </li>
            </ul>
            <form className="commonNavbar-btn d-flex">
              {/* <button>Login</button> */}
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Login
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/studentLogin");
                    }}
                  >
                    Student
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      navigate("/tutorLogin");
                    }}
                  >
                    Tutor
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default CommonNavbar;
