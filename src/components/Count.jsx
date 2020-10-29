import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subtractCount } from "../redux/action/index";

const Count = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addCount("inc_payload"))}>
        Add to count
      </button>
      <button onClick={() => dispatch(subtractCount("dec_payload"))}>
        SubtractCount to count
      </button>
    </main>
  );
};

export default Count;
