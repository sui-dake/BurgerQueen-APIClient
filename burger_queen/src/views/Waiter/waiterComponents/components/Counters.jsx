/* eslint-disable react/jsx-key */
// /* eslint-disable react/prop-types */
// /* eslint-disable react/jsx-key */
// /* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Counter from "./Counter";
//import Breakfast from "./Breakfast";

const Counters = () => {
  const [counters, setCounters] = useState([0]);

  const sum = counters.reduce((acc, item) => acc + item, 0);

  return (
    <div>
      {counters.map((value, index) => (
        <div>
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
        </div>
      ))}
    </div>
  );
};

export default Counters;
