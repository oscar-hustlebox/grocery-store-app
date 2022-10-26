import { StyledProductItem, StyledFlexWrapper } from './styles';

type ProductItemProps = { product: { id: number; name: string; price: number } };

export const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <StyledProductItem>
            <StyledFlexWrapper>
                <h5>Product Item:&nbsp;</h5>
                <p>{product.name}</p>
            </StyledFlexWrapper>
            <h2>${product.price}</h2>
            <button>Add to Cart</button>
        </StyledProductItem>
    );
};
