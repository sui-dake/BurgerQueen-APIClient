/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./../../../libs/Firebase-config";
import useForm from "./editHook/useForm";

export default function EditEmployees({ id, handleClose }) {
  const [employee, setEmployee] = useState([]);
  const [formName, setFormName] = useState(null);
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
      Name: formName,
      Email: formEmail,
      Role: formRole,
    });
    handleClose();
  };

  const { handleChange, values, handleSubmit } = useForm(editEmployee);

  let name = values.name;
  let email = values.email;
  let role = values.role;

  const handleSetting = async (user) => {
    name == undefined ? setFormName(user.Name) : setFormName(name);
    email == undefined ? setFormEmail(user.Email) : setFormEmail(email);
    role == undefined ? setFormRole(user.Role) : setFormRole(role);
    if (formName && formEmail && formRole != null) {
      setTimeout(handleSubmit, 500); 
    }
  };

  useEffect(() => {
    getEmployee();
  }, []);
  // console.log("LETs: " + name + email + role);
  // console.log("STATES: " + formName + formEmail + formRole);

  return (
    <div className="modal-table">
      {employee.map((user, keyUnique) => (
        <div className="modal-user" key={keyUnique}>
          {" "}
          <section className="modal-inputs">
            <p className="titles-modal">Name </p>
            <input
              className="modal-input"
              defaultValue={user.Name}
              name="name"
              onChange={handleChange}
            />
          </section>
          <section className="modal-inputs">
            <p className="titles-modal">Role </p>
            <input
              className="modal-input"
              defaultValue={user.Role}
              onChange={handleChange}
              name="role"
            />
          </section>
          <section className="modal-inputs">
            <p className="titles-modal">E-mail </p>
            <input
              className="modal-input"
              defaultValue={user.Email}
              name="email"
              onChange={handleChange}
            />
          </section>
          <object className="modal-check" style={{ border: "none" }}>
            <img            
              id="img-check"
              type="button"
              src="./check.png"
              alt="logo"
              onClick={() => {
                handleSetting(user);
              }}
            />
          </object>
        </div>
      ))}
    </div>
  );
}
