import React, { Component } from 'react'
import Slider from 'react-slick'
import KeyHandler from 'react-key-handler'

import HeaderBar from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import { postsForCountry, allPosts, countryTitleForId } from '../Posts/Posts.js'

import './App.css'
import './Map.css'
import './ComeMeetUs.css'
import './StayUpToDate.css'
import './LatestPosts.css'

function CountryButton(props) {
  return (
    <button id={props.id} className='CountryButton' onClick={() => { props.onClick(props.id) }}>
      <div>{countryTitleForId(props.id)}</div>
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
        <CountryButton id='seAsia' onClick={props.onClick} />
        <CountryButton id='pnw' onClick={props.onClick} />
        <CountryButton id='france' onClick={props.onClick} />
        <CountryButton id='uk' onClick={props.onClick} />
        <CountryButton id='iceland' onClick={props.onClick} />
        <CountryButton id='peru' onClick={props.onClick} />
      </Slider>
    </div>
  )
}

function DesktopMap(props) {
  return (
    <div id='desktopMap'>
      <CountryButton id='pnw' onClick={props.onClick} />
      <CountryButton id='seAsia' onClick={props.onClick} />
      <CountryButton id='france' onClick={props.onClick} />
      <CountryButton id='uk' onClick={props.onClick} />
      <CountryButton id='iceland' onClick={props.onClick} />
      <CountryButton id='peru' onClick={props.onClick} />
    </div>
  )
}

function MapOverlay() {
  return (
    <div id='mapOverlay' />
  )
}

class MapDetailPage extends Component {
  constructor() {
    super()

    this.state = {}

    this.updateRowsBasedOnWindowSize.bind(this)
  }

  updateRowsBasedOnWindowSize() {
    if (window.innerWidth < 310) {
      this.setState({ rowCount: 1 })
    } else if (window.innerWidth > 500 && window.innerWidth < 600) {
      this.setState({ rowCount: 3 })
    } else if (window.innerWidth < 800) {
      this.setState({ rowCount: 2 })
    } else if (window.innerWidth < 1200) {
      this.setState({ rowCount: 3 })
    } else if (window.innerWidth < 1500) {
      this.setState({ rowCount: 4 })
    } else {
      this.setState({ rowCount: 5 })
    }
  }

  componentDidMount() {
    // Need to do this the first time to get the first value
    this.updateRowsBasedOnWindowSize()
    window.addEventListener('resize', this.updateRowsBasedOnWindowSize.bind(this))
  }

  render() {
    const posts = postsForCountry(this.props.countryId)

    var numberOfRows = this.state.rowCount || 3
    const includeLoadMore = posts.length > numberOfRows
    if (includeLoadMore) {
      // We need to include space for the read more row
      numberOfRows--
    }

    const blogPostRows = posts.slice(0, numberOfRows).map((post) => {
      return (
        <BlogPostRow key={post.id} postId={post.id} type={post.type} month={post.month} date={post.date} description={post.title} />
      )
    })

    if (includeLoadMore) {
      blogPostRows.push(
        (
          <BlogPostReadMoreRow type={this.props.countryId} />
        )
      )
    }

    return (
      <div id='mapDetailPage'>
        <div id='mapDetailContainer'>
          <div id='detailPageImageContainer'>
            <img id='detailPageImage' key={this.props.image} alt={this.props.title} src={this.props.image} />
          </div>
          <div id='detailPageTextContainer'>
            <h2 className='header2' id='detailPageTextContainerHeader'>{this.props.title}</h2>
            {blogPostRows}
          </div>
        </div>
        <button id='mapDetailBack' onClick={this.props.onClick}>
          &lt; Back
      </button>
      </div>
    )
  }
}

class Map extends Component {
  constructor() {
    super()

    this.state = {}

    this.onClick = this.onClick.bind(this)
  }

  detailPageProps() {
    if (this.state.highlightedCountry === 'iceland') {
      return {
        id: 'iceland',
        image: 'https://plivesey.github.io/world-of-wander-images/posts/iceland/Iceland.jpg',
        title: 'Iceland'
      }
    } else if (this.state.highlightedCountry === 'peru') {
      return {
        id: 'peru',
        image: 'https://plivesey.github.io/world-of-wander-images/posts/peru/Peru.jpg',
        title: 'Peru'
      }
    } else if (this.state.highlightedCountry === 'france') {
      return {
        id: 'france',
        image: 'https://plivesey.github.io/world-of-wander-images/posts/france/France.jpg',
        title: 'France'
      }
    } else if (this.state.highlightedCountry === 'pnw') {
      return {
        id: 'pnw',
        image: 'https://plivesey.github.io/world-of-wander-images/posts/pnw/PNW.jpg',
        title: 'Pacific Northwest'
      }
    } else if (this.state.highlightedCountry === 'uk') {
      return {
        id: 'uk',
        image: 'https://plivesey.github.io/world-of-wander-images/posts/uk/UK.jpg',
        title: 'U.K.'
      }
    } else if (this.state.highlightedCountry === 'seAsia') {
      return {
        id: 'seAsia',
        image: 'https://plivesey.github.io/world-of-wander-images/posts/seAsia/SEAsia.jpg',
        title: 'Southeast Asia'
      }
    } else {
      return {
        id: 'something-went-wrong',
        image: '',
        title: 'Something went wrong! Please let me know :D'
      }
    }
  }

  onClick(countryId) {
    if (!this.state.showDetail) {
      this.setState({ highlightedCountry: countryId, showDetail: true })
    } else {
      this.setState({ showDetail: false })
    }
  }

  render() {
    const detailPageProps = this.detailPageProps()
    return (
      <div id='map' style={{ backgroundImage: 'url("https://plivesey.github.io/world-of-wander-images/home/mapBackground.png")' }}>
        <KeyHandler
          keyValue='Escape'
          onKeyHandle={() => { this.onClick(null) }}
        />
        <DesktopMap onClick={this.onClick} />
        <MobileMap onClick={this.onClick} />
        <MapOverlay />
        <MapDetailPage countryId={detailPageProps.id} image={detailPageProps.image} title={detailPageProps.title} onClick={() => this.onClick(null)} />
        <link rel="preload" href={this.highlightImageForCountryId('pnw')} as="image" />
        <link rel="preload" href={this.highlightImageForCountryId('iceland')} as="image" />
        <link rel="preload" href={this.highlightImageForCountryId('uk')} as="image" />
        <link rel="preload" href={this.highlightImageForCountryId('peru')} as="image" />
        <link rel="preload" href={this.highlightImageForCountryId('france')} as="image" />
        <link rel="preload" href={this.highlightImageForCountryId('seAsia')} as="image" />
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
      return 'https://plivesey.github.io/world-of-wander-images/home/icelandDown.png'
    } else if (id === 'uk') {
      return 'https://plivesey.github.io/world-of-wander-images/home/ukDown.png'
    } else if (id === 'peru') {
      return 'https://plivesey.github.io/world-of-wander-images/home/peruDown.png'
    } else if (id === 'pnw') {
      return 'https://plivesey.github.io/world-of-wander-images/home/pnwDown.png'
    } else if (id === 'france') {
      return 'https://plivesey.github.io/world-of-wander-images/home/franceDown.png'
    } else if (id === 'seAsia') {
      return 'https://plivesey.github.io/world-of-wander-images/home/seAsiaDown.png'
    } else {
      return ''
    }
  }

  componentDidUpdate() {
    const countryId = this.state.highlightedCountry

    if (countryId && this.state.showDetail) {
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
          We would love for friends and family to join us for parts of our trip! We are extremely flexible, and here are the parts of the world we're going to next:
        </div>
        <div className='comeMeetUsLocationContainer'>
          <ComeMeetUsLocationRow
            image='https://plivesey.github.io/world-of-wander-images/home/comeAsia.png'
            title='Southeast Asia'
            text='Based in Vietnam, Oct 2018 - April 2019'
            link='https://www.google.com/flights/#flt=SFO..2018-10-10*.SFO.2018-10-14;c:USD;e:1;sd:0;er:80046474.960554778.244369736.1224226653;t:e'
          />
          <ComeMeetUsLocationRow
            image='https://plivesey.github.io/world-of-wander-images/home/comeCaribbean.png'
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
      <div id='stayUpToDate' style={{ backgroundImage: 'url("https://plivesey.github.io/world-of-wander-images/home/stayWithUs.jpg")' }}>
        <h2 className='header2'>STAY UP TO DATE</h2>
        <button onClick={() => { this.signUp() }}>Get Emails From Us</button>
      </div>
    )
  }
}

export function BlogPostRow(props) {
  return (
    <a className='latestPostsRow' href={'/' + props.type + '/' + props.postId}>
      <div className='flexCenterVertical'><div className='latestPostsMonth'>{props.month}</div></div>
      <div className='flexCenterVertical'><div className='latestPostsDate'>{props.date}</div></div>
      <div className='flexCenterVertical'><div className='latestPostsDescription'>{props.description}</div></div>
    </a>
  )
}

function BlogPostReadMoreRow(props) {
  return (
    <a className='latestPostsRow' href={'/posts/' + props.type}>
      <div className='flexCenterHorizontal'>
        <div className='flexCenterVertical'>
          <div className='header2' id='blogPostsReadMore'>READ MORE...</div>
        </div>
      </div>
    </a>
  )
}

function LatestPosts() {
  const blogPostRows = allPosts
    .slice(0, 5)
    .map((post) => {
      return (
        <BlogPostRow key={post.id} postId={post.id} type={post.type} month={post.month} date={post.date} description={post.title} />
      )
    })

  return (
    <div>
      <h2 className='header2'>LATEST POSTS</h2>
      <div className='flexCenterHorizontal'>
        <div id='latestPostsContainer'>
          {blogPostRows}
          <div className='flexCenterHorizontal'>
            <a className='header2' id='latestPostsReadMore' href='/allPosts'>
              READ MORE...
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function OneSecondVideo() {
  return (
    <div>
      <h2 className='header2'>OUR TRAVELS IN 4 MINUTES</h2>
      <div className='flexCenterHorizontal'>
        <div id='oneSecondVideoContainer'>
          <iframe title='1SE Video' id='oneSecondVideoIFrame' src="https://www.youtube-nocookie.com/embed/31DKTKdEyIA?rel=0" frameBorder="0" allow="autoplay; encrypted-media"
            allowFullScreen />
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
        <OneSecondVideo />
        <ComeMeetUs />
        <StayUpToDate />
        <LatestPosts />
        <Footer />
      </div>
    );
  }
}

export default App
