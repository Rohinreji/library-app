import "./contact.css";
import { MdPhone } from "react-icons/md";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
export const Contact = () => {
  return (
    <div className="contactpage">
      <div className="ContactPage-body shadow">
        <h2>Contact Us</h2>
        <div className="contactUs-right-inner-box">
          <h4 className="contactUs-phone1-heading">Phone 1</h4>
          <div className="d-flex contactsUs-details-box ">
            <MdPhone className="contactsUs-icons" />
            <p>+91 1234567890</p>
          </div>

          <h4 className="contactUs-sub-headings">Phone 2</h4>
          <div className="d-flex contactsUs-details-box ">
            <MdPhone className="contactsUs-icons" />
            <p>+91 1234567890</p>
          </div>

          <h4 className="contactUs-sub-headings">E-Mail</h4>
          <div className="d-flex contactsUs-details-box ">
            <MdOutlineMail className="contactsUs-icons" />
            <p>pinciya@gmail.com</p>
          </div>

          <h4 className="contactUs-sub-headings">Address</h4>
          <div className="d-flex contactsUs-details-box ">
            <IoLocationOutline className="contactsUs-location-icon" />
            <p>22/10,kazhakootam, trivandrum,587788</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
