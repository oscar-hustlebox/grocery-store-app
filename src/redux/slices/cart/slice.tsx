import { createSlice } from '@reduxjs/toolkit';
import { initialState as ProductsInitialState, ProductsState } from '../products/slice';

const initialState: ProductsState = ProductsInitialState;

export const cartSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getCart: (state, action) => {
            state = action.payload;
        },
        addToCart: (state, action) => {
            const products = state.reduce((prev, curr) => {
                if (curr.id === action.payload) {
                    curr.quantity = curr.quantity ? curr.quantity + 1 : 1;
                }
                return [...prev, curr];
            }, initialState);
            state = products;
        },
        clearCart: () => {
            return initialState;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getCart, addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
