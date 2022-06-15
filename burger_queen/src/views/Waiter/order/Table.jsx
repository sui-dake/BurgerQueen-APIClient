/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import BreakfastAndMeal from "../waiterComponents/components/BreakfastAndMeal";

const Table = ({
  products,
  setOrders,
  orders,
  setCustomerOrder,
  customerOrder,
}) => {
  return (
    <div id="order_table">
      {console.log("PRO", products)}
      {products.length != 0 ? (
        <article
          className="table_titles"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <p className="table_p">PRICE</p>
          <p className="table_p">PRODUCT</p>
          <p className="table_p">QUANTITY</p>
        </article>
      ) : null}
      {products.map((product) => (
        <tr id="table_row" key={product.id}>
          <BreakfastAndMeal
            product={product}
            setOrders={setOrders}
            orders={orders}
            customerOrder={customerOrder}
            setCustomerOrder={setCustomerOrder}
          />
        </tr>
      ))}
    </div>
  );
};

export default Table;
