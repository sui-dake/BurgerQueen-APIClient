import "./singOut.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export default function SingOut() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate("/login");
    } catch (error) {}
  };
  

  return (
    <div id="singout">
      <button onClick={handleLogout} className="btn_logout">
        <img id="btn_logout_image" src="./log-out.png" />
      </button>
    </div>
  );
}
