import React, { Component } from 'react';
import banner from './images/banner.png';
import Header from './images/Header.png';

import Question from './images/Question.png';
import services from './images/services.png';
import Portfolio from './images/Portfolio.png';
import Contact from './images/Contact.png';
import Footer from './images/Footer.png';
import ReactAnimation from './components/ReactAnimations'
import ImageCarousel from './components/ImageCarousel'


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

      <img src={Header} className="header" alt="Header" />
      <img src={banner} className="banner" alt="banner" />
      <img src={Question} className="question" alt="question" />
      <img src={services} className="services" alt="services" />
      <img src={Portfolio} className="portfolio" alt="Portfolio" />
      <img src={Contact} className="contact" alt="Contact" />
      <img src={Footer} className="footer" alt="Footer" />



<div className={'animation'}>
    <ReactAnimation/>
</div>

<div className={'image_carousel'}>
    <ImageCarousel/>
</div>


      </div>
    );
  }
}

export default App;
