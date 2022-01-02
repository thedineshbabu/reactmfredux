import React from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    clear: (state) => {
      state.count = 0;
    },
  },
});

export const { increment, clear } = counterSlice.actions;

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});

export function useStore() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  return {
    count,
    increment: () => dispatch(increment()),
    clear: () => dispatch(clear()),
  };
}

export const StoreProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
