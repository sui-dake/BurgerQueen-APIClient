import "./singOut.css";
import { useNavigate } from "react-router-dom";
import { auth } from "../libs/Firebase-config";
import { signOut } from "firebase/auth";

export default function SingOut() {
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        console.log("logout error");
      });
  };
  return (
    <div id="singout">
      <button onClick={handleLogout} className="btn_logout">
        <img id="btn_logout_image" src="./log-out.png" />
      </button>
    </div>
  );
}
