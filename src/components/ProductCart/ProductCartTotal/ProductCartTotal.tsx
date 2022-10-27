import React from 'react';
import { ProductsState } from '../../../redux/slices/products/slice';
import { calculateCartTotal } from '../../../utils';

type ProductCartTotalProps = {
    items: ProductsState;
};

export const ProductCartTotal = ({ items }: ProductCartTotalProps) => {
    const total = calculateCartTotal(items);

    return (
        <div>
            <h2>Total</h2>
            <p>{total}</p>
        </div>
    );
};
