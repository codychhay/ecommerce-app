import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"

import HomePage from './components/pages/homepage/homepage.component'
import Header from './components/header/header.component.jsx'
import Shop from './components/pages/shop/shop.component'
import Contact from './components/pages/contact/contact.component'
import SignInAndSignUp from './components/pages/signin-and-signup/signin-and-signup.component'

import './App.css';

import {auth, createUserProfileDocument} from './firebase/firebase.utils'

class App extends React.Component {
    // Design/Impl decision note
    // -- Storing logged-in user in App cuz here we can pass it to other components that needs the info

    unsubscribeFromAuth = null;

    constructor() {
        super();
        this.state= {
            currentUser: null
        }
    }

    componentDidMount() {
        // Subscribe to state changes
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if(userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    });
                });
            } else {
                // If userAuth is null, meaning user signed out. So we want to set currentUser 
                // to null.
                this.setState({currentUser: userAuth});
            }
        });
    }

    componentWillUnmount() {
        // close subscription to avoid memory leak
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header currentUser={this.state.currentUser} />
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/shop" component={Shop} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/signin" component={SignInAndSignUp} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
