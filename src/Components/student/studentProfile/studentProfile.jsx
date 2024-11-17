import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaUserCircle } from "react-icons/fa";
import toast from "react-hot-toast";
import axiosInstance from "../../../apis/axiosInstance";
import { BASE_URL } from "../../../apis/baseURL";

function StudentProfile({ handleShow, show, setShow }) {
  const handleClose = () => setShow(false);
  const [studentId, setStudentId] = useState();
  const [data, setData] = useState({});
  useEffect(() => {
    const studentId = localStorage.getItem("studentId");
    if (studentId) {
      setStudentId(studentId);
      getData();
    } else {
      toast.error("Login Again");
    }
  }, [studentId]);

  const getData = async () => {
    try {
      const response = await axiosInstance.get(`viewStudentById/${studentId}`);
      if (response.status == 200) {
        setData(response.data.data);
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
        <Modal.Body>
          <Form>
            <form
              action="upload.php"
              method="post"
              enctype="multipart/form-data"
            >
              <label for="fileToUpload">
                <div className="profile-pic" style={{ marginLeft: "100%" }}>
                  <img
                    src={`${BASE_URL}${data?.photo?.filename}`}
                    className="profile-pic"
                    alt=""
                  />
                  <span className="glyphicon glyphicon-camera"></span>
                  <span>Change Image</span>
                </div>
              </label>
              <input type="File" name="fileToUpload" id="fileToUpload" />
            </form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Firstname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Firstname"
                  value={data?.firstname}
                />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Lastname"
                  value={data?.lastname}
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
              />
            </Form.Group>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Old password</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default StudentProfile;
