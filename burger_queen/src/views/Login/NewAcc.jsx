import { auth, db, secondaryApp } from "../../libs/Firebase-config";
import { useForm } from "react-hook-form";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { doc, addDoc, collection } from "firebase/firestore";
import { useAuth } from "../../context/authContext";

export default function NewAcc() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { singup, changeName, user } = useAuth();
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

    // secondaryApp.createUserWithEmailAndPassword(auth, authEmail, authPass)
    // .then(function(user){
    //
    //     secondaryApp.signOut(auth)
    // })
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     const uid = user.uid;
    //     console.log(uid);
    //   } else {
    //     console.log("no estas loggeadx");
    //   }
    // });
    // ...

    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;

    //     // ..
    //   });
    return {
      authPass,
      authEmail,
      role,
    };
  };

  return (
    <div>
      <section id="container_form">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Email"
            className="email_pass"
            {...register("email", {
              required: true,
            })}
          />
          <input
            placeholder="Password"
            className="email_pass"
            type="password"
            {...register("password", {
              required: true,
            })}
          />
          <input
            placeholder="Role"
            className="email_pass"
            {...register("role", {
              required: true,
            })}
          />
          <input
            placeholder="Name"
            className="email_pass"
            {...register("name", {
              required: true,
            })}
          />

          <input type="submit" id="submit" value={"Create"} />
        </form>
        {() => {
          console.log(user);
        }}
      </section>
      
    </div>
  );
}
