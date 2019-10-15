import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component'
import CardDropdown from '../cart-dropdown/cart-dropdown.component'

import {ReactComponent as Logo} from "../../assets/crown.svg"

import './header.styles.scss'

import {auth} from '../../firebase/firebase.utils'

// NOTE-- currentUser and hidden are props from redux mapStateToProps
const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/' >
                <Logo className='logo' />
        </Link>
        <div className='options'>
                <Link className='option' to='/shop'>
                        Shop
                </Link>
                <Link className='option' to='/contact'>
                        Contact
                </Link>
                {
                        currentUser ?
                            <div className='option' onClick={ ()=> auth.signOut() }> Sign Out</div> :
                            <Link className='option' to='/signin'>Sign In</Link>
                }
                <CartIcon />
        </div>
        { hidden ? null : <CardDropdown /> }
    </div>
)
// One way-- accept state from redux without destructuring
const mapStateToProps = state => ({
        currentUser: state.user.currentUser,
        hidden: state.cart.hidden
});

// Second way-- destructure nested object and using ES6 same name property
// const mapStateToProps = ({user:{currentUser}, cart: {hidden}}) => ({
//         currentUser,
//         hidden
// });

export default connect(mapStateToProps)(Header);