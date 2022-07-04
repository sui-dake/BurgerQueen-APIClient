/* eslint-disable react/react-in-jsx-scope */
import styles from "./singOut.module.css";
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
    <div id={styles.singout}>
    <button onClick={handleLogout} className={styles.btn_logout}>
      <img id={styles.btn_logout_image} src="./log-out.png" />
    </button>
  </div>
  );
}
