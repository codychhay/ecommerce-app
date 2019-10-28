import {createSelector} from 'reselect';

export const shopSelector = state =>  state.shop;

export const collectionsSelector = createSelector(
    [shopSelector],
    (shop) => shop.collections
);
