import { DECREMENT, INCREMENT } from "../action";

const initialState = {
  count: 0,
  name: "asd"
};

const rootReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default rootReducer;
