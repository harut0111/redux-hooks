import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { PayloadAction } from "@reduxjs/toolkit";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
type useAppDispatchT = ({ payload, type }: PayloadAction) => AppDispatch;
export const useAppDispatch: useAppDispatchT = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// export const useAppDispatch: ThunkDispatch<
//   CounterStateT,
//   unknown,
//   AnyAction
// > = () => useDispatch<AppDispatch>();
// https://stackoverflow.com/questions/59800913/type-safe-usedispatch-with-redux-thunk

// https://redux.js.org/recipes/usage-with-typescript
