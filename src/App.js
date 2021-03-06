import React, { Component } from 'react';
import './App.css';
import Search from './Search.js';
import './Search.css';
import Footer from './Footer.js';
import './Footer.css';
import logo from './assets/coronaNews.png';
import news from './assets/news.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad } from '@fortawesome/free-solid-svg-icons'
require('dotenv').config()


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img className="appLogo" src={logo} alt="Covid" />


          <div className="title">
            <h1>COVID NEWS</h1>
            <h4>
              <a> Tudo que você precisa saber sobre o coronavirus </a> 

              <p><FontAwesomeIcon icon={faGamepad} aria-hidden="true" />
              &nbsp;Clique <a href="https://github.com/leandronowras/isolate-SO"><b>aqui</b> </a>
              para baixar um incrivel jogo e se divertir durante o isolamento 
              </p>
            </h4>
          </div>

          <a class='dashboard' href="https://brcovid-dashboard.herokuapp.com/">
            <img src={news} className="scriptLogo" />
          </a>
        </div>
        <Search default="" />
        <Footer />
      </div>
    );
  }
}

export default App;
