import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { fb, googleProvider, facebookProvider } from './firebase'

import Navigation from './components/Navigation'
import Test from './components/Test'
import Home from './components/Home'
import ErrorModal from './components/ErrorModal'

function App() {

  const [actualUser, setActualUser] = useState(false);
  const [showFacebookModal, setShowFacebookModal] = useState([false, ""]);
  useEffect(() => { console.log(showFacebookModal) }, [showFacebookModal]);

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
    });
  };


  //google signin
  const googleSignin = () => {

    fb.auth().signInWithPopup(googleProvider)
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

  //facebook signin
  const facebookSignin = () => {

    fb.auth().signInWithPopup(facebookProvider)
      .then(function (result) {
        //const token = result.credential.accessToken;
        const user = result.user;
        console.log(user)
      })
      .catch(function (error) {
        const errorCode = error.code;
        const email = error.email;
        console.log(errorCode, email);
        if (errorCode === 'auth/account-exists-with-different-credential') {
          console.log('Inicia sesión con google');
          setShowFacebookModal([true, email]);
          /*toast(`Inicia sesion con google.\n${error.email} se ha registrado con google.`, {
            type: "info",
            autoClose: 5000
          });*/
        }

      });
  }

  //logout
  const logout = () => {
    fb.auth().signOut()
      .then(() => {
        console.log('logout')
      });
  };

  return (
    <Router>
      <Navigation logout={logout} actualUser={actualUser} />

      <div className="container p-4">
        <Route path="/" exact component={() => <Home googleSignin={googleSignin} facebookSignin={facebookSignin} actualUser={actualUser} />} />
        <Route path="/edit/:id" component={Test} />
        <Route path="/create" component={Test} />
        <Route path="/user" component={Test} />
      </div>

      <ErrorModal show={showFacebookModal} googleSignin={googleSignin} />
    </Router>

  );
}

export default App;
