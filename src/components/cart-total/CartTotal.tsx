import { ProductsState } from '../../redux/slices/products/slice';

type LineItemsProps = {
    items: ProductsState;
};

export const CartTotal = ({ items }: LineItemsProps) => {
    console.log('items', items);
    return (
        <div>
            <h2>Total</h2>
            <p>insert total here</p>
        </div>
    );
};
