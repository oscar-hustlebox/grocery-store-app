import React from 'react';
import { ProductCartItems } from './ProductCartItems/ProductCartItems';
import { StyledWrapper } from './styles';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { ProductCartTotal } from './ProductCartTotal/ProductCartTotal';
import { ProductCartHeader } from './ProductCartHeader/ProductCartHeader';

export const ProductCart = () => {
    const items = useSelector((state: RootState) => state.cart);
    return (
        <StyledWrapper>
            <ProductCartHeader />
            <ProductCartItems items={items} />
            <ProductCartTotal items={items} />
        </StyledWrapper>
    );
};
