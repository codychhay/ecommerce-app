import React from 'react'

import './collection-preview.styles.scss'

import CollectionItem from '../collection-item/collection-item.component'

const CollectionPreview = ({items , title}) => (
  <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      {
          items.map(item => (
             <CollectionItem key={item.id} {...item} />
          ))
      }
  </div>
);

export default CollectionPreview;