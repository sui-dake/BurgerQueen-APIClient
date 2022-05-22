import SingOut from "../../components/SingOut";
import NewAcc from "./NewAcc";
import { getDocs, getDoc, doc, docs } from "firebase/firestore";
import { db } from "../../libs/Firebase-config";
import { useParams } from "react-router-dom";

export default function Coincidence() {
  //   const coinci = async () => {

  //       getDoc()
  //   };
  const { id } = useParams();
  const getDocuments = async () => {
    const docRef = doc(db, "Users", id);
    const docS = await getDoc(docRef);
    console.log(docS.id);
  };

  return (
    <div className="container_coincidence">
      <button
        onClick={() => {
          getDocuments();
        }}
      >
        COINCIDENCE
      </button>
    </div>
  );
}
