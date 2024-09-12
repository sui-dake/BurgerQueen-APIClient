/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { db } from "../../../libs/Firebase-config";
import { doc, deleteDoc } from "firebase/firestore";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Erase({ id }) {
  const trash = async () => {
    const userCollection = doc(db, "Users", id);
    await deleteDoc(userCollection);
  };
  const MySwal = withReactContent(Swal);

  const alert = () => {
    MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8785bd",
      cancelButtonColor: "#f2e37d",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        trash();
      }
    });
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
        onClick={alert}
      />
    </object>
  );
}
