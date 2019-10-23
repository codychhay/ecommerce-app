import React from 'react';
import {connect} from 'react-redux';

import {toggleCartHidden} from '../../redux/cart/cart.actions'

import './cart-icon.styles.scss'

import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg"

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon'>
        <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
        <span className='item-count'>{itemCount}</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

const mapStateToProps = state => ({
    itemCount: state.cart.cartItems.reduce((accumulator, item) => accumulator + item.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);