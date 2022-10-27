import { createSlice } from '@reduxjs/toolkit';

export type ProductState = {
    id: number;
    name: 'apples' | 'grapes' | 'peaches';
    productName: 'Apples' | 'Grapes' | 'Peaches';
    price: number;
    quantity: number;
};

export type ProductsState = ProductState[];

export const initialState: ProductsState = [
    {
        id: 1,
        name: 'grapes',
        productName: 'Grapes',
        price: 5,
        quantity: 0,
    },
    {
        id: 2,
        name: 'apples',
        productName: 'Apples',
        price: 3,
        quantity: 0,
    },
    {
        id: 3,
        name: 'peaches',
        productName: 'Peaches',
        price: 7,
        quantity: 0,
    },
];

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: (state, action) => {
            state = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;
