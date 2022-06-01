/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "./../../../libs/Firebase-config";

export default function EditEmployees({ id }) {
  const [employee, setEmployee] = useState([]);

  const getEmployee = async () => {
    const row = [];
    const snap = await getDoc(doc(db, "Users", id));
    row.push(snap.data());
    setEmployee(row);
  };

  //   const editEmployee = async () => {
  //     const employeeCollection = doc(db, "Users", id);
  //     await updateDoc(employeeCollection, {
  //       Name: name,
  //       Email: email,
  //       Role: role,
  //     });
  //   };
  //   console.log(editEmployee());

  //   const name = "holi";
  //   const email = "";
  //   const role = "";
  useEffect(() => {
    getEmployee();
  }, []);

  return (
    <div>
      <table style={{ border: "none", borderRadius: "20px", padding: "10px" }}>
        {/* <tr>
          <th style={{ width: "180px", padding: "10px" }}>Name</th>
          <th style={{ width: "80px", padding: "10px" }}>Role</th>
          <th style={{ width: "180px", padding: "10px" }}>E-mail</th>
        </tr> */}

        {employee.map((user) => (
          <tr>
            <td>
              <input
                style={{
                  width: "180px",
                  padding: "5px 10px",
                  background: "none",
                  border: "none",
                  borderBottom: "0px solid black",
                }}
                defaultValue={user.Name}
              />
            </td>
            <td>
              <input
                style={{
                  width: "130px",
                  padding: "5px 10px",
                  background: "none",
                  border: "none",
                  borderBottom: "0px solid black",
                }}
                defaultValue={user.Role}
              />
            </td>
            <td>
              <input
                style={{
                  width: "180px",
                  padding: "5px 10px",
                  background: "none",
                  border: "none",
                  borderBottom: "0px solid black",
                }}
                defaultValue={user.Email}
              />
            </td>
            <td style={{ border: "none" }}>
              <img
                id="logo_burger_queen"
                type="button"
                src="./edit.png"
                alt="logo"
                onClick={() => console.log("editar")}
              />
            </td>
            <td style={{ border: "none" }}></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
