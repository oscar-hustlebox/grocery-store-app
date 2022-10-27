import React from 'react';
import { ProductCart } from '../ProductCart';
import { ProductList } from '../ProductList';
import { StyledWrapper } from './styles';

export const StoreFront = () => {
    return (
        <StyledWrapper>
            <ProductCart />
            <ProductList />
        </StyledWrapper>
    );
};
