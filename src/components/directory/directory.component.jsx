import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {directorySectionsSelector} from '../../redux/directory/directory.selectors.js';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, imageUrl, title, size}) =>
                <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
            )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: directorySectionsSelector
});

export default connect(mapStateToProps)(Directory);