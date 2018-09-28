import React, { Component } from 'react'
import Slider from 'react-slick'
import KeyHandler from 'react-key-handler'

import HeaderBar from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import { postsForCountry, allPosts } from '../Posts/Posts.js'

import './App.css'
import './Map.css'
import './ComeMeetUs.css'
import './StayUpToDate.css'
import './LatestPosts.css'

import MapBackground from '../assets/mapBackground.png'
import '../assets/iceland.png'
import '../assets/uk.png'
import '../assets/france.png'
import '../assets/pnw.png'
import '../assets/seAsia.png'
import IcleandMainPhoto from '../assets/icelandMainPhoto.png'
import IcelandDown from '../assets/icelandDown.png'
import UKDown from '../assets/ukDown.png'
import PeruDown from '../assets/peruDown.png'
import PNWDown from '../assets/pnwDown.png'
import FranceDown from '../assets/franceDown.png'
import SEAsiaDown from '../assets/seAsiaDown.png'
import StayWithUs from '../assets/stayWithUs.png'
import ComeCaribbean from '../assets/comeCaribbean.png'
import ComeAsia from '../assets/comeAsia.png'

function CountryButton(props) {
  return (
    <button id={props.id} className='CountryButton' onClick={() => { props.onClick(props.id) }}>
      <div>{props.title}</div>
    </button>
  )
}

function MobileMap(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    mobileFirst: true
  }

  return (
    <div id='mobileMap'>
      <Slider {...settings}>
        <CountryButton id='pnw' title='Washington & Oregon' onClick={props.onClick} />
        <CountryButton id='seAsia' title='S.E. Asia' onClick={props.onClick} />
        <CountryButton id='france' title='France' onClick={props.onClick} />
        <CountryButton id='uk' title='U.K.' onClick={props.onClick} />
        <CountryButton id='iceland' title='Iceland' onClick={props.onClick} />
        <CountryButton id='peru' title='Peru' onClick={props.onClick} />
      </Slider>
    </div>
  )
}

function DesktopMap(props) {
  return (
    <div id='desktopMap'>
      <CountryButton id='pnw' title='Washington & Oregon' onClick={props.onClick} />
      <CountryButton id='seAsia' title='S.E. Asia' onClick={props.onClick} />
      <CountryButton id='france' title='France' onClick={props.onClick} />
      <CountryButton id='uk' title='U.K.' onClick={props.onClick} />
      <CountryButton id='iceland' title='Iceland' onClick={props.onClick} />
      <CountryButton id='peru' title='Peru' onClick={props.onClick} />
    </div>
  )
}

function MapOverlay() {
  return (
    <div id='mapOverlay' />
  )
}

function MapDetailPage(props) {
  const posts = postsForCountry(props.countryId)

  const blogPostRows = posts.slice(0, 3).map((post) => {
    return (  
      <BlogPostRow postId={post.id} month={post.month} date={post.date} description={post.title} />
    )
  })

  return (
    <div id='mapDetailPage'>
      <div id='mapDetailContainer'>
        <div id='detailPageImageContainer'>
          <img id='detailPageImage' alt={props.title} src={props.image} />
        </div>
        <div id='detailPageTextContainer'>
          <h2 className='header2'>{props.title}</h2>
          {blogPostRows}
        </div>
      </div>
      <button id='mapDetailBack' onClick={props.onClick}>
        &lt; Back
      </button>
    </div>
  )
}

class Map extends Component {
  constructor() {
    super()

    this.state = {}

    this.onClick = this.onClick.bind(this)
  }

  detailPageProps() {
    if (this.state.countryId === 'iceland') {
      return {
        id: 'iceland',
        image: IcleandMainPhoto,
        title: 'Iceland'
      }
    } else {
      return {
        id: 'iceland',
        image: IcleandMainPhoto,
        title: 'Iceland'
      }
    }
  }

  onClick(countryId) {
    if (!this.state.highlightedCountry) {
      this.setState({ 'highlightedCountry': countryId })
    } else {
      this.setState({ 'highlightedCountry': undefined })
    }
  }

  render() {
    const detailPageProps = this.detailPageProps()
    return (
      <div id='map' style={{ backgroundImage: "url(" + MapBackground + ")" }}>
        <KeyHandler
          keyValue='Escape'
          onKeyHandle={() => {this.onClick(null)}}
        />
        <DesktopMap onClick={this.onClick} />
        <MobileMap onClick={this.onClick} />
        <MapOverlay />
        <MapDetailPage countryId={detailPageProps.id} image={detailPageProps.image} title={detailPageProps.title} onClick={() => this.onClick(null)} />
      </div >
    )
  }

  componentDidMount() {
    [].forEach.call(document.getElementsByClassName('CountryButton'), (element) => {
      const key = 'original-' + element.id
      this.setState({
        [key]: {
          top: element.style.top,
          left: element.style.left,
          right: element.style.right,
          bottom: element.style.bottom,
          width: element.style.width,
          height: element.style.height,
          backgroundImage: element.style.backgroundImage
        }
      })
    })
  }

  highlightImageForCountryId(id) {
    if (id === 'iceland') {
      return IcelandDown
    } else if (id === 'uk') {
      return UKDown
    } else if (id === 'peru') {
      return PeruDown
    } else if (id === 'pnw') {
      return PNWDown
    } else if (id === 'france') {
      return FranceDown
    } else if (id === 'seAsia') {
      return SEAsiaDown
    } else {
      return ''
    }
  }

  componentDidUpdate() {
    const countryId = this.state.highlightedCountry

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
      country.style.backgroundImage = 'url(' + this.highlightImageForCountryId(countryId) + ')'
      country.children[0].style.opacity = 0

      const overlay = document.getElementById('mapOverlay')
      overlay.style.opacity = 0.7

      const detailPage = document.getElementById('mapDetailPage')
      detailPage.style.top = '0%';
    } else {
      [].forEach.call(document.getElementsByClassName('CountryButton'), (element) => {
        const key = 'original-' + element.id
        const originalStyle = this.state[key]
        Object.keys(originalStyle).forEach(function (key) { element.style[key] = originalStyle[key]; });
        element.style.opacity = 1
        element.children[0].style.opacity = 1
      })

      const overlay = document.getElementById('mapOverlay')
      overlay.style.opacity = 0

      const detailPage = document.getElementById('mapDetailPage')
      detailPage.style.top = '100%';
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

function BlogPostRow(props) {
  return (
    <a className='latestPostsRow' href={'/post/' + props.postId}>
      <div className='latestPostsMonth'>{props.month}</div>
      <div className='latestPostsDate'>{props.date}</div>
      <div className='latestPostsDescription'>{props.description}</div>
    </a>
  )
}

function LatestPosts() {
  const blogPostRows = allPosts.slice(0, 5).map((post) => {
    return (
      <BlogPostRow postId={post.id} month={post.month} date={post.date} description={post.title} />
    )
  })

  return (
    <div>
      <h2 className='header2'>LATEST POSTS</h2>
      <div className='flexCenter'>
        <div id='latestPostsContainer'>
          {blogPostRows}
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

export default App
