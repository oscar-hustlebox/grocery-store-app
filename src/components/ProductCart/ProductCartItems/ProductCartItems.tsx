import React from 'react';
import { ProductsState } from '../../../redux/slices/products/slice';

type ProductCartItemsProps = {
    items: ProductsState;
};

export const ProductCartItems = ({ items }: ProductCartItemsProps) => {
    return (
        <>
            {items.map((item) => (
                <div key={item.id}>
                    <h5>{item.name}</h5>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                </div>
            ))}
        </>
    );
};
