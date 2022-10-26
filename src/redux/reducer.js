const initialState = {
    products: [
        { id: 0, name: 'grapes', price: 5 },
        { id: 1, name: 'apples', price: 3 },
        { id: 2, name: 'peaches', price: 7 },
    ],
    cart: [],
};

// Use the initialState as a default value
// eslint-disable-next-line @typescript-eslint/default-param-last
export default function appReducer(state = initialState, action) {
    // The reducer normally looks at the action type field to decide what happens
    switch (action.type) {
        // Do something here based on the different types of actions
        default:
            // If this reducer doesn't recognize the action type, or doesn't
            // care about this specific action, return the existing state unchanged
            return state;
    }
}
