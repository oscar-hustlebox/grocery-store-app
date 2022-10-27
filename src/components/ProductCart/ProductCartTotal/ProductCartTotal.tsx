import React from 'react';
import { ProductsState } from '../../../redux/slices/products/slice';
import { calculateCartTotal } from '../../../utils';
import { StyledPrice, StyledProductCartTotal } from './styles';

type ProductCartTotalProps = {
    items: ProductsState;
};

export const ProductCartTotal = ({ items }: ProductCartTotalProps) => {
    const total = calculateCartTotal(items);

    return (
        <>
            {/* TODO add savings 'label' */}
            <StyledProductCartTotal>
                <h2>Total</h2>
                <StyledPrice>${(Math.round(total * 100) / 100).toFixed(2)}</StyledPrice>
            </StyledProductCartTotal>
        </>
    );
};
