import React, { Component } from 'react'
import './App.css'

import MapBackground from '../assets/mapBackground.png'
import Iceland from '../assets/iceland.png'
import UK from '../assets/uk.png'
import France from '../assets/france.png'
import PNW from '../assets/pnw.png'
import SEAsia from '../assets/seAsia.png'

class HeaderBar extends Component {
  render() {
    return (
      <header>
        <h1 id='title'>World of Wander</h1>
      </header>
    )
  }
}

class CountryButton extends Component {
  render() {
    return (
      <button id={this.props.id} class='CountryButton' style={{ backgroundImage: "url(" + this.props.image + ")" }}>
        <div>{this.props.title}</div>
      </button>
    )
  }
}

class Map extends Component {
  render() {
    return (
      <div id='map' style={{ backgroundImage: "url(" + MapBackground + ")" }}>
        <CountryButton id='iceland' image={Iceland} title='Iceland' />
        <CountryButton id='uk' image={UK} title='U.K.' />
        <CountryButton id='pnw' image={PNW} title='Pacific Northwest' />
        <CountryButton id='france' image={France} title='France' />
        <CountryButton id='seAsia' image={SEAsia} title='S.E. Asia' />
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <Map />
      </div>
    );
  }
}

export default App;
