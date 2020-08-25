import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fb, googleProvider } from './firebase'

import Navigation from './components/Navigation'
import Test from './components/Test'
import Home from './components/Home'


function App() {

  const [actualUser, setActualUser] = useState(false);

  //observador de usuario actual
  useEffect(() => { authWatcher() }, []);
  const authWatcher = () => {
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        setActualUser(user);
      } else {
        setActualUser(false);
        console.log('No hay un usuario registrado.');
      };
    })
  }


  const googleSignin = () => {

    const provider = googleProvider;

    fb.auth().signInWithPopup(provider)
      .then(result => {
        const token = result.credential.accessToken;
        const user = result.user;
        console.log(token, user)

      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;

        // The email of the user's account used.
        const email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        const credential = error.credential;

        console.log(errorCode, errorMessage, email, credential);
      });
  };

  const logout = () => {
    fb.auth().signOut()
      .then(() => {
        console.log('logout')
      });
  };

  return (
    <Router>

      <Navigation logout={logout} />
      {/*<Home googleClick={handleGoogleClick} />*/}

      <div className="container p-4">
        <Route path="/" exact component={() => <Home googleSignin={googleSignin} actualUser={actualUser} />} />
        <Route path="/edit/:id" component={Test} />
        <Route path="/create" component={Test} />
        <Route path="/user" component={Test} />
      </div>
    </Router>

  );
}

export default App;
