import { calculateCartTotal } from './utils';
import { ProductsState } from './redux/slices/products/slice';

describe('calculateCartTotal()', () => {
    test('Should be $12 - 1x grapes, 0x apples 1x peaches', () => {
        const mockCartItems: ProductsState = [
            {
                id: 1,
                name: 'grapes',
                price: 5,
                quantity: 1,
            },
            {
                id: 2,
                name: 'apples',
                price: 3,
                quantity: 0,
            },
            {
                id: 3,
                name: 'peaches',
                price: 7,
                quantity: 1,
            },
        ];
        const cartTotal = calculateCartTotal(mockCartItems);
        expect(cartTotal).toEqual(12);
    });
    test('Should be $15 - 1x grapes, 1x apples 1x peaches', () => {
        const mockCartItems: ProductsState = [
            {
                id: 1,
                name: 'grapes',
                price: 5,
                quantity: 1,
            },
            {
                id: 2,
                name: 'apples',
                price: 3,
                quantity: 1,
            },
            {
                id: 3,
                name: 'peaches',
                price: 7,
                quantity: 1,
            },
        ];
        const cartTotal = calculateCartTotal(mockCartItems);
        expect(cartTotal).toEqual(15);
    });
    test('Should be $16.8 - 1x grapes, 1x apples 1x peaches', () => {
        const mockCartItems: ProductsState = [
            {
                id: 1,
                name: 'grapes',
                price: 5,
                quantity: 2,
            },
            {
                id: 2,
                name: 'apples',
                price: 3,
                quantity: 2,
            },
            {
                id: 3,
                name: 'peaches',
                price: 7,
                quantity: 1,
            },
        ];
        const cartTotal = calculateCartTotal(mockCartItems);
        expect(cartTotal).toEqual(16.8);
    });
    test('Should be $36 - 1x grapes, 1x apples 1x peaches', () => {
        const mockCartItems: ProductsState = [
            {
                id: 1,
                name: 'grapes',
                price: 5,
                quantity: 3,
            },
            {
                id: 2,
                name: 'apples',
                price: 3,
                quantity: 5,
            },
            {
                id: 3,
                name: 'peaches',
                price: 7,
                quantity: 2,
            },
        ];
        const cartTotal = calculateCartTotal(mockCartItems);
        expect(cartTotal).toEqual(36);
    });
    test('Should be $85.8 - 1x grapes, 1x apples 1x peaches', () => {
        const mockCartItems: ProductsState = [
            {
                id: 1,
                name: 'grapes',
                price: 5,
                quantity: 7,
            },
            {
                id: 2,
                name: 'apples',
                price: 3,
                quantity: 7,
            },
            {
                id: 3,
                name: 'peaches',
                price: 7,
                quantity: 7,
            },
        ];
        const cartTotal = calculateCartTotal(mockCartItems);
        expect(cartTotal).toEqual(85.8);
    });
});
