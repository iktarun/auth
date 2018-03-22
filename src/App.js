import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDh_jOFBfNmRlIHEutC342YdgTXdsqPFls',
      authDomain: 'authentication-782b4.firebaseapp.com',
      databaseURL: 'https://authentication-782b4.firebaseio.com',
      projectId: 'authentication-782b4',
      storageBucket: 'authentication-782b4.appspot.com',
      messagingSenderId: '724104559059'
    });
  }

  render() {
    return (
      <View>
        <Header HeaderText='Authentication' />
        <LoginForm />
      </View>
    );
  }
}

export default App;
