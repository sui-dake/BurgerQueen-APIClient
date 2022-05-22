import DateTime from "../../components/DateTime";
import "./preparing.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PreparingOrder() {
  const navigate = useNavigate();
  return (
    <div className="admin_preparing">
     
        <section id="header_admin">
          <DateTime />
          <button
            id="btn_img_close"
            onClick={() => navigate("/waiter-dashboard")}
          >
            <img id="img_close" src="./close.png" />
          </button>
        </section>
         <section id='container_preparing'>
        <h1 style={{ fontSize: "50px" }}>Preparing order..</h1>

        <section id="spatul_steam">
          <motion.img
            animate={{ rotate: [50, 100, 100, 50] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="cooking"
            src="./spatula.png"
            alt="cooking"
          />
          <motion.img
            animate={{ rotate: [0, 30, 30, 0], x: [0, 50, 0, 50, 0] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="cooking"
            src="./steam.png"
            alt="cooking"
          />
        </section>
        <motion.img
          animate={{ rotate: [0, 30, 30, 0, 30, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="cooking"
          src="./cheeseburger.png"
          alt="cooking"
        />
      </section>
    </div>
  );
}
