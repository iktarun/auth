import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

  state = { loggedIn: null };

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

    switch (this.state.loggedIn) {
      case true:
        // return <Button onPress={() => firebase.auth().signOut()}> Log Out </Button>;
        // Temopray code below, becase aboce code was not working
        return (<TouchableOpacity onPress={() => firebase.auth().signOut()}>
          <Text style={styles.textStyle}>
            Sign Out
          </Text>
        </TouchableOpacity>
      );
      case false:
        return <LoginForm />;
      default:
      return <Spinner size="large" />;

    }
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

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export default App;
