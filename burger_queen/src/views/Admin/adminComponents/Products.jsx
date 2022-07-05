/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import Loading from "../../../api/Loading";
import Modal from "./modal/Modal";
import ButtonAddProduct from "./ButtonAddProduct";
import { getAllProducts, deleteProduct } from "../../../api/handlingAPI";
import styles from "./products.module.css";
import EditProducts from "./EditProducts";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [isOpen, setIsOpen] = useState(null);

  const navigate = useNavigate();

  const fetchProducts = () => {
    getAllProducts().then((data) => {
      setProducts(data);
      setLoading(true),
        (error) => {
          setLoading(true);
          setError(error);
        };
      console.log(data.id);
    });
  };

  const handleEdit = (id) => {
    if (edit == true) {
      setEdit(true);
    } else if (edit == false) {
      setEdit(true);
    }
    setEditID(id);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    isOpen === false && fetchProducts();
    console.count();
  }, [isOpen]);
  const MySwal = withReactContent(Swal);

  const alert = (id) => {
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
        deleteProduct(id).then(fetchProducts);
      }
    });
  };

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className={styles.container_allproducts}>
          <table className={styles.table_products}>
            <tr>
              <th className={styles.table_th_product}>Products</th>
              <th className={styles.table_th}>Price</th>
              <th className={styles.table_th}>Type</th>
            </tr>
            {products.map((item, key) => (
              <tr key={key}>
                <td className={styles.products_td}>{item.name}</td>
                <td className={styles.products_td}>$ {item.price}</td>
                <td className={styles.products_td}>{item.type}</td>
                <td>
                  <img
                    type="button"
                    className={styles.products_img_edit_delete}
                    src="./edit1.png.png"
                    onClick={() => handleEdit(item.id) + setIsOpen(true)}
                  />
                  <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                    {edit && editID != null ? (
                      <EditProducts
                        id={editID}
                        handleClose={() => setIsOpen(false)}
                      />
                    ) : null}
                  </Modal>
                </td>

                <td>
                  <img
                    type="button"
                    className={styles.products_img_edit_delete}
                    src="./trash.png"
                    onClick={() => {
                      alert(item.id);
                    }}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
        <ButtonAddProduct />
      </div>
    );
  }
}
