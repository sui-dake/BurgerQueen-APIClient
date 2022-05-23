import { useState } from "react";
import "./App.css";
import Paths from "./Paths";
import { BrowserRouter } from "react-router-dom";
import { useAuth } from "./context/authContext";
import { AuthProvider } from "./context/authContext";

function App() {
  const [isAutenticate, setAutenticate] = useState(null);
  //const { user, roles, role } = useAuth();

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       setAutenticate(user)
  //     } else {
  //       setAutenticate(null)
  //     }
  //   });user={user} roles={roles}
  return (
    <div>
      <p>{"holi"}</p>
      <AuthProvider>
        <BrowserRouter>
          <Paths />
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
