import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: {}
    },
    reducers: {
        increment: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]++;
        },
        decrement: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] === undefined) state.value[articul] = 0;
            state.value[articul]--;
            if (state.value[articul] < 1) state.value[articul] = 0;
        },
        clear: (state, data) => {
            let articul = data.payload;
            if (state.value[articul] > 0)
                state.value[articul] = 0;
        }
    }
});

export const { increment, decrement, clear } = cartSlice.actions;
export const selectCart = state => state.cart.value;
export default cartSlice.reducer;