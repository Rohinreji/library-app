import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axiosInstance from "../../../apis/axiosInstance";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function TutorFinePayment({ fine, rentId, quantity, booksId }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [data, setData] = useState({ accNum: "", validity: "", cvv: "" });
  const navigate = useNavigate()
  const paymentAndReturn = async () => {
    try {
      const response = await axiosInstance.post(`/tutorReturnReq/${rentId}`);
      if (response.status === 200) {
        toast.success("payed fine successfully");
        navigate("/tutor-dashboard")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addBookQuantity = async () => {
    try {
      const respone = await axiosInstance.post(`/addBookQuantity/${booksId}`, {
        quantity,
      });
      if (respone.status === 200) {
        console.log("book quantity added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleReturn = (e) => {
    if (!validation()) {
      return;
    }
    paymentAndReturn();
    addBookQuantity();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData({ ...data, [name]: value });
  };
  console.log(data, "Data");

  const validation = () => {
    const { accNum, validity, cvv } = data;

    if (!accNum) {
      toast.error("account number is required");
      return false;
    }

    if (accNum.length != 16) {
      toast.error("enter valid account number");
      return false;
    }
    if (!validity) {
      toast.error("validity is required");
      return false;
    }
    if (!cvv) {
      toast.error("cvv is required");
      return false;
    }
    if(cvv.length != 3)
    {
      toast.error("enter valid cvv")
    }
    return true;
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        pay & return
      </Button>

      <Modal
        style={{ width: "400px", marginLeft: "40%", marginTop: "8%" }}
        show={show}
        onHide={handleClose}
        animation={false}
      >
        <Modal.Header>
          <Modal.Title>fine payment</Modal.Title>
        </Modal.Header>
          <Modal.Body>
        <Form
          // onSubmit={() => {
          //   handleReturn();
          // }}
        >
            <h2>fine : {fine-150}</h2>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Account Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="xxxx xxxx xxxx xxxx"
                autoFocus
                name="accNum"
                style={{ width: "95%" }}
                onChange={handleChange}
              />
            </Form.Group>
            <div className="d-flex">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>validity</Form.Label>
                <Form.Control
                  style={{ width: "90%" }}
                  type="text"
                  placeholder="MM / YY"
                  autoFocus
                  name="validity"
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>cvv</Form.Label>
                <Form.Control
                  style={{ width: "90%" }}
                  type="number"
                  placeholder="cvv"
                  autoFocus
                  name="cvv"
                  onChange={handleChange}
                />
              </Form.Group>
            </div>
            <Button variant="primary" 
            onClick={handleReturn}
            >
              pay & return
            </Button>
            </Form>

          </Modal.Body>
      </Modal>
    </>
  );
}

export default TutorFinePayment;
