import React from 'react'
import './Header.css'
import '../App/App.css'

function HeaderBar() {
    return (
      <header>
        <a id='headerLogoLink' className='flexCenterVertical' href='/'>
          <img id='headerLogoImage' src='https://plivesey.github.io/world-of-wander-images/home/logo.png' alt='Logo' />
        </a>
        <div className='flexCenterVertical'>
          <h1 id='headerTitle'><a id='headerTitleLink' href='/'>World of Wander</a></h1>
        </div>
        <a id='aboutLink' className='flexCenterVertical' href='/post/about'>
          <h2 id='aboutHeader' className='header2'>ABOUT</h2>
        </a>
      </header>
    )
  }
  
  export default HeaderBar
