import { StyledProductItem, StyledFlexWrapper } from './styles';

type ProductItemProps = { product: { id: number; name: string; price: number } };
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/slices/cart/slice';

export const ProductItem = ({ product }: ProductItemProps) => {
    const dispatch = useDispatch();
    return (
        <StyledProductItem>
            <StyledFlexWrapper>
                <h5>Product Item:&nbsp;</h5>
                <p>{product.name}</p>
            </StyledFlexWrapper>
            <h2>${product.price}</h2>
            <button onClick={() => dispatch(addToCart(product.id))}>Add to Cart</button>
        </StyledProductItem>
    );
};
