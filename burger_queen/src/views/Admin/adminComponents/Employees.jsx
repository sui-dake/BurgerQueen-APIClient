/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./../../../libs/Firebase-config";
import Erase from "./Erase";
import EditEmployees from "./EditEmployees";

export default function Employees() {
  const [employee, setEmployee] = useState([]);
  const [edit, setEdit] = useState(false);
  const employees = collection(db, "Users");

  const handleEdit = (id) => {
    if (edit == true) {
      setEdit(true);
      console.log(id);
    } else if (edit == false) {
      setEdit(true);
      console.log("id");
    }
    //return <div>{edit ? <EditEmployees id={id} /> : null}</div>;
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
      <div>
        <table
          style={{ border: "none", borderRadius: "20px", padding: "10px" }}
        >
          <tr>
            <th style={{ width: "180px", padding: "10px" }}>Name</th>
            <th style={{ width: "80px", padding: "10px" }}>Role</th>
            <th style={{ width: "180px", padding: "10px" }}>E-mail</th>
          </tr>
          {employee.map((user) => (
            <tr>
              <td
                style={{
                  width: "180px",
                  padding: "5px 10px",
                  background: "none",
                  border: "none",
                  borderBottom: "0px solid black",
                }}
                defaultValue={user.Name}
              >
                {user.Name}
              </td>
              <td
                style={{
                  width: "130px",
                  padding: "5px 10px",
                  background: "none",
                  border: "none",
                  borderBottom: "0px solid black",
                }}
                defaultValue={user.Role}
              >
                {user.Role}
              </td>
              <td
                style={{
                  width: "180px",
                  padding: "5px 10px",
                  background: "none",
                  border: "none",
                  borderBottom: "0px solid black",
                }}
                defaultValue={user.Email}
              >
                {user.Email}
              </td>
              <td style={{ border: "none" }}>
                <img
                  id="logo_burger_queen"
                  type="button"
                  src="./edit1.png.png"
                  alt="logo"
                  onClick={() => handleEdit(user.id)}
                />
                {edit ? <EditEmployees id={user.id} /> : null}
              </td>
              <td style={{ border: "none" }}>
                <Erase id={user.id} />
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
