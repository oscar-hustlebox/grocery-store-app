import React from 'react';
import { ProductsState } from '../../../redux/slices/products/slice';
import { ProductCartItem } from '../ProductCartItem/ProductCartItem';

type ProductCartItemsProps = {
    items: ProductsState;
};

export const ProductCartItems = ({ items }: ProductCartItemsProps) => {
    return (
        <>
            {items.map((item) => (
                <ProductCartItem key={item.id} item={item} />
            ))}
        </>
    );
};
