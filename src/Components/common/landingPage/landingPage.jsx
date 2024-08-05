import React from "react";
import "./landingPage.css";
import { Row, Col } from "react-bootstrap";
import shelfImg from "../../../Assests/shelfImg.png";
import studentsImg from "../../../Assests/studentImg.png";
import CommonNavbar from "../commonNavbar/commonNavbar";
import Footer from "../footer/footer";
import tutorImg from "../../../Assests/teacherImg.jpg";
function LandingPage() {
  return (
    <div>
      <CommonNavbar />
      <Row>
        <Col className="landingPage-left">
          <h2 style={{ fontWeight: "bolder" }}>Open Library</h2>
          <p>
            One web page for every book ever published. It's a lofty but
            achievable goal. To build Open Library, we need hundreds of millions
            of book records, a wiki interface, and lots of people who are
            willing to contribute their time and effort to building the site. To
            date, we have gathered over 20 million records from a variety of
            large catalogs as well as single contributions, with more on the
            way.
          </p>
          <div className="landingPage-left-quote">
            Read! Learn! <span style={{color:"#1fbf7c"}}>Succeed!</span> 
          </div>
        </Col>
        <Col className="landingPage-right">
          <img src={shelfImg} alt="" />
        </Col>
      </Row>

      <Row style={{ background: "#1fbf7c" }}>
        <Col className="landingPage-h2-left">
          <img src={studentsImg} alt="" />
        </Col>
        <Col className="landingPage-h2-right">
          <h2 style={{ fontWeight: "bolder" }}>Students</h2>
          <p>
            A student is someone who is enrolled in a degree-granting program
            (either undergraduate or graduate) at an institution of higher
            learning and registered full-time according to the definition of
            his/her respective academic institution, and who is not employed
            full-time. Students must submit written verification from a
            professor or other verifiable school authority at their institution
            attesting to their full-time student status when making an
            application.
          </p>
        </Col>
      </Row>

      <Row style={{ width: "100%", height: "550px" }}>
        <Col className="landingPage-h3-left">
          <h2 style={{ fontWeight: "bolder" }}>Teachers</h2>
          <p>
            A teacher's professional duties may extend beyond formal teaching.
            Outside of the classroom teachers may accompany students on field
            trips, supervise study halls, help with the organization of school
            functions, and serve as supervisors for extracurricular activities.
            They also have the legal duty to protect students from harm, such as
            that which may result from bullying, sexual harassment, racism or
            abuse. In some education systems, teachers may be responsible for
            student discipline.
          </p>
        </Col>
        <Col className="landingPage-h3-right">
          <img src={tutorImg} alt="" />
        </Col>
      </Row>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
