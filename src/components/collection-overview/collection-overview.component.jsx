import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CollectionPreview from '../collection-preview/collection-preview.component';
import {collectionsSelector} from '../../redux/shop/shop.selectors';

import './collection-overview.styles.scss';

// Collections of "CollectionPreview"
// CollectionPreview = collections of "CollectionItem"
const CollectionOverview = ({collections}) => (
    <div className='collections-overview'>
        {
            collections.map(collectionCategory => (
            <CollectionPreview key={collectionCategory.id} {...collectionCategory} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: collectionsSelector
})

export default connect(mapStateToProps)(CollectionOverview);