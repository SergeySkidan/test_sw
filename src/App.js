import React, { Component } from 'react';
import banner from './images/banner.png';
import Logo from './images/Logo.png';
import menu from './images/menu.png';
import to_order from './images/to_order.png';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

                <header className="header">
                       <img src={menu} className="line_block" alt="menu" />
                       <img src={Logo} className="line_block" alt="Logo" />
                       <img src={to_order} className="line_block" alt="to_order" />
                </header>


             <main>

                 <img src={banner} className="banner" alt="banner" />

            </main>

            <footer>
                <div>
                    dfsfsdfd
                </div>

            </footer>




      </div>
    );
  }
}

export default App;
