import axios from "axios";
import axiosInstance from "../../../apis/axiosInstance";
import "./adminChatInterFace.css";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { AdminChatNav } from "../adminChatNav/adminchatNav";
export const AdminChatInterFace = ({ tutorId }) => {
  const [state, setState] = useState([]);
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

  const sendDataToServer = async (obj) => {
    try {
      const respone = await axiosInstance.post(`/sendMessage`, obj);
      if (respone.status === 200) {
        console.log("data sended successfully");
      }
    } catch (error) {
      console.log(error);
    } finally {
      getdata();
      setMessage("")
    }
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(tutorId, "448998");
    const value = "admin";
    let obj = { message, tutorId, value };
    sendDataToServer(obj);
  };

  const getdata = async () => {
    try {
      const response = await axiosInstance.post(`/getMessage/${tutorId}`);
      console.log(response);
      if (response.status === 200) {
        setState(response.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getdata();
  }, [state]);

  useLayoutEffect(() => {
    scrollToBottom();
  }, [state]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <AdminChatNav tutorId={tutorId}/>
      <div className="adminChatinterface-body">
        {state.map((e) => {
          if (e.value === "admin") {
            return <div className="adminChatBox-1">{e.message}</div>;
          } else {
            return <div className="adminChatBox-2">{e.message}</div>;
          }
        })}
        <div ref={messagesEndRef} />
      </div>
      <div className="adminChatinterface-chat shadow">
        <form
          action="
       "
          onSubmit={sendMessage}
          className="d-flex"
          role="group"
        >
          <input
            type="text"
            className="adminChatinterface-text"
            name="message"
            value={message}
            onChange={handleChange}
          />
          <button className="adminChatinterface-btn" type="submit">
            send
          </button>
        </form>
      </div>
    </div>
  );
};
