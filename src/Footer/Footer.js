import React from 'react'

import './Footer.css'

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

export default Footer