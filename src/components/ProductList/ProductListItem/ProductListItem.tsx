import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/slices/cart/slice';

import { StyledProductListItem, StyledHeader, StyledFooter } from './styles';

type ProductListItemProps = { product: { id: number; name: string; price: number } };

export const ProductListItem = ({ product }: ProductListItemProps) => {
    const dispatch = useDispatch();
    return (
        <StyledProductListItem>
            <StyledHeader>
                <h5>Product:&nbsp;</h5>
                <p>{product.name}</p>
                <h2>${product.price}</h2>
            </StyledHeader>
            <StyledFooter>
                <button onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
                <button onClick={() => dispatch(addToCart(product.id))}>Add</button>
            </StyledFooter>
        </StyledProductListItem>
    );
};
