/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { db } from "../../../libs/Firebase-config";
import { doc, deleteDoc } from "firebase/firestore";

export default function Erase({ id }) {
  const trash = async (id) => {
    const userCollection = doc(db, "Users", id);
    await deleteDoc(userCollection);
  };
  // condicionar dependiendo de que argumento reciba 

  return (
    <object>
      <img
        id="trashBtn"
        type="button"
        src="./trash.png"
        alt="trash"
        style={{ width: "40px", height: "40px" }}
        onClick={() => {
          trash(id);
        }}
      />
    </object>
  );
}
