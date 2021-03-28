import { DECREMENT, INCREMENT } from "../action";

const initialState = {
  count: 0,
  name: "asd",
};

export interface stateType {
  count: number;
  name: string;
}

export interface actionType {
  type: string;
  payload: string;


  
}

const rootReducer = (
  state: stateType = initialState,
  action: actionType
): stateType => {
  console.log(state, action)





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
