import * as React from 'react';
import './App.css';
import Header from './Header';
import SocialCard from './SocialCard';

import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header/>
        </header>
        <SocialCard />
      </div>
    );
  }
}

export default App;
