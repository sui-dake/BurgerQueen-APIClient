import { useNavigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import { auth } from "../libs/Firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      setError(error.message);
      if (error.code === "auth/user-not-found") {
        setError("Usuario no registrado");
      }
      if (error.code === "auth/wrong-password") {
        setError("Contraseña incorrecta");
      }
      if (error.code === "auth/invalid-email") {
        setError("Ingresa un correo válido");
      }
    }
  };

  return (
    <section>
      <div id="container_login">
        <form onSubmit={handleSubmit}>
          <input
            className="form_singin"
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />
          <input
            className="form_singin"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <button className="submit"> Login </button>
        </form>

        {error && <p id="error">{error}</p>}
      </div>
    </section>
  );
}
