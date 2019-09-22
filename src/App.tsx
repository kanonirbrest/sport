// import React from 'react';
// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import {Route} from 'react-router-dom';

import Header from './common/components/Header/Header';
// import Footer from './common/components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import Sidebar from './components/Sidebar/Sidebar';
import Banner from './components/Banner/Banner';
import Post from './components/Post/Post/Post';
import AddArticle from './components/AddArticle/AddArticle';

import './assets/styles/mainPage.css';
import './assets/styles/paperEffect.css';

import loupsImg from './assets/images/loups.jpg'
import {url} from 'inspector';

const Caanvas = React.forwardRef((props, ref: any) => (
  <canvas id="pageflip-canvas" ref={ref}></canvas>
));

class App extends Component {
  canvasRef: any;

  constructor(props: any) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.canvasRef);
    console.log(loupsImg, 'img');
  }

  render() {
    return (
      // <div className="wrapper" style={{ cursor: 'url(./assets/svg/loop.png)' }}>
      <div className="wrapper">
        <div className="mainContainer">
          <div className="paper">
            <Caanvas ref={this.canvasRef}/>
            <div className="App effect2 box" id="book">
              <Header />
              <Sidebar />
              {/* <Banner /> */}
              <Route path="/" exact render={() => <MainContent canvas={this.canvasRef} />} />
              <Route path="/post/:id" render={() => <Post />} />
              <Route path="/addArticle" render={() => <AddArticle />} />
              {/* <MainContent/> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
