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

function HeaderBar() {
  return (
    <header>
      <h1 id='title'>World of Wander</h1>
    </header>
  )
}

function CountryButton(props) {
  return (
    <button id={props.id} class='CountryButton' style={{ backgroundImage: "url(" + props.image + ")" }}>
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

function DesktopMap() {
  return (
    <div id='desktopMap'>
      <CountryButton id='iceland' image={Iceland} title='Iceland' />
      <CountryButton id='uk' image={UK} title='U.K.' />
      <CountryButton id='pnw' image={PNW} title='Pacific Northwest' />
      <CountryButton id='france' image={France} title='France' />
      <CountryButton id='seAsia' image={SEAsia} title='S.E. Asia' />
    </div>
  )
}

class Map extends Component {
  render() {
    return (
      <div id='map' style={{ backgroundImage: "url(" + MapBackground + ")" }}>
        <DesktopMap />
        <MobileMap />
      </div >
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

function LatestPostsRow(props) {
  return (
    <a class='latestPostsRow' href='post'>
      <div class='latestPostsMonth'>{props.month}</div>
      <div class='latestPostsDate'>{props.date}</div>
      <div class='latestPostsDescription'>{props.description}</div>
    </a>
  )
}

function LatestPosts() {
  return (
    <div>
      <h2 class='header2'>LATEST POSTS</h2>
      <div class='flexCenter'>
        <div id='latestPostsContainer'>
          <LatestPostsRow month='Sept' date='19' description='Late summer camping in Bend' />
          <LatestPostsRow month='Aug' date='1' description='We survived Tour de Mt Blanc' />
          <div class='flexCenter'>
            <a class='header2' id='latestPostsReadMore' href='readMore'>
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
      <iframe src="https://snapwidget.com/embed/602774" class="snapwidget-widget" allowtransparency="true" frameborder="0" scrolling="no" style={{ border: 'none', overflow: 'hidden', width: '80%', height: '80px', maxWidth: '300px' }}></iframe>
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
