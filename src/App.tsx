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
          <Header name="SocialCard" />
        </header>
        <SocialCard 
          username="micahbales" 
          avatarImgUrl="https://pbs.twimg.com/profile_images/523109819654230017/RlmyhCrv_400x400.png" 
        />
      </div>
    );
  }
}

export default App;
