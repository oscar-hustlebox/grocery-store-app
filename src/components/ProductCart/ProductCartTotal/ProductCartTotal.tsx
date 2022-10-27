import React from 'react';
import { ProductsState } from '../../../redux/slices/products/slice';
import { calculateCartTotal } from '../../../utils';
import { StyledProductCartTotal } from './styles';

type ProductCartTotalProps = {
    items: ProductsState;
};

export const ProductCartTotal = ({ items }: ProductCartTotalProps) => {
    const total = calculateCartTotal(items);

    return (
        <StyledProductCartTotal>
            <h2>Total</h2>
            <p>
                <strong>${(Math.round(total * 100) / 100).toFixed(2)}</strong>
            </p>
        </StyledProductCartTotal>
    );
};
