import { LineItems } from '../line-items/LineItems';
import { StyledWrapper } from './styles';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';
import { CartTotal } from '../cart-total/CartTotal';

export const Cart = () => {
    const items = useSelector((state: RootState) => state.cart);
    return (
        <StyledWrapper>
            <h1>Cart</h1>
            <LineItems items={items} />
            <CartTotal items={items} />
        </StyledWrapper>
    );
};
