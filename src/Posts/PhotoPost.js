import React, { Component } from 'react'

import HeaderBar from '../Header/Header.js'
import Footer from '../Footer/Footer.js'
import { postForId } from './Posts.js'

import './PhotoPost.css'
import '../App/App.css'

function SinglePhotoImage(props) {
    return (
        <div className='photoImageContainer'>
            <div className='singlePhotoImageContainer' style={{ backgroundImage: 'url(' + props.image + ')' }} />
            <div className='photoPostText'>
                {props.detailText}
            </div>
        </div>
    )
}

function MultiplePhotoImage(props) {
    return (
        <div className='photoImageContainer'>
            <div className='multiplePhotoImageContainer' style={{ backgroundImage: 'url(' + props.image1 + ')' }} />
            <div className='multipePhotoImageSpace' />
            <div className='multiplePhotoImageContainer' style={{ backgroundImage: 'url(' + props.image2 + ')' }} />
            <div className='photoPostText'>
                {props.detailText}
            </div>
        </div>
    )
}

class PhotoPost extends Component {
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

        const postNodes = post.content.map((element) => {
            if (element.image) {
                return (
                    <SinglePhotoImage key={element.image} image={element.image} detailText={element.detailText} />
                )
            } else if (element.images) {
                return (
                    <MultiplePhotoImage key={element.images[0]} image1={element.images[0]} image2={element.images[1]} detailText={element.detailText} />
                )
            } else {
                return (
                    <div>An error has occurred. Please let us know! :D</div>
                )
            }
        })

        return (
            <div>
                <HeaderBar />
                <div className='flexCenterHorizontal'>
                    <div id='photoPostContainer'>
                        <h2 id='photoPostTitle' className='header2'>{post.title}</h2>
                        <div id='photoPostContent'>
                            {postNodes}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PhotoPost