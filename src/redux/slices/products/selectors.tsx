import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selectProductsSlice = (state: RootState) => state.products;

export const getProducts = createSelector(selectProductsSlice, (products) => products);
