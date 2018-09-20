import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Construction from './Construction/Construction.js'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(<Construction />, document.getElementById('root'))
registerServiceWorker()
