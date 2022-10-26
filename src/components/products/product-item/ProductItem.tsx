import { StyledProductItem } from './styles';

type ProductItemProps = { product: { id: string; name: string } };

export const ProductItem = ({ product }: ProductItemProps) => {
    return (
        <StyledProductItem>
            <h5>Product Item:&nbsp;</h5>
            <p>{product.name}</p>
        </StyledProductItem>
    );
};
