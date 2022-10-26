import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selectCartSlice = (state: RootState) => state.cart;

export const getCart = createSelector(selectCartSlice, (cart) => cart);
