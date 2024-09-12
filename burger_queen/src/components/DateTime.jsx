import styles from "./date.module.css";
import { useState, useEffect } from "react";

export default function DateTime() {
  let [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <div>
      <h2 id={styles.date}>
        {date.toDateString()} {date.toLocaleTimeString()}
      </h2>
    </div>
  );
}
