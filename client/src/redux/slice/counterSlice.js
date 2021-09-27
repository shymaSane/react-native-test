import {createSlice} from '@reduxjs/toolkit';

//initial state
const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: state => {
      state.value = state.value + 1;
    },
    decreament: state => {
      state.value = state.value - 1;
    },
    incrementByAmount: (state, action) => {
      console.log(typeof(action.payload) );
      state.value = state.value + action.payload;
    },
  },
});

export const {increament, decreament, incrementByAmount} = counterSlice.actions;

export default counterSlice.reducer;
