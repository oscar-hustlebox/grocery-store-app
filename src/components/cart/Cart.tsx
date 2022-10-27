import { LineItems } from '../line-items/LineItems';
import { StyledWrapper } from './styles';
import { useSelector, useDispatch } from 'react-redux';

import { RootState } from '../../redux/store';
import { CartTotal } from '../cart-total/CartTotal';
import { clearCart } from '../../redux/slices/cart/slice';

export const Cart = () => {
    const items = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();
    return (
        <StyledWrapper>
            <div>
                <h1>Cart</h1>
                <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
            </div>
            <LineItems items={items} />
            <CartTotal items={items} />
        </StyledWrapper>
    );
};
