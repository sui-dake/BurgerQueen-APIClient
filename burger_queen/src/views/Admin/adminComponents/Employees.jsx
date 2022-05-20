import { useParams } from "react-router-dom";
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
  // let { id } = useParams

  return (
    <div>
      <table>
        <tr>
          <th style={{ width: "180px" }}>Name</th>
          <th style={{ width: "80px" }}>Role</th>
          <th style={{ width: "180px" }}>E-mail</th>
        </tr>
        <tr>
          {employee.map((user) => (
            <tr>
              <td style={{ width: "180px" }}>{user.Name}</td>
            </tr>
          ))}
          <td>
            {employee.map((user) => (
              <tr>
                <td style={{ width: "180px" }}>{user.Role}</td>
              </tr>
            ))}
          </td>
          <td>
            {employee.map((user) => (
              <tr>
                <td style={{ width: "180px" }}>{user.Email}</td>
              </tr>
            ))}
          </td>
        </tr>
      </table>
    </div>
  );
}
