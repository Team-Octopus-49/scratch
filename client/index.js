import React from 'react';
import { render } from 'react-dom';
import '../client/style/style.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";
import App from './App.jsx';
import SignIn from './components/signin.jsx'
import SignUp from './components/signup.jsx'

render( 
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
  </Routes>
  </Router>,
    document.getElementById('root')
    );


