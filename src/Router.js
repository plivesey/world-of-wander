import React, { Component } from 'react'
import { BrowserRouter as ReactRouter, Route, Link } from "react-router-dom"
import Construction from './Construction/Construction.js'
import App from './App/App.js'

class Router extends Component {
    render() {
        return (
            <ReactRouter>
                <div id='router'>
                    <Route exact path='/' component={Construction} />
                    <Route path='/home' component={App} />
                </div>
            </ReactRouter>
        )
    }
}

export default Router;
