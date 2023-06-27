import { createSelector } from 'reselect';

export const getIdProduct = (state) => {
    return state.products.id;
};

export const getProduct = (state) => {
    return state.carts.cartItems;
};

export const remainingIdProduct = createSelector(getIdProduct, (id) => {
    return id;
});
