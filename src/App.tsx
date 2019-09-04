import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/components/Header/Header';
import Footer from './common/components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import Banner from './components/Banner/Banner';

const App: React.FC = () => {
  return (
    <div className="mainContainer">
      <div className="paper">
      <div className="App effect2 box">
        <Header/>
        <Sidebar/>
        <Banner/>
        <MainContent/>
      </div>
      </div>
      {/* <div className="App effect2 box">
        <Header/>
        <Sidebar/>
        <Banner/>
        <MainContent/>
      </div> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
