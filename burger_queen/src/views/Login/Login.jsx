import "./login.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/authContext";

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { login, user } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const authEmail = data.email;
    const authPass = data.password;

    try {
      await login(authEmail, authPass);
      navigate("/");
    } catch (error) {}
  };

  // signInWithEmailAndPassword(auth, authEmail, authPass)
  //   .then((userCredential) => {
  //     // Signed in
  //     //const user = userCredential.user;
  //     // ...
  //     console.log("loggeadx!");
  //     navigate("/");
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log(errorCode);
  //     // ..
  //   });
  // };

  return (
    <section id="container_form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Email"
          className="email_pass"
          {...register("email", {
            required: true,
            pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          })}
        />
        <p className="errors">
          {errors.email && "Enter a valid email address"}
        </p>
        {console.log(register())}

        <input
          placeholder="Password"
          className="email_pass"
          type="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/,
          })}
        />
        <p className="errors">
          {errors.password &&
            "Password should contains atleast 6 characters and containing uppercase, lowercase and numbers"}
        </p>

        <input type="submit" id="submit" value={"Login"} />
      </form>
    </section>
  );
}
