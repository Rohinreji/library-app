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
      setMessage("");
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
  }, [message]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="adminChatInreface">
      <AdminChatNav tutorId={tutorId} />
      <div>
        <div className="adminChatinterface-body">
          <div id="display-user-messages">
            {state.map((e) => {
              const dateString = e.updatedAt;

              // Convert the string to a Date object
              const date = new Date(dateString);

              // Extract hours and minutes
              let hours = date.getUTCHours(); // Get hours in 24-hour format
              const minutes = date.getUTCMinutes().toString().padStart(2, "0");

              // Determine AM/PM and adjust hours for 12-hour format
              const ampm = hours >= 12 ? "PM" : "AM";
              hours = hours % 12 || 12; // Convert 0 to 12 for midnight

              // Format the time in HH:MM AM/PM
              const time12Hour = `${hours}:${minutes} ${ampm}`;

              console.log(time12Hour); // Output: 2:17 PM

              if (e.value === "admin") {
                return (
                  <div className="adminChatBox-1">
                    {e.message}
                    <p className="adminChatBoxTime">{time12Hour} </p>
                  </div>
                );
              } else {
                return (
                  <div className="adminChatBox-2">
                    {e.message}
                    <p className="adminChatBoxTime">{time12Hour}</p>
                  </div>
                );
              }
            })}
                      <div ref={messagesEndRef} />

          </div>
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
    </div>
  );
};
