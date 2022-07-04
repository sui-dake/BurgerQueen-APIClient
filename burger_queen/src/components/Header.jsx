/* eslint-disable react/react-in-jsx-scope */
import styles from "./header.module.css";
import logo from "../assets/LogoBQ.png";

export default function Header() {
  return (
    <div id={styles.container_header}>
      <img id={styles.logo_burger_queen} src={logo} alt="logo" />
    </div>
  );
}
