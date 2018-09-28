import React, { Component } from 'react'

import HeaderBar from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import { postForId } from './Posts.js'

import './Post.css'

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

        return (
            <div>
                <HeaderBar />
                <div id='postContainer'>
                    <div id='mainImage' style={{backgroundImage: 'url(' + post.coverImage + ')'}}/>
                    <div id='postContentContainer'>
                        <div id='postContent'>
                            <h2 id='postTitle'>{post.title}</h2>
                            {dateSection}
                            <div id='importedPostContent'>
                               {post.content}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Post