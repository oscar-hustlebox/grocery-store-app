import React from 'react';
import { ProductCartItems } from './ProductCartItems/ProductCartItems';
import { StyledWrapper } from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/store';
import { ProductCartTotal } from './ProductCartTotal/ProductCartTotal';
import { clearCart } from '../../redux/slices/cart/slice';

export const ProductCart = () => {
    const items = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    return (
        <StyledWrapper>
            <div>
                <h1>Cart</h1>
                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
            <ProductCartItems items={items} />
            <ProductCartTotal items={items} />
        </StyledWrapper>
    );
};
