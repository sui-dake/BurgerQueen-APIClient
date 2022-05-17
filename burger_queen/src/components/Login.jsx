import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../libs/Firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState();

  const email = user.email;
  const password = user.password;

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = () =>
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        //const user = userCredential.user;
        // ...
        console.log("loggeadx!");
        // navigate("/waiter-dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        // ..
      });

  return (
    <section>
      <div id="container_singin">
        <form onSubmit={handleSubmit()}>
          <input
            className="form_singin"
            type="email"
            name="email"
            placeholder="Correo"
            onChange={handleChange}
          />
          <input
            className="form_singin"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={handleChange}
          />
          <button className="submit"> Entrar </button>
        </form>
        {error && <p id="error">{error}</p>}
      </div>
    </section>
  );
}
