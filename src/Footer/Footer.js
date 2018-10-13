import React from 'react'

import './Footer.css'

function InstagramPicture(props) {
    return (
        <a href={'https://www.instagram.com/p/' + props.instagramId + '/?taken-by=acavery'}>
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
                    <InstagramPicture instagramId='BlNB5SmBLM1' image='Insta1.jpg' />
                    <InstagramPicture instagramId='BmBBacmBXqV' image='Insta2.jpg' />
                    <InstagramPicture instagramId='BkTdtIThmEE' image='Insta3.jpg' />
                    <InstagramPicture instagramId='Bn1xo1xB5Ik' image='Insta4.jpg' />
                </div>
            </div>
        </div>
    )
}

export default Footer