import {createSelector} from 'reselect';

// input selector
export const selectCart = state => state.cart;

// output selector-- use input selector + createSelector, we'll have memoized selector
export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, item) => accumulator + (item.quantity * item.price), 0)
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);
