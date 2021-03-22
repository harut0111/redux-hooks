import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, subtractCount } from "../redux/action/index";
import { stateType } from "../redux/reducer/rootReducer";

const Count: React.FC = () => {
  const count = useSelector((state: stateType) => state.count);
  const dispatch = useDispatch();

  return (
    <main>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addCount("inc_payload"))}>
        Increase +1
      </button>
      <button onClick={() => dispatch(subtractCount("dec_payload"))}>
        Decrease -1
      </button>
    </main>
  );
};

export default Count;
