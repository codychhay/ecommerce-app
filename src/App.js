import React from 'react'
import {Route, Switch, Redirect} from "react-router-dom"
import {connect} from 'react-redux';

import HomePage from './components/pages/homepage/homepage.component'
import Header from './components/header/header.component.jsx'
import Shop from './components/pages/shop/shop.component'
import Contact from './components/pages/contact/contact.component'
import SignInAndSignUp from './components/pages/signin-and-signup/signin-and-signup.component'
import {setCurrentUser} from './redux/user/user.actions';


import './App.css';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
    // Design/Impl decision note
    // -- Storing logged-in user in App cuz here we can pass it to other components that needs the info

    unsubscribeFromAuth = null;

    componentDidMount() {
        // coming from app connected component
        const {setCurrentUser} = this.props;
        
        // Subscribe to state changes
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    })
                });
            } else {
                // If userAuth is null, meaning user signed out. So we want to set currentUser 
                // to null.
                setCurrentUser(userAuth);
            }
        });
    }

    componentWillUnmount() {
        // close subscription to avoid memory leak
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={Shop} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/signin" render={() => this.props.currentUser ? 
                        (<Redirect to='/'/>) : 
                        (<SignInAndSignUp />)} 
                    />
                </Switch>
            </div>
        );
    }

}

const mapStateToProps = state => ({
    currentUser : state.user.currentUser
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
