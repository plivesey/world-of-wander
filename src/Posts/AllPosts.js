import React, { Component } from 'react'

import HeaderBar from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import { BlogPostRow } from '../App/App.js'
import { allPosts, postsForCountry, countryTitleForId } from './Posts.js'

import '../App/App.css'
import './AllPosts.css'
import '../App/LatestPosts.css'

class AllPosts extends Component {
    render() {
        const posts = this.props.match.params.countryId ? postsForCountry(this.props.match.params.countryId) : allPosts
        const blogPostRows = posts.map((post) => {
            return (
                <div class='allPostsPadding'>
                    <BlogPostRow postId={post.id} type={post.type} month={post.month} date={post.date} description={post.title} />
                </div>
            )
        })

        const title = this.props.match.params.countryId ? countryTitleForId(this.props.match.params.countryId) : 'All Posts'

        return (
            <div className='verticallySpaceFooter'>
                <div>
                    <HeaderBar />
                    <div id='allPostsContainer'>
                        <h2 id='allPostsTitle' className='header2'>{title}</h2>
                        {blogPostRows}
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default AllPosts