import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Route} from 'react-router-dom';

import Header from './common/components/Header/Header';
// import Footer from './common/components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import Banner from './components/Banner/Banner';
import Post from './components/Post/Post/Post';

import './assets/styles/mainPage.css';
import './assets/styles/paperEffect.css';

const App: React.FC = () => {
  return (
    <div className="mainContainer">
      <div className="paper">
      <div className="App effect2 box">
        <Header/>
        <Sidebar/>
        <Banner/>
        <Route path="/" exact render={() => <MainContent/>} />
        <Route path="/post/:id" render={() => <Post />} />
        {/* <MainContent/> */}
      </div>
      </div>
    </div>
  );
}

export default App;
