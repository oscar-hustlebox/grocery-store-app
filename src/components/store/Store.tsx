import { Cart } from '../cart/Cart';
import { Products } from '../products/Products';
import { StyledWrapper } from './styles';

export const Store = () => {
    return (
        <StyledWrapper>
            <Cart />
            <Products />
        </StyledWrapper>
    );
};
