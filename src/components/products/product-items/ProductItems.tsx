import { ProductItem } from '../product-item/ProductItem';
import { StyledProductItems } from './styles';

const PRODUCTS = [
    {
        id: 'p1',
        name: 'Apple',
    },
    {
        id: 'p2',
        name: 'Grape',
    },
    {
        id: 'p3',
        name: 'Peach',
    },
];

export const ProductItems = () => {
    return (
        <StyledProductItems>
            {PRODUCTS.map((product) => (
                <ProductItem key={product.id} product={product} />
            ))}
        </StyledProductItems>
    );
};
