import { useAuth } from "../context/authContext";

export default function User() {
  const { user } = useAuth();

  return (
    <section className="user">
      <p> {user.displayName} </p>
    </section>
  );
}
