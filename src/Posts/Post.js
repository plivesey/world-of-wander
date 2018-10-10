import React, { Component } from 'react'

import HeaderBar from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import { postForId } from './Posts.js'

import './Post.css'
import '../App/App.css'

class Post extends Component {
    render() {
        const postId = this.props.match.params.id
        var post = postForId(postId)
        if (!post) {
            post = {
                title: 'Post not found!',
                coverImage: '',
                content: []
            }
        }

        var dateSection
        if (post.longDate) {
            dateSection = (
                <div id='postDateContainer'>
                    <div>{post.longDate}</div>
                    <a id='backToAllPosts' href='/allPosts'>&lt; Back to all posts</a>
                </div>
            )
        } else {
            dateSection = (<div></div>)
        }

        const contentSections = post.content.map((content) => {
            if (content.text) {
                return (
                    <div className='postContent'>{content.text}</div>
                )
            } else if (content.image) {
                var subtitle = (
                    <div className='postDetailText'><i>{content.detailText || ''}</i></div>
                )
                return (
                    <div>
                        <img className='postLargeImage' src={content.image} alt='Failed to load' />
                        {subtitle}
                    </div>
                )
            } else if (content.images) {
                return (
                    <div>
                        <div className='postVerticalImageContainer'>
                            <img className='postVerticalImage' src={content.images[0]} alt='Failed to load' />
                            <img className='postVerticalImage' src={content.images[1]} alt='Failed to load' />
                        </div>
                    </div>
                )
            } else if (content.header) {
                return (
                    <h2 className='postHeader'>{content.header}</h2>
                )
            } else if (content.subheader) {
                return (
                    <h3 className='postSubheader'>{content.subheader}</h3>
                )
            } else {
                return <div></div>
            }
        })

        return (
            <div>
                <HeaderBar />
                <div id='postContainer'>
                    <div id='mainImage' style={{ backgroundImage: 'url(' + post.coverImage + ')', backgroundPosition: post.coverImagePosition || undefined }} />
                    <div class='flexCenterHorizontal'>
                        <div id='postContentContainer'>
                            <h2 id='postTitle'>{post.title}</h2>
                            {dateSection}
                            {contentSections}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Post