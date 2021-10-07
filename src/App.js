import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.components';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginInAndOut from './pages/login-in-and-login-up/login-in-and-login-up.component';
import { auth } from './firebase/firebase.utils';


class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser:null,
    }
  }

  unSubscribeFromGoogle = null;

  componentDidMount(){
    console.log('fuck');
    this.unSubscribeFromGoogle = auth.onAuthStateChanged( (user) => {
      this.setState({currentUser:user})

    })
  }
  componentWillUnmount(){
    this.unSubscribeFromGoogle();
  }

  render(){
    return (
      <div >
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
        <Route exact path = '/' component={Homepage} />
        <Route path = '/shop' component={ShopPage}  />
        <Route path = '/loginin' component={LoginInAndOut} />
        </Switch>
      </div>
    );
  }

}

export default App;
