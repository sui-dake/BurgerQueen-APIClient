/* eslint-disable react/prop-types */
import React from "react";
import { useReducer, useEffect, useState } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + 1 };
    case "decrement":
      return { ...state, count: state.count - 1 };
    default:
      throw new Error();
  }
}

const Contador = ({ setOrders, item, order, orders, updateState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //const [qproduct, setQproduct] = useState({})
  //useEffect(() => {
  //updateState(item, state.count);
  //   console.log(item.name, "estado", "hol", state.count);
  //   console.log("order");
  //}, []);

  return (
    <div>
      Contador: {state.count}
      <button
        onClick={() => {
          dispatch({ type: "decrement" }) + updateState(item, state.count - 1);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" }) + updateState(item, state.count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default Contador;
