import React, { Component } from 'react';
import banner from './images/banner.png';
import Header from './images/Header.png';

import Question from './images/Question.png';
import services from './images/services.png';
import Portfolio from './images/Portfolio.png';
import Contact from './images/Contact.png';
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
                     <img src={services} className="services" alt="services" />

                     <img src={Contact} className="Contact" alt="Contact" />
            </main>
          <img src={Portfolio} className="Portfolio" alt="Portfolio" />
          <div className={"item-a"}>ff</div>
            <footer className="footer">
                <img src={Footer} className="Footer" alt="Footer" />

            </footer>




      </div>
    );
  }
}

export default App;
