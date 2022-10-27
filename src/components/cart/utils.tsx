import { initialState, ProductsState, ProductState } from '../../redux/slices/products/slice';

export const calculateGrapesTotal = (items: ProductsState) => {
    // Buy one bag of grapes and get another bag of grapes for free
    /* Calculating the total price of grapes. */
    const grapesTotal = items.reduce((acc: number, curr: ProductState) => {
        if (curr.quantity) {
            const total = curr.price * curr.quantity;
            /* Calculating the number of free bags of grapes. */
            const freeBags = Math.floor(curr.quantity / 2);
            /* Calculating the total price of grapes. */
            return acc + total - freeBags * curr.price;
        }
        return acc;
    }, 0);
    return grapesTotal;
};

export const calculateApplesTotal = (item: ProductState) => {
    /* Checking if the apple exists and if the quantity is greater than or equal to 2. If it is, it
        will return the price of the apple multiplied by the quantity of the apple multiplied by
        0.8. */
    if (item && item.quantity >= 2) {
        return item.price * item.quantity * 0.8; // 20% off
    }
    return item ? item.price * item.quantity : 0;
};

/**
 * If there is a peaches item, return the price times the quantity, otherwise return 0.
 * @returns The price of the peaches multiplied by the quantity of peaches.
 */
export const calculatePeachesTotal = (item: ProductState) => {
    return item ? item.price * item.quantity : 0;
};

export const calculateCartTotal = (items: ProductsState) => {
    const grapes = items.filter((item) => item.name === 'grapes');

    const apples = items.find((item) => item.name === 'apples') || initialState[1];

    const peaches = items.find((item) => item.name === 'peaches') || initialState[2];

    return calculateGrapesTotal(grapes) + calculateApplesTotal(apples) + calculatePeachesTotal(peaches);
};
