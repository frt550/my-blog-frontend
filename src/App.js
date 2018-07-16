import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoginForm  from './components/LoginForm';
// <Commentary userName="frt" createdAt="2017 03 01 14:15:16" content={`hello everyone.hello everyone.hello \n everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.hello everyone.`} />

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
            <LoginForm method="POST" action="http://yii2basic.test/site/login" />
        </div>
      </div>
    );
  }
}

export default App;