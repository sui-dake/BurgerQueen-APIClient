import { useParams } from "react-router-dom";

export default function Products() {
  let { id } = useParams;

  return (
    <div>
      <h3>ID: Products</h3>
    </div>
  );
}
