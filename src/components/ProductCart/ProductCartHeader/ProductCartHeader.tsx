import React from 'react';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../../redux/slices/cart/slice';
import { StyledProductCartHeader } from './styles';

export const ProductCartHeader = () => {
    const dispatch = useDispatch();
    return (
        <StyledProductCartHeader>
            <h1>Cart</h1>
            <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </StyledProductCartHeader>
    );
};
