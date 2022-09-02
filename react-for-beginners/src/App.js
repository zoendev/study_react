import { useEffect, useState } from "react";
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter((prev) => prev + 1);
  console.log("Run All the Time");
  // const iRunOnlyOnce = () => {
  //   console.log("Run Only Once.");
  // };
  // useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    console.log("Call the API");
  }, []);

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default App;
