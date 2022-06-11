import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true};

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decreament(state){
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.amount;
        },
        toggleCounter(state){
            state.counter = !state.counter;
        }
    }
});

export const counterActions = counterSlice.actions;
export default counterSlice.reducer;