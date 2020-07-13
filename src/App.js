import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{

  constructor(){
    super();
    
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      //if we're signing in
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        //checking if snapshot has changed, probably won't because we won't ever update user in our code
        //momment it instantiates it will send us a snapshot representing the data in our db
        userRef.onSnapshot(snapShot => {
          //.data gives us the properties 
          //creates new object that has id and properties
          this.setState({
            currentUser:{
              id: snapShot.id,
              ...snapShot.data()
            }
          }, 
            () => {
              console.log(this.state);
            }
          )
        });
        console.log(this.state);
      }
      //if we're signing out, this sets currentUser to null
      else{
        this.setState({currentUser: userAuth});
      }
    }) 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser = {this.state.currentUser}/>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route exact path = '/shop' component = {ShopPage}/>
          <Route exact path = '/signIn' component = {SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
