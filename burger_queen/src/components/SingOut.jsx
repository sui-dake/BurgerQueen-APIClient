/* eslint-disable react/react-in-jsx-scope */
import "./singOut.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function SingOut() {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {
      console.count()
    }
  };

  return (
    <div id="singout">
      <button onClick={handleLogout} className="btn_logout">
        <img id="btn_logout_image" src="./log-out.png" />
      </button>
    </div>
  );
}
