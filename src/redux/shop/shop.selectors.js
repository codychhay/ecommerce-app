import {createSelector} from 'reselect';

export const shopSelector = state =>  state.shop;

export const collectionsSelector = createSelector(
    [shopSelector],
    (shop) => shop.collections
);

export const collectionSelector = collectionId => 
    createSelector(
        [collectionsSelector],
        collections => collections[collectionId]
    );
