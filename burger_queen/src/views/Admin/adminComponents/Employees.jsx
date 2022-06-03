/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./../../../libs/Firebase-config";
import Erase from "./Erase";
import EditEmployees from "./EditEmployees";
import ButtonAddEmployee from "./ButtonAddEmployee";
import Modal from "./modal/Modal";

export default function Employees() {
  const [employee, setEmployee] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const employees = collection(db, "Users");

  const handleEdit = (id) => {
    if (edit == true) {
      setEdit(true);
    } else if (edit == false) {
      setEdit(true);
    }
    setEditID(id);
  };

  useEffect(() => {
    onSnapshot(employees, (snapshot) => {
      const employeeArray = [];
      snapshot.forEach((doc) => {
        employeeArray.push({ ...doc.data(), id: doc.id });
      });
      setEmployee(employeeArray);
    });
  }, []);

  return (
    <div>
      <table style={{ border: "none", borderRadius: "20px", padding: "10px" }}>
        <tr>
<<<<<<< HEAD
          <th style={{ width: "180px", padding: "10px" }}>Name</th>
          <th style={{ width: "80px", padding: "10px" }}>Role</th>
          <th style={{ width: "180px", padding: "10px" }}>E-mail</th>
=======
          <th style={{ width: "150px", padding: "10px" }}>Name</th>
          <th style={{ width: "80px", padding: "10px" }}>Role</th>
          <th style={{ width: "150px", padding: "10px" }}>E-mail</th>
>>>>>>> bc218d2c65c13f351b76edc1b8c7b517f07ed5be
        </tr>
        {employee.map((user) => (
          <tr>
            <td
              style={{
<<<<<<< HEAD
                width: "180px",
                padding: "5px 10px",
                background: "none",
                border: "none",
                borderBottom: "0px solid black",
=======
                width: "150px",
                padding: "5px 10px",
                background: "none",
                border: "none",
                borderBottom: "1px solid black",
>>>>>>> bc218d2c65c13f351b76edc1b8c7b517f07ed5be
              }}
              defaultValue={user.Name}
            >
              {user.Name}
            </td>
            <td
              style={{
<<<<<<< HEAD
                width: "130px",
                padding: "5px 10px",
                background: "none",
                border: "none",
                borderBottom: "0px solid black",
=======
                width: "110px",
                padding: "5px 10px",
                background: "none",
                border: "none",
                borderBottom: "1px solid black",
>>>>>>> bc218d2c65c13f351b76edc1b8c7b517f07ed5be
              }}
              defaultValue={user.Role}
            >
              {user.Role}
            </td>
            <td
              style={{
<<<<<<< HEAD
                width: "180px",
                padding: "5px 10px",
                background: "none",
                border: "none",
                borderBottom: "0px solid black",
=======
                width: "150px",
                padding: "5px 10px",
                background: "none",
                border: "none",
                borderBottom: "1px solid black",
>>>>>>> bc218d2c65c13f351b76edc1b8c7b517f07ed5be
              }}
              defaultValue={user.Email}
            >
              {user.Email}
            </td>
            <td style={{ border: "none" }}>
              <img
<<<<<<< HEAD
                id="logo_burger_queen"
                type="button"
                src="./edit1.png.png"
                alt="logo"
                onClick={() => handleEdit(user.id)}
              />
              {edit ? <EditEmployees id={user.id} /> : null}
=======
                type="button"
                src="./edit1.png.png"
                style={{ width: "40px", height: "40px" }}
                alt="logo"
                onClick={() => handleEdit(user.id) + setIsOpen(true)}
              />
              <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                {edit && editID != null ? (
                  <EditEmployees
                    id={editID}
                    handleClose={() => setIsOpen(false)}
                  />
                ) : null}
              </Modal>
>>>>>>> bc218d2c65c13f351b76edc1b8c7b517f07ed5be
            </td>
            <td style={{ border: "none" }}>
              <Erase id={user.id} />
            </td>
          </tr>
        ))}
      </table>
<<<<<<< HEAD
=======

>>>>>>> bc218d2c65c13f351b76edc1b8c7b517f07ed5be
      <ButtonAddEmployee />
    </div>
  );
} 