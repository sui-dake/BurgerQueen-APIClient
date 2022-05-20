import SingOut from "../../components/SingOut";
import Coincidence from "./Coincidence";
import NewAcc from "./NewAcc";

export default function Home() {
  return (
    <div className="container_home">
      <h1>hi world</h1>
      <NewAcc />
      <SingOut />
      <Coincidence/>
    </div>
  );
}
