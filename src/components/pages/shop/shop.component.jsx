import React from 'react';
import {Route} from 'react-router';

import CollectionOverview from '../../collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';

import './shop.styles.scss'


const Shop =  ({match}) => (
    <div className='shop-page'>
        <Route exact path={match.path} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)

export default Shop;