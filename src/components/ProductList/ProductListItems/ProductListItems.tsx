import React from 'react';
import { RootState } from '../../../redux/store';
import { ProductListItem } from '../ProductListItem/ProductListItem';
import { StyledProductListItems } from './styles';
import { useSelector } from 'react-redux';

export const ProductListItems = () => {
    const products = useSelector((state: RootState) => state.products);
    return (
        <StyledProductListItems>
            {products.map((product) => (
                <ProductListItem key={product.id} product={product} />
            ))}
        </StyledProductListItems>
    );
};
