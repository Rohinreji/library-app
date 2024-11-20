import { useNavigate } from "react-router-dom";
import "./adminPleaseLogin.css";
export const AdminPleaseLogin = () => {
  const navigate = useNavigate()
  return (
    <div className="adminPleaseLogin-box">
      <div className="adminPleaseLogin-innerBox shadow">
        <h1>Admin Please Login</h1>
        <button
        onClick={()=>
        {
          navigate("/adminLogin")
        }
        }
        >Login</button>
      </div>
    </div>
  );
};
