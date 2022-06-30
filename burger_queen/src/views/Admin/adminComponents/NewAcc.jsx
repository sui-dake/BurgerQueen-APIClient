/* eslint-disable react/react-in-jsx-scope */
import { db } from "../../../libs/Firebase-config";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { useAuth } from "../../../context/authContext";
import styles from "./NewAcc.module.css";

export default function NewAcc() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { singup, changeName, user, currentRemain } = useAuth();
  console.log(user);
  const onSubmit = async (data) => {
    console.log(data);
    const authEmail = data.email;
    const authPass = data.password;
    const role = data.role;
    const displayName = data.name;
    console.log(displayName);

    try {
      await singup(authEmail, authPass);
      await changeName(displayName);
    } catch (error) {}

    addDoc(collection(db, "Users"), {
      Email: authEmail,
      Password: authPass,

      Name: displayName,
      Role: role,
    });
    await currentRemain(user);
  };

  return (
    <div>
      <section id={styles.container_form}>
        <form className={styles.new_form} onSubmit={handleSubmit(onSubmit)}>
          <p className={styles.email_pass_p}>
            E-mail:{" "}
            <input
              placeholder="Email"
              className={styles.email_pass}
              {...register("email", {
                required: true,
              })}
            />
          </p>
          <p className={styles.email_pass_p}>
            Password:{" "}
            <input
              placeholder="Password"
              className={styles.email_pass}
              type="password"
              {...register("password", {
                required: true,
              })}
            />
          </p>
          <p className={styles.email_pass_p}>
            Role:{" "}
            <select
              {...register("role", { required: true })}
              className={styles.email_pass}
            >
              <option value="Waiter/waitress">Waiter/waitress</option>
              <option value="Chef">Chef</option>
              <option value="Manager">Manager</option>
            </select>
          </p>
          <p className={styles.email_pass_p}>
            Full Name:{" "}
            <input
              placeholder="Name"
              className={styles.email_pass}
              {...register("name", {
                required: true,
              })}
            />
          </p>

          <input type="submit" id="submit" value={"Create"} />
        </form>
        {() => {
          console.log(user);
        }}
      </section>
    </div>
  );
}
