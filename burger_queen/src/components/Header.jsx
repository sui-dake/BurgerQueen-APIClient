/* eslint-disable react/react-in-jsx-scope */
import "./header.css";
import logo from "../assets/LogoBQ.png";

export default function Header() {
  return (
    <div id="container_header">
      <img id="logo_burger_queen" src={logo} alt="logo" />
    </div>
  );
}
