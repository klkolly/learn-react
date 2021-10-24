import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.components';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import LoginInAndOut from './pages/login-in-and-login-up/login-in-and-login-up.component';
import { auth, storeUserToFirestore} from './firebase/firebase.utils';
import  { onSnapshot,} from "firebase/firestore";



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser:null,
    };
  }

  unSubscribeFromGoogle = null;

  componentDidMount(){
    this.unSubscribeFromGoogle = auth.onAuthStateChanged( async (userAuth) => {

      if(userAuth){
        
        const userRef = await storeUserToFirestore(userAuth);
        
        onSnapshot(userRef, (snapShot) =>{
          // console.log(snapShot.data());
          this.setState({
            currentUser:{id:snapShot.id,
                         ...snapShot.data()
                        }
          });
        });
      }
      else{
        this.setState({ currentUser: userAuth });
        console.log('fuck');
      }
    });
  };

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
