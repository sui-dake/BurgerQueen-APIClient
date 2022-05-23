import { useEffect } from "react";
import { useAuth } from "../context/authContext";

export default function Role() {
  const { user, roles, role } = useAuth();
  console.log(user);
  console.log(roles);
  useEffect(() => {
    role(user);
  }, []);

    return (
      <section className="user">
        <p> {roles} </p>
      </section>
    );
  
}
