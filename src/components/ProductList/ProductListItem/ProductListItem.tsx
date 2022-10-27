import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/slices/cart/slice';

import { StyledProductListItem, StyledFlexWrapper } from './styles';

type ProductListItemProps = { product: { id: number; name: string; price: number } };

export const ProductListItem = ({ product }: ProductListItemProps) => {
    const dispatch = useDispatch();
    return (
        <StyledProductListItem>
            <StyledFlexWrapper>
                <h5>Product Item:&nbsp;</h5>
                <p>{product.name}</p>
            </StyledFlexWrapper>
            <h2>${product.price}</h2>
            <div>
                <button onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
                <button onClick={() => dispatch(addToCart(product.id))}>Add</button>
            </div>
        </StyledProductListItem>
    );
};
