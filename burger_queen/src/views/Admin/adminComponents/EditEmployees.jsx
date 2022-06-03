/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./../../../libs/Firebase-config";
import useForm from "./editHook/useForm";

export default function EditEmployees({ id, handleClose }) {
  const [employee, setEmployee] = useState([]);
  const [formName, setFormName] = useState([]);
  const [formEmail, setFormEmail] = useState(null);
  const [formRole, setFormRole] = useState(null);

  const getEmployee = async () => {
    const row = [];
    const snap = await getDoc(doc(db, "Users", id));
    row.push(snap.data());
    setEmployee(row);
  };

  const editEmployee = async () => {
    const employeeCollection = doc(db, "Users", id);
    await updateDoc(employeeCollection, {
      Name: name,
      Email: email,
      Role: role,
    });
    //handleClose();
  };

  const { handleChange, values, handleSubmit } = useForm(editEmployee);
  // if values.name === undefined {return user.name} else {return values.name}
  let name = values.name;
  const email = values.email;
  const role = values.role;

  const handleSetting = () => {
    name == undefined ? setFormName(name) : setFormName(name);
    email == undefined ? setFormEmail(email) : setFormEmail(email);
    role == undefined ? setFormRole(role) : setFormRole(role);
  };
  console.log(handleSetting);
  useEffect(() => {
    getEmployee();
  }, []);
  console.log(name + email + role);
  console.log(formName + formEmail + formRole);

  return (
    <div className="modal-table">
      {employee.map((user) => (
        <div className="modal-user">
          {" "}
          <section className="modal-inputs">
            <p>Name </p>
            <input
              className="modal-input"
              defaultValue={user.Name}
              name="name"
              onChange={handleChange}
            />
          </section>
          <section className="modal-inputs">
            <p>Role </p>
            <input
              className="modal-input"
              defaultValue={user.Role}
              onChange={handleChange}
              name="role"
            />
          </section>
          <section className="modal-inputs">
            <p>E-mail </p>
            <input
              className="modal-input"
              defaultValue={user.Email}
              name="email"
              onChange={handleChange}
            />
          </section>
          <object className="modal-check" style={{ border: "none" }}>
            <img
              style={{ width: "60px" }}
              id="img-check"
              type="button"
              src="./check.png"
              alt="logo"
              onClick={handleSubmit && handleClose}
            />
          </object>
        </div>
      ))}
    </div>
  );
}
