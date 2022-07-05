/* eslint-disable react/react-in-jsx-scope */
import { useAuth } from "../context/authContext";

export default function User() {
  const { user } = useAuth();
  return (
    <section className="user">
      <p style={{ fontSize: "30px", marginTop: "45px" }}> {user?.displayName} </p>
    </section>
  );
}
