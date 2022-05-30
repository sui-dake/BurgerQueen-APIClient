/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "./../../../libs/Firebase-config";

export default function Employees() {
  const [employee, setEmployee] = useState([]);
  const employees = collection(db, "Users");

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
          <th style={{ width: "180px", padding: "10px" }}>Name</th>
          <th style={{ width: "80px", padding: "10px" }}>Role</th>
          <th style={{ width: "180px", padding: "10px" }}>E-mail</th>
        </tr>

        {employee.map((user) => (
          <tr>
            <td style={{ width: "180px", padding: "5px 10px" }}>{user.Name}</td>
            <td style={{ width: "130px", padding: "5px 10px" }}>{user.Role}</td>
            <td style={{ width: "180px", padding: "5px 10px" }}>
              {user.Email}
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
