import DateTime from "../../components/DateTime";
import styles from "./preparing.module.css";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PreparingOrder() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/waiter-dashboard"), 5000);
  });
  return (
    <div className={styles.admin_preparing}>
      <section id={styles.header_admin}>
        <DateTime />
        <button
          id={styles.btn_img_close}
          onClick={() => navigate("/waiter-dashboard")}
        >
          <img id={styles.img_close} src="./close.png" />
        </button>
      </section>
      <section id={styles.container_preparing}>
        <h1 style={{ fontSize: "50px" }}>Preparing order..</h1>

        <section id={styles.spatul_steam}>
          <motion.img
            animate={{ rotate: [50, 100, 100, 50] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className={styles.cooking}
            src="./spatula.png"
            alt="cooking"
          />
          <motion.img
            animate={{ rotate: [0, 30, 30, 0], x: [0, 50, 0, 50, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className={styles.cooking}
            src="./steam.png"
            alt="cooking"
          />
        </section>
        <motion.img
          animate={{ rotate: [0, 30, 30, 0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className={styles.cooking}
          src="./cheeseburger.png"
          alt="cooking"
        />
      </section>
    </div>
  );
}
