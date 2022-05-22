import { useParams } from "react-router-dom";

export default function Products() {
    
    let { id } = useParams
    console.log('products')

    return (
      <div>
        <h3>ID: {id}</h3>
      </div>
    );
    }