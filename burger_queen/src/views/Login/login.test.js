/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Login from "./Login";
import { AuthProvider } from "../../context/authContext";

describe("User available", () => {
  it("Verify if there is an user", () => {
    // Extraido de aqui
    // https://testing-library.com/docs/example-react-router/
    // para evitar error
    // `useNavigate() may be used only in the context of a <Router> component.`
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </Router>
    );
    expect(screen.getByText("No hay usuario")).toBeInTheDocument();
  });
});
