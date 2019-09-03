import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './common/components/Header/Header';
import Footer from './common/components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <Sidebar/>
      <MainContent/>
      <Footer/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
