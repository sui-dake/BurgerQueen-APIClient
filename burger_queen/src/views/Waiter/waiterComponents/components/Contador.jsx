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

const Contador = ({ updateState, item }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  
  //const [qproduct, setQproduct] = useState({})
  // useEffect(() => {
  //   updateState(item, state.count);
  //   console.log(item.name, "estado", "hol", state.count);
  //   console.log("order");
  // }, []);

  return (
    <div>
      Contador: {state.count}
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      {updateState(item, state.count)}
    </div>
  );
};

export default Contador;
