import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import CarouselImg1 from "../../../../Assests/img.jpg";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import "../studentHome.css"
import { useNavigate } from "react-router-dom";
function StudentHomeDetails() {
  const [index, setIndex] = useState(0);
const navigate = useNavigate()
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div>
      <div className="student-Home-carousel-outer-box">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          className="student-Home_carousel"
        >
          <Carousel.Item className="student-home-carousel-Item">
            <img
              className="d-block w-100"
              src={CarouselImg1}
              alt="First slide"
            />
            <Carousel.Caption className="student-details-caption">
              <h3>"Explore Books, Shop Anytime, Anywhere."</h3>
              <Button
                variant="success"
                className="student-home-details-button shadow"
                onClick={()=>
                {
                  navigate("/tutor-viewBook")
                }
                }
              >
                Explore Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="student-home-carousel-Item">
            <img
              className="d-block w-100"
              src={CarouselImg1}
              alt="Second slide"
            />
            <Carousel.Caption className="student-details-caption">
              <h3>"Browse, Buy, Read, Repeat, Enjoy."</h3>
              <Button
                variant="success"
                className="student-home-details-button shadow"
              >
                Explore Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="student-home-carousel-Item">
            <img
              className="d-block w-100"
              src={CarouselImg1}
              alt="Third slide"
            />
            <Carousel.Caption className="student-details-caption">
              <h3>"Explore. Discover. Read. Enjoy."</h3>
              <Button
                variant="success"
                className="student-home-details-button shadow"
                onClick={()=>
                {
                  navigate("/tutor-viewBook")
                }
                }
              >
                Explore Now
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
export default StudentHomeDetails;
