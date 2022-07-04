/* eslint-disable react/react-in-jsx-scope */
import { motion } from "framer-motion";
import styles from "./loading.module.css";
import breadUP from "../assets/bread_up.png";
import breadDown from "../assets/bread_down.png";
import cheese from "../assets/cheese.png";
import meat from "../assets/meat.png";
import lettuce from "../assets/lettuce.png";
import tomato from "../assets/tomato.png";

const Loading = () => {
  return (
    <section className={styles.container_images}>
      <motion.img
        animate={{ y: [0, 2, 2, 0], x: [0, 60, 0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className={styles.loading_images_bread}
        src={breadUP}
        alt="breadUp"
      />
      <motion.img
        animate={{ y: [0, 2, 2, 0], x: [0, 60, 0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className={styles.loading_images}
        src={lettuce}
        alt="lettuce"
      />
      <motion.img
        animate={{ y: [0, 2, 2, 0], x: [0, 60, 0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className={styles.loading_images}
        src={tomato}
        alt="tomato"
      />
      <motion.img
        animate={{ y: [0, 2, 2, 0], x: [0, 60, 0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className={styles.loading_images}
        src={cheese}
        alt="cheese"
      />
      <motion.img
        animate={{ y: [0, 2, 2, 0], x: [0, 60, 0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className={styles.loading_images}
        src={meat}
        alt="meat"
      />
      <motion.img
        animate={{ y: [0, 2, 2, 0], x: [0, 60, 0, 60, 0] }}
        transition={{ repeat: Infinity, duration: 1.2 }}
        className={styles.loading_images_bread}
        src={breadDown}
        alt="breadDown"
      />
    </section>
  );
};

export default Loading;
