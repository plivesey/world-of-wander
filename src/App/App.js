import React, { Component } from 'react'
import Slider from 'react-slick'

import './App.css'
import './Map.css'
import './ComeMeetUs.css'
import './StayUpToDate.css'
import './LatestPosts.css'

import MapBackground from '../assets/mapBackground.png'
import Iceland from '../assets/iceland.png'
import UK from '../assets/uk.png'
import France from '../assets/france.png'
import PNW from '../assets/pnw.png'
import SEAsia from '../assets/seAsia.png'
import StayWithUs from '../assets/stayWithUs.png'
import ComeCaribbean from '../assets/comeCaribbean.png'
import ComeAsia from '../assets/comeAsia.png'
import IcelandDown from '../assets/icelandDown.png'

function HeaderBar() {
  return (
    <header>
      <h1 id='title'>World of Wander</h1>
    </header>
  )
}

function CountryButton(props) {
  return (
    <button id={props.id} className='CountryButton' style={{ backgroundImage: "url(" + props.image + ")"}} onClick={() => {props.onClick(props.id)}}>
      <div>{props.title}</div>
    </button>
  )
}

function MobileMap() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  }

  return (
    <div id='mobileMap'>
      <Slider {...settings}>
        <CountryButton id='pnw' image={PNW} title='Pacific Northwest' />
        <CountryButton id='iceland' image={Iceland} title='Iceland' />
        <CountryButton id='uk' image={UK} title='U.K.' />
        <CountryButton id='france' image={France} title='France' />
        <CountryButton id='seAsia' image={SEAsia} title='S.E. Asia' />
      </Slider>
    </div>
  )
}

function DesktopMap(props) {
  return (
    <div id='desktopMap'>
      <CountryButton id='iceland' image={Iceland} title='Iceland' onClick={props.onClick} />
      <CountryButton id='uk' image={UK} title='U.K.' onClick={props.onClick} />
      <CountryButton id='pnw' image={PNW} title='Pacific Northwest' onClick={props.onClick} />
      <CountryButton id='france' image={France} title='France' onClick={props.onClick} />
      <CountryButton id='seAsia' image={SEAsia} title='S.E. Asia' onClick={props.onClick} />
    </div>
  )
}

class Map extends Component {
  constructor() {
    super()

    this.onClick = this.onClick.bind(this)
  }

  onClick(countryId) {
    if (!this.state.highlightedCountry) {
      this.setState({'highlightedCountry': countryId})
    } else {
      this.setState({'highlightedCountry': undefined})
    }
  }

  render() {
    return (
      <div id='map' style={{ backgroundImage: "url(" + MapBackground + ")" }}>
        <DesktopMap onClick={this.onClick} />
        <MobileMap onClick={this.onClick} />
      </div >
    )
  }

  componentDidMount() {
    [].forEach.call(document.getElementsByClassName('CountryButton'), (element) => {
      const key = 'original-' + element.id
      this.setState({[key]: {
        top: element.style.top,
        left: element.style.left,
        right: element.style.right,
        bottom: element.style.bottom,
        width: element.style.width,
        height: element.style.height
      }})
    })
  }

  componentDidUpdate() {
    var countryId = this.state.highlightedCountry

    if (countryId) {
      [].forEach.call(document.getElementsByClassName('CountryButton'), (element) => {
        element.style.opacity = 0
      })
  
      const country = document.getElementById(countryId)
      country.style.opacity = 1
      country.style.top = 0
      country.style.left = 0
      country.style.right = 0
      country.style.bottom = 0
      country.style.width = '100%'
      country.style.height = '100%'
    } else {
      [].forEach.call(document.getElementsByClassName('CountryButton'), (element) => {
        const key = 'original-' + element.id
        const originalStyle = this.state[key]
        Object.keys(originalStyle).forEach(function(key) { element.style[key] = originalStyle[key]; });
        element.style.opacity = 1
      })
    }
  }
}

class ComeMeetUsLocationRow extends Component {
  render() {
    return (
      <div className='comeMeetUsLocationRow'>
        <a
          className='comeMeetUsLocationRowLeft'
          href={this.props.link} style={{ backgroundImage: "url(" + this.props.image + ")" }}
          target="_blank"
        >
          Search
        </a>
        <div className='comeMeetUsLocationRowRight'>
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
        <h2 className='header2'>COME MEET US</h2>
        <div id='comeMeetUsText'>
          We would love for friends and family to join us for parts of our trip! We are extremely flexible, and here are the parts of the world we’re going to next:
        </div>
        <div className='comeMeetUsLocationContainer'>
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
        <h2 className='header2'>STAY UP TO DATE</h2>
        <button onClick={() => { this.signUp() }}>Get Emails From Us</button>
      </div>
    )
  }
}

function LatestPostsRow(props) {
  return (
    <a className='latestPostsRow' href='post'>
      <div className='latestPostsMonth'>{props.month}</div>
      <div className='latestPostsDate'>{props.date}</div>
      <div className='latestPostsDescription'>{props.description}</div>
    </a>
  )
}

function LatestPosts() {
  return (
    <div>
      <h2 className='header2'>LATEST POSTS</h2>
      <div className='flexCenter'>
        <div id='latestPostsContainer'>
          <LatestPostsRow month='Sept' date='19' description='Late summer camping in Bend' />
          <LatestPostsRow month='Aug' date='1' description='We survived Tour de Mt Blanc' />
          <div className='flexCenter'>
            <a className='header2' id='latestPostsReadMore' href='readMore'>
              READ MORE...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <div id='footer'>
      <div>
        Follow <a id='instagramLink' href='https://www.instagram.com/acavery/'>@acavery</a> on Instagram to see where we are
      </div>
      <iframe title='Instagram' src="https://snapwidget.com/embed/602774" className="snapwidget-widget" allowtransparency="true" frameBorder="0" scrolling="no" style={{ border: 'none', overflow: 'hidden', width: '80%', height: '80px', maxWidth: '300px' }}></iframe>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBar />
        <Map />
        <ComeMeetUs />
        <StayUpToDate />
        <LatestPosts />
        <Footer />
      </div>
    );
  }
}

export default App;
