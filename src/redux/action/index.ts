import { actionType } from "../reducer/rootReducer";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addCount = (payload: string): actionType => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const subtractCount = (payload: string): actionType => {
  return {
    type: DECREMENT,
    payload,
  };
};
