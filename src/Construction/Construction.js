import React, { Component } from 'react'
import SnowImageAsset from '../assets/snow.png'
import GradientOverlay from '../assets/gradientOverlay.png'
import './Construction.css'

class Construction extends Component {
    signUp() {
        const email = 'alicecamilleavery@gmail.com'
        const subject = 'Sign me up for World of Wander Updates'
        const message = 'Just send the email and we\'ll add you! 😀 🎉'
        const mailToLink = 'mailto:' + email + '?subject=' + subject + '&body=' + message

        window.open(mailToLink, 'emailWindow')
    }

    render() {
        return (
            <div id='container'>
                <div id='upperSection'>
                    <h1>World of Wander</h1>
                </div>
                <div id='lowerSection'>
                    <div id='snowImage' style={{ backgroundImage: "url(" + SnowImageAsset + ")" }}>
                        <img id='snowImageGradient' alt='' src={GradientOverlay} />
                    </div>
                    <div id='lowerSectionContent'>
                        <div id='lowerSectionText'>
                            <p>
                                We leave for Vietnam on October 3rd. We'll be releasing our blog soon!
                            </p>
                            <p>
                                If you want to be know when we release the blog, sign up to our email list.
                            </p>
                        </div>
                        <button onClick={() => {this.signUp()}}>Sign Up!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Construction;
