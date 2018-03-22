import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: false };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDh_jOFBfNmRlIHEutC342YdgTXdsqPFls',
      authDomain: 'authentication-782b4.firebaseapp.com',
      databaseURL: 'https://authentication-782b4.firebaseio.com',
      projectId: 'authentication-782b4',
      storageBucket: 'authentication-782b4.appspot.com',
      messagingSenderId: '724104559059'
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    if (this.state.loggedIn) {
      return (
        <Button>
          Log Out
        </Button>
      );
    }

    return <LoginForm />;
  }


  render() {
    return (
      <View>
        <Header HeaderText='Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
