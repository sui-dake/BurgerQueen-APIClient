/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

const Counter = (props) => {
  const { value, onIncrement, onDecrement, hideIncrement } = props;
  return (
    <div>
      {value > 0 && (
        <button
          style={{ border: "none", background: "none" }}
          onClick={() => {
            onDecrement();
          }}
        >
          -
        </button>
      )}
      <span> {value} </span>
      {hideIncrement === false && value < 10 && (
        <button
          style={{ border: "none", background: "none" }}
          onClick={() => {
            onIncrement();
          }}
        >
          +
        </button>
      )}
      
    </div>
  );
};

export default Counter;
