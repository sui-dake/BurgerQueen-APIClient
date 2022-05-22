import { useAuth } from "../context/authContext";

export default function User() {
  const { user } = useAuth();
  console.log(user);
  return (
    <section className="user">
      <p> Charge: {user.displayName} </p>
    </section>
  );
}
