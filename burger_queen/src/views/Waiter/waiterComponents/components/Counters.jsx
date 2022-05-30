/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Counter from "./Counter";

const Counters = () => {
  const [counters, setCounters] = useState([0]);

  const sum = counters.reduce((acc, item) => acc + item, 0);

  return (
    <div>
      {/* <p>Sum: {sum}</p> */}
      {/* <button
        onClick={() => {
          setCounters([...counters, 0]);
        }}
      >
        Add counter
      </button> */}

      <div>
        {counters.map((value, index) => (
          <Counter
            value={value}
            hideIncrement={sum >= 20}
            onIncrement={() => {
              const countersCopy = [...counters];
              countersCopy[index] += 1;
              setCounters(countersCopy);
            }}
            onDecrement={() => {
              const countersCopy = [...counters];
              countersCopy[index] -= 1;
              setCounters(countersCopy);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Counters;
