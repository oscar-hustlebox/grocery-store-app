import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../../redux/slices/cart/slice';
import { ProductState } from '../../../redux/slices/products/slice';
import { Button } from '../../shared/styles';
import { StyledProductListItem, StyledHeader, StyledFooter } from './styles';

type ProductListItemProps = { product: ProductState };

export const ProductListItem = ({ product }: ProductListItemProps) => {
    const dispatch = useDispatch();
    return (
        <StyledProductListItem>
            {/* TODO add image of product */}
            <StyledHeader>
                <p>{product.productName}</p>
                <h2>${product.price}</h2>
            </StyledHeader>
            <StyledFooter>
                <Button onClick={() => dispatch(removeFromCart(product.id))}>Remove</Button>
                <Button onClick={() => dispatch(addToCart(product.id))}>Add</Button>
            </StyledFooter>
        </StyledProductListItem>
    );
};
