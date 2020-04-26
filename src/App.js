import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Features/Login/View/Page/Login';
import Register from './Features/Login/View/Page/Register';
import Forgotpassword from './Features/Login/View/Page/Forgotpassword';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Login></Login>
        <Register></Register>
        <Forgotpassword></Forgotpassword>
      </header>
      
    </div>
  );
}

export default App;
