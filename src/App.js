import React from 'react';
import {Switch, Route,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import Header from './components/header/header.component.jsx';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import {setCurrentUser} from './redux/user/user.actions'

class App extends React.Component{

  unsubscribeFromAuth = null

  componentDidMount(){
    const{setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      //if we're signing in
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        //checking if snapshot has changed, probably won't because we won't ever update user in our code
        //momment it instantiates it will send us a snapshot representing the data in our db
        userRef.onSnapshot(snapShot => {
          //.data gives us the properties 
          //creates new object that has id and properties
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
        });
      }
      //if we're signing out, this sets currentUser to null
      else{
        setCurrentUser(userAuth);
      }
    }) 
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path = '/' component = {HomePage}/>
          <Route path = '/shop' component = {ShopPage}/>
          {/* render determines what comopnent to return */}
          {/*this makes it so people can't access sign in/up page after they log in */}
          <Route 
            exact 
            path = '/signIn' 
            render = {() => 
              this.props.currentUser ? (
                <Redirect to = '/' />
              ): (
                <SignInAndSignUpPage/>
              )
              }
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
})

//return setCurrentUser which goes to a function that gets the user object then calls dispatch
  //dispatch is a way to let redux know that whatevery you're passing is an action object that gets passed to every reducer
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

//doesn't do anything with the component itself (user) outside of setting it so we can set it null as first argument,
//2nd argument is mapDispatchToProps
export default connect(
  mapStateToProps, //gives access to this.state.currentUser
   mapDispatchToProps
   )(App);
