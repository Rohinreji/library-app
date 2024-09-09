import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { BiCloudUpload } from "react-icons/bi";
import { FaRegImages } from "react-icons/fa6";
import "./tutorEditProfile.css";
import axios from "axios";
import toast from "react-hot-toast";
export const TutorEditProfile = () => {
  const [show, setShow] = useState(false);
  const [profilePic, setProfilePic] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({
    name: "",
    email: "",
    idNo: "",
          profile
: null,
  });
const tutorId = localStorage.getItem("tutorId")
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
    e.preventDefault()
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email",data.email);
    formData.append("idNo", data.idNo);
    formData.append("profile",data.profile
)
    sendDataToServer(formData);
  };

  const sendDataToServer = async (data) => {
    try {
      const response = await axios.post(
        `http://localhost:3005/updateTutorProfile/${tutorId}`,
        {data}
      );
      if (response.status === 200) {
        toast.success("profile updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit 
        </Button>

        <Modal className="tuorEditProfilModal" show={show} onHide={handleClose}>
          <Modal.Body>
            <Modal.Title>Edit Profile</Modal.Title>

            <Form onSubmit={handleSubmit}>
              <div className="student-signup-profile">
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
                    name="      profile"
                    onChange={handleFileChange}
                  />
                </label>
              </div>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  autoFocus
                  className="tutorEditProfileInp"
                  onChange={handleChange}
                  name="name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  autoFocus
                  className="tutorEditProfileInp"
                  onChange={handleChange}
                  name="email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Id Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your Id number"
                  autoFocus
                  className="tutorEditProfileInp"
                  onChange={handleChange}
                  name="idNo"
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={handleClose}
                className="tutorEditProfile-btn"
                type="submit"
              >
                Save
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
};