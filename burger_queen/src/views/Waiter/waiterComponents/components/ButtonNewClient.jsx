import { useNavigate } from "react-router-dom";
import "./buttonNewClient.css";
import { motion } from "framer-motion";

export default function ButtonNewClient() {
  const navigate = useNavigate();
  return (
    <div className="container_button_new_client">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        id="button_new_client"
        onClick={() => navigate("/order")}
      >
        New client +👤
      </motion.button>
    </div>
  );
}
