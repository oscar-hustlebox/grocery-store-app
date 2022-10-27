import { ProductsState } from '../../redux/slices/products/slice';
import { calculateCartTotal } from '../cart/utils';

type LineItemsProps = {
    items: ProductsState;
};

export const CartTotal = ({ items }: LineItemsProps) => {
    const total = calculateCartTotal(items);

    return (
        <div>
            <h2>Total</h2>
            <p>{total}</p>
        </div>
    );
};
