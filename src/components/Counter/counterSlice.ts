import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

export interface CounterStateT {
  count: number;
}

const initialState: CounterStateT = {
  count: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState): number => state.counter.count;

export default counterSlice.reducer;
