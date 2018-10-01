import React, { Component } from 'react'

import HeaderBar from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import { BlogPostRow } from '../App/App.js'
import { allPosts } from './Posts.js'

import './AllPosts.css'
import '../App/LatestPosts.css'

class AllPosts extends Component {
    render() {
        const blogPostRows = allPosts.map((post) => {
            return (
                <div class='allPostsPadding'>
                    <BlogPostRow postId={post.id} type={post.type} month={post.month} date={post.date} description={post.title} />
                </div>
            )
        })

        return (
            <div>
                <HeaderBar />
                <div id='allPostsContainer'>
                    <h2 id='allPostsTitle' className='header2'>All Posts</h2>
                    {blogPostRows}
                </div>
                <Footer />
            </div>
        )
    }
}

export default AllPosts