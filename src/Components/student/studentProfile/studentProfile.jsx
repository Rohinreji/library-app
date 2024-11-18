import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import { BiCloudUpload } from "react-icons/bi";
import { FaRegImages } from "react-icons/fa6";
import axios from "axios";

function StudentEditProfile({ show, setShow }) {
  const handleClose = () => setShow(false);
  const [studentId, setStudentId] = useState();
  const [profilePic, setProfilePic] = useState(null);
  const [data, setData] = useState({
    firstname: "",
    email: "",
    idNo: "",
    lastname: "",
    profile: null,
  });
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      setStudentId(studentId);
    } else {
      toast.error("Login Again");
    }
  }, [studentId]);

  const handleChange = (e) => {
    const { files, value, name, type } = e.target;
    if (type === "file") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };
  console.log(data);

  const handleImageUpload = (e) => {
    setProfilePic(URL.createObjectURL(e.target.files[0]));
  };

  const handleFileChange = (e) => {
    handleImageUpload(e);
    handleChange(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", data.firstname);
    formData.append("email", data.email);
    formData.append("lastName", data.lastname);
    formData.append("profile", data.photo);
    sendDataToServer(formData);
  };

  const sendDataToServer = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:3005/updateStudentProfile/${studentId}`,
        data
      );
      if (response.status === 200) {
        toast.success("profile updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {" "}
            <FaUserCircle /> Profile
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body>
            <div className="student-signup-profile tutorEditProfile-photo">
              {profilePic ? (
                <img src={profilePic} alt="" />
              ) : (
                <FaRegImages
                  color="grey"
                  className="student-signup-fake-image"
                />
              )}

              <label className="student-signup-upload-icon">
                <BiCloudUpload color="" />
                <input
                  type="file"
                  style={{ display: "none" }}
                  name="profile"
                  onChange={handleFileChange}
                />
              </label>
            </div>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Firstname"
                  value={data?.firstname}
                  name="firstname"
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Lastname"
                  value={data?.lastname}
                  name="lastname"
                  onChange={handleChange}
                />
              </Form.Group>
            </Row>

            <Form.Group
              as={Col}
              controlId="formGridEmail"
              style={{ marginBottom: "20px" }}
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={data?.email}
                name="email"
                onChange={handleChange}
              />
            </Form.Group>
            {/* 
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Old password</Form.Label>
                <Form.Control type="password" placeholder="Old Password" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="new Password" />
              </Form.Group>
            </Row> */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" type="submit" onClick={handleClose}>
              Submit
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default StudentEditProfile;
