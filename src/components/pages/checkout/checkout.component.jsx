import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import CheckOutItem from '../../checkout-item/checkout-item.component';

import {selectCartItems, selectCartTotal} from '../../../redux/cart/cart.selectors.js';

import './checkout.styles.scss';

const CheckOutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => <CheckOutItem key={cartItem.id} cartItem={cartItem} />)
        }
        <div className='total'>
            <span>TOTAL: ${cartTotal}</span>
        </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartTotal: selectCartTotal
})

export default connect(mapStateToProps)(CheckOutPage);