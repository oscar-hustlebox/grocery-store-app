import { RootState } from '../../../redux/store';
import { ProductItem } from '../product-item/ProductItem';
import { StyledProductItems } from './styles';
import { useSelector } from 'react-redux';

export const ProductItems = () => {
    const products = useSelector((state: RootState) => state.products);
    return (
        <StyledProductItems>
            {products.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </StyledProductItems>
    );
};
