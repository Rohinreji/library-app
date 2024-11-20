import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import axiosInstance from "../../../apis/axiosInstance";
import "./tutorChatBox.css";

export const TutorChatBox = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [state, setState] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const tutorId = localStorage.getItem("tutorId");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendDataToServer = async (obj) => {
    try {
      const response = await axiosInstance.post(`/sendMessage`, obj);
      if (response.status === 200) {
        console.log("Message sent");
      }
    } catch (error) {
      console.log(error);
    } finally {
      getMessage(tutorId);
      setMessage("");
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    const value = "tutor";
    const obj = { message, tutorId, value };
    sendDataToServer(obj);
  };

  const getMessage = async (tutorId) => {
    try {
      const response = await axiosInstance.post(`getMessage/${tutorId}`);
      if (response.status === 200) {
        console.log("Data fetched");
        setState(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const tutorId = localStorage.getItem("tutorId");
    console.log(tutorId,"sfds54");

    getMessage(tutorId);
  }, [state]);

  useLayoutEffect(() => {
    scrollToBottom();
  }, [message]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Button
        variant="primary"
        className="tutorChatBox-btn"
        onClick={handleShow}
      ></Button>

      <Modal
        show={show}
        onHide={handleClose}
        style={{ marginLeft: "70%", marginTop: "10%", width: "400px" }}
      >
        <Modal.Header>
          <Modal.Title>Help Desk</Modal.Title>
        </Modal.Header>
     <div         className="tutor-chat-body"
     >
     <Modal.Body className="dispaly-tutor-msg">
          {state.map((e, index) => {
            if (e.value === "admin") {
              return (
                <div className="tutorChatBox-chat1">
                  <h6>{e.message}</h6>
                </div>
              );
            } else {
              return (
                <div className="tutorChatBox-chat2">
                  <h6>{e.message}</h6>
                </div>
              );
            }
          })}
          <div ref={messagesEndRef} />
        </Modal.Body>
     </div>
        <Modal.Footer>
          <Form onSubmit={handleSend} className="d-flex w-100">
            <Form.Group className="mb-3 w-100">
              <Form.Control
                type="text"
                name="message"
                value={message}
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Button type="submit" className="tutorChatBox-send-btn">
              Send
            </Button>
          </Form>
        </Modal.Footer>
      </Modal>
    </>
  );
};
