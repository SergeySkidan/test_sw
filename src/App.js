import React, { Component } from 'react';
import banner from './images/banner.png';
import Header from './images/Header.png';

import Question from './images/Question.png';
import About_marketing from './images/About_marketing.png';
import Footer from './images/Footer.png';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

                <header className="header">

                        <img src={Header} className="Header" alt="Header" />

                </header>

             <main className="main">

                     <img src={banner} className="banner" alt="banner" />
                     <img src={Question} className="question" alt="question" />
                     <img src={About_marketing} className="About_marketing" alt="About_marketing" />


            </main>

            <footer className="footer">
                <img src={Footer} className="Footer" alt="Footer" />

            </footer>




      </div>
    );
  }
}

export default App;
