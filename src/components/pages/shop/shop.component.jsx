import React from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';


import CollectionPreview from "../../collection-preview/collection-preview.component"
import {collectionsSelector} from '../../../redux/shop/shop.selectors.js';

import './shop.styles.scss'


const Shop =  ({collections}) => {
     // Collections of "CollectionPreview"
    // CollectionPreview = collections of "CollectionItem"
    return(
        <div className='shop-page'>
            {
                collections.map(collectionCategory => (
                <CollectionPreview key={collectionCategory.id} {...collectionCategory} />
                ))
            }
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    collections: collectionsSelector
})

export default connect(mapStateToProps)(Shop);