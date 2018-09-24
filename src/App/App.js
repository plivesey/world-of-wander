import React, { Component } from 'react'
import './App.css'
import './Map.css'
import './ComeMeetUs.css'
import './StayUpToDate.css'

import MapBackground from '../assets/mapBackground.png'
import Iceland from '../assets/iceland.png'
import UK from '../assets/uk.png'
import France from '../assets/france.png'
import PNW from '../assets/pnw.png'
import SEAsia from '../assets/seAsia.png'
import StayWithUs from '../assets/stayWithUs.png'
import ComeCaribbean from '../assets/comeCaribbean.png'
import ComeAsia from '../assets/comeAsia.png'

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

class ComeMeetUsLocationRow extends Component {
  render() {
    return (
      <div class='comeMeetUsLocationRow'>
        <a
          class='comeMeetUsLocationRowLeft'
          href={this.props.link} style={{ backgroundImage: "url(" + this.props.image + ")" }}
          target="_blank"
        >
          Search
        </a>
        <div class='comeMeetUsLocationRowRight'>
          <h3>{this.props.title}</h3>
          <p>{this.props.text}</p>
          <a href={this.props.link} target="_blank">Search</a>
        </div>
      </div>
    )
  }
}

class ComeMeetUs extends Component {
  render() {
    return (
      <div id='comeMeetUs'>
        <h2 class='header2'>COME MEET US</h2>
        <div id='comeMeetUsText'>
          We would love for friends and family to join us for parts of our trip! We are extremely flexible, and here are the parts of the world we’re going to next:
        </div>
        <div class='comeMeetUsLocationContainer'>
          <ComeMeetUsLocationRow
            image={ComeAsia}
            title='Southeast Asia'
            text='Based in Vietnam, Oct 2018 - April 2019'
            link='https://www.google.com/flights/#flt=SFO..2018-10-10*.SFO.2018-10-14;c:USD;e:1;sd:0;er:80046474.960554778.244369736.1224226653;t:e'
          />
          <ComeMeetUsLocationRow
            image={ComeCaribbean}
            title='The Caribbean'
            text='British Virgin Islands, April 2019'
            link='https://www.google.com/flights/#flt=SFO..2018-10-10*.SFO.2018-10-14;c:USD;e:1;sd:0;er:140768132.-709389298.222320682.-577553360;t:e'
          />
        </div>
      </div>
    )
  }
}

class StayUpToDate extends Component {
  signUp() {
    const email = 'alicecamilleavery@gmail.com'
    const subject = 'Sign me up for World of Wander Updates'
    const message = 'Just send the email and we\'ll add you! 😀 🎉'
    const mailToLink = 'mailto:' + email + '?subject=' + subject + '&body=' + message

    window.open(mailToLink, 'emailWindow')
  }

  render() {
    return (
      <div id='stayUpToDate' style={{ backgroundImage: "url(" + StayWithUs + ")" }}>
        <h2 class='header2'>STAY UP TO DATE</h2>
        <button onClick={() => { this.signUp() }}>Get Emails From Us</button>
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
        <ComeMeetUs />
        <StayUpToDate />
      </div>
    );
  }
}

export default App;
