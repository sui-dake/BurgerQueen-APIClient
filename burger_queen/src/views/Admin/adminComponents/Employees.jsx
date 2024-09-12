/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./../../../libs/Firebase-config";
import Erase from "./Erase";
import EditEmployees from "./EditEmployees";
import ButtonAddEmployee from "./ButtonAddEmployee";
import Modal from "./modal/Modal";
import "./employees.css";

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
      <table className="employees_tr">
        <tr className="employees_tr">
          <th className="th_name">Name</th>
          <th className="th_role">Role</th>
          <th className="th_name">E-mail</th>
        </tr>
        {employee.map((user) => (
          <tr>
            <td
              className="
               tr_user"
              defaultValue={user.Name}
            >
              {user.Name}
            </td>
            <td
              className="
             tr_role"
              defaultValue={user.Role}
            >
              {user.Role}
            </td>
            <td
              className="
               tr_user"
              defaultValue={user.Email}
            >
              {user.Email}
            </td>
            <td style={{ border: "none" }}>
              <img
                type="button"
                src="./edit1.png.png"
                className="edit_employees"
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
            </td>
            <td style={{ border: "none" }}>
              <Erase id={user.id} />
            </td>
          </tr>
        ))}
      </table>
      <ButtonAddEmployee />
    </div>
  );
}
