export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

export const addCount = (payload) => {
  return {
    type: INCREMENT,
    payload,
  };
};

export const subtractCount = (payload) => {
  return {
    type: DECREMENT,
    payload,
  };
};
