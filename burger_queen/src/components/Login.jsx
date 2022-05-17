import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { auth } from "../libs/Firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const authEmail = data.email;
    const authPass = data.password;
    console.log(authPass);
    signInWithEmailAndPassword(auth, authEmail, authPass)
      .then((userCredential) => {
        console.log("loggeadx!");
        navigate("/admin-dashboard");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        // ..
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("email", {
          required: true,
          pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        })}
      />
      {errors.email && "Enter a valid email address"}
      {console.log(register())}

      <input
        type="password"
        {...register("password", {
          required: true,
          pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
        })}
      />

      {errors.password &&
        "Password should contains at least 6 characters and containing uppercase, lowercase and numbers"}

      <input type="submit" />
    </form>
  );
}
