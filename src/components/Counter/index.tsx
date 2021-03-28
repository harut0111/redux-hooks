import React from "react";
import style from "./Counter.module.css";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../Counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter: React.FC = () => {
  const [amount, setAmount] = React.useState("");
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Add +1</button>
      <button onClick={() => dispatch(decrement())}>Sub -1</button>
      <div className={style.amount}>
        <input type="number" onChange={(e) => setAmount(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(+amount))}>
          Add amount
        </button>
      </div>
    </main>
  );
};

export default Counter;
