import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {directorySectionsSelector} from '../../redux/directory/directory.selectors.js';

import MenuItem from '../menu-item/menu-item.component'

import './directory.styles.scss'

const Directory = ({sections}) => (
    <div className='directory-menu'>
        {
            sections.map(({id, ...otherProps}) =>
                <MenuItem key={id} {...otherProps} />
            )
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: directorySectionsSelector
});

export default connect(mapStateToProps)(Directory);