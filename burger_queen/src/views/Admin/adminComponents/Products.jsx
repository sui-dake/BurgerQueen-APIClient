/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import Loading from "../../../api/Loading";
import Modal from "./modal/Modal";
import ButtonAddProduct from "./ButtonAddProduct";
import { getAllProducts, deleteProduct } from "../../../api/handlingAPI";
import "./products.css";
import EditProducts from "./EditProducts";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  // useEffect(() => {
  //   fetch("http://localhost:4000/products/")
  //     .then((res) => res.json())
  //     .then(
  //       (data) => {
  //         setLoading(true);
  //         setProducts(data);
  //       },
  //       (error) => {
  //         setLoading(true);
  //         setError(error);
  //       }
  //     );
  // }, []);

  const fetchProducts = () => {
    getAllProducts().then((data) => {
      setProducts(data);
      setLoading(true),
        (error) => {
          setLoading(true);
          setError(error);
        };
    });
  };

  const handleDelete = (id) => {
    deleteProduct(id).then(fetchProducts).catch(alert);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loading) {
    return (
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <div>
        <table
          style={{ border: "none", borderRadius: "20px", padding: "10px" }}
        >
          <tr>
            <th style={{ width: "130px", padding: "5px", fontSize: "30px" }}>
              Products
            </th>
            <th style={{ width: "130px", padding: "5px", fontSize: "30px" }}>
              Price
            </th>
            <th style={{ width: "130px", padding: "5px", fontSize: "30px" }}>
              Type
            </th>
          </tr>

          {products.map((item, key) => (
            <tr key={key}>
              <td
                style={{
                  width: "80px",

                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  width: "80px",

                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                $ {item.price}
              </td>
              <td
                style={{
                  width: "80px",

                  textAlign: "center",
                  fontSize: "25px",
                }}
              >
                {item.type}
              </td>
              <td>
                <img
                  type="button"
                  style={{ width: "40px", height: "40px" }}
                  src="./edit1.png.png"
                  onClick={() => setIsOpen(true)}
                />
                  
              </td>
              
              <td>
                <img
                  type="button"
                  style={{ width: "40px", height: "40px" }}
                  src="./trash.png"
                  onClick={() => {
                    handleDelete(item.id);
                  }}
                />
              </td>
            </tr>
          ))}
          <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        <EditProducts
          handleClose={() => setIsOpen(false)}
          
        />
        </Modal>
        </table>
        <ButtonAddProduct />
      </div>
    );
  }
}
