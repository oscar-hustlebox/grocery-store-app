import React from 'react';
import { ProductCartItems } from './ProductCartItems/ProductCartItems';
import { StyledCartItems, StyledProductCart } from './styles';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { ProductCartTotal } from './ProductCartTotal/ProductCartTotal';
import { ProductCartHeader } from './ProductCartHeader/ProductCartHeader';

export const ProductCart = () => {
    const items = useSelector((state: RootState) => state.cart);
    return (
        <StyledProductCart>
            <StyledCartItems>
                <ProductCartHeader />
                <ProductCartItems items={items} />
            </StyledCartItems>
            <ProductCartTotal items={items} />
        </StyledProductCart>
    );
};
