import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import productsReducer from './slices/products/slice';
import cartReducer from './slices/cart/slice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
