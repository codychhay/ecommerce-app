import React from 'react'

import CollectionPreview from "../../collection-preview/collection-preview.component"

import './shop.styles.scss'

import SHOP_DATA from "./shop.data"

class Shop extends React.Component {
    constructor() {
        super();
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        // Need to import in collection data for all categories (done)
        // Collections of "CollectionPreview"
        // CollectionPreview = collections of "CollectionItem"

        const { collections } = this.state;

        return(
            <div className='shop-page'>
                {
                    collections.map(collectionCategory => (
                    <CollectionPreview key={collectionCategory.id} {...collectionCategory} />
                    ))
                }
            </div>
        );

    }
}
export default Shop;