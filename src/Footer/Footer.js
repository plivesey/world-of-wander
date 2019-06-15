import React from 'react'

import './Footer.css'

function InstagramPicture(props) {
    return (
        <a target="_blank" href={'https://www.instagram.com/p/' + props.instagramId + '/?taken-by=acavery'}>
            <img className='instragramFooterImage' src={'https://plivesey.github.io/world-of-wander-images/home/' + props.image} alt='Instagram' />
        </a>
    )
}

function Footer() {
    return (
        <div id='footer'>
            <div id='footerText'>
                Follow <a id='instagramLink' href='https://www.instagram.com/acavery/'>@acavery</a> on Instagram to see where we are
            </div>
            <div className='flexCenterHorizontal'>
                <div id='instagramContainer'>
                    <InstagramPicture instagramId='Bxfhl86BovV' image='Insta1.png' />
                    <InstagramPicture instagramId='BxTGII-BIcn' image='Insta2.png' />
                    <InstagramPicture instagramId='BxYALWEBFyV' image='Insta3.png' />
                    <InstagramPicture instagramId='BxQtKnFhx18' image='Insta4.png' />
                </div>
            </div>
        </div>
    )
}

export default Footer