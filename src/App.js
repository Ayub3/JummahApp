import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import SignUp from './CognitoComponents/SignUp.js';
import Login from './CognitoComponents/Login.js';

function App() {
    return (
        <div className="app">
            {/* <SignUp /> */}
            <Login />
        </div>
    );
}

export default App;
