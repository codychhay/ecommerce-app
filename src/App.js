import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"

import HomePage from './components/pages/homepage/homepage.component'
import Header from './components/header/header.component.jsx'
import Shop from './components/pages/shop/shop.component'
import Contact from './components/pages/contact/contact.component'
import SignInAndSignUp from './components/pages/signin-and-signup/signin-and-signup.component'

import './App.css';

function App() {
  return (
      <BrowserRouter>
          <div className="App">
              <Header />
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

export default App;
