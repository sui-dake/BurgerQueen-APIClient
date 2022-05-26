import { useAuth } from "../context/authContext";

export default function User() {
  const { user } = useAuth();
 // console.log(user);
  return (
    <section className="user">
      <p style={{fontSize:'30px'}}> {user.displayName} </p>
    </section>
  );
}
