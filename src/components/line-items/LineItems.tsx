import { ProductsState } from '../../redux/slices/products/slice';

type LineItemsProps = {
    items: ProductsState;
};

export const LineItems = ({ items }: LineItemsProps) => {
    return (
        <>
            {items.map((item) => (
                <div key={item.id}>
                    <h5>{item.name}</h5>
                    <p>{item.price}</p>
                    <p>{item.quantity}</p>
                </div>
            ))}
        </>
    );
};
