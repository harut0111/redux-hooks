import React from "react";
import style from "./Counter.module.css";
import {
  decrement,
  increment,
  incrementByAmount,
  selectCount,
} from "../Counter/counterSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../app/hooks";

const Counter: React.FC = () => {
  const [amount, setAmount] = React.useState("");
  const count = useSelector(selectCount);
  // const count = useAppSelector((state) => state.counter.count);

  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

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
