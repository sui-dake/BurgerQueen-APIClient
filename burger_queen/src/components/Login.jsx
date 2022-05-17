import './login.css';
import React,{ useState } from "react";
import {
  useNavigate,
} from "react-router-dom";
import { useForm } from 'react-hook-form';

export default function Login() {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("email", { required: true, pattern:  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/})} />
        {errors.email && "Enter a valid email address"}
        
        <input {...register("password", { required: true, pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{6,}$/})} />
        {console.log(errors)}
        {errors.password && "Password should contains atleast 6 characters and containing uppercase, lowercase and numbers"}
        
        <input type="submit" />
      </form>
    );
  }