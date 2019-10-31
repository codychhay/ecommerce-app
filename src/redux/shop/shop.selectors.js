import {createSelector} from 'reselect';

export const shopSelector = state =>  state.shop;

export const collectionsSelector = createSelector(
    [shopSelector],
    (shop) => shop.collections
);

// we converted our collections from array to object
// so we need this selector to map object to array for .map in CollectionOverview 
export const selectCollectionsForPreview = createSelector(
    [collectionsSelector],
    (collections) => Object.keys(collections).map(key => collections[key])
)

export const collectionSelector = collectionId => 
    createSelector(
        [collectionsSelector],
        collections => collections[collectionId]
    );
