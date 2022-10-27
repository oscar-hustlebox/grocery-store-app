import React from 'react';
import { ProductState } from '../../../redux/slices/products/slice';
import { StyledProductCartItem, StyledPrice, StyledItemName, FlexRow } from './styles';

export const ProductCartItem = ({ item }: { item: ProductState }) => {
    // Create our number formatter.
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    console.log(formatter.format(2500)); /* $2,500.00 */
    return (
        <StyledProductCartItem>
            <StyledItemName>{item.name}</StyledItemName>
            <FlexRow>
                <p>Qty:&nbsp;</p>
                <p>{item.quantity}</p>
            </FlexRow>
            <StyledPrice>{formatter.format(item.price)}</StyledPrice>
        </StyledProductCartItem>
    );
};
