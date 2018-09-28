import React, { Component } from 'react'
import { BrowserRouter as ReactRouter, Route } from "react-router-dom"
import Construction from './Construction/Construction.js'
import App from './App/App.js'
import Post from './Posts/Post.js'

class Router extends Component {
    render() {
        return (
            <ReactRouter>
                <div id='router'>
                    <Route exact path='/' component={Construction} />
                    <Route path='/home' component={App} />
                    <Route path='/post/:id' component={Post} />
                </div>
            </ReactRouter>
        )
    }
}

export default Router;
