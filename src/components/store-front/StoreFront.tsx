import { Cart } from '../cart/Cart';
import { Products } from '../products/Products';
import { StyledWrapper } from './styles';

export const StoreFront = () => {
    return (
        <StyledWrapper>
            <Cart />
            <Products />
        </StyledWrapper>
    );
};
