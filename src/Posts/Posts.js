import React from 'react'

import IcelandMain from '../assets/icelandMainPhoto.png'
import AboutMain from '../assets/aboutPhoto.png'

const about = {
    id: 'about',
    title: 'About Us',
    coverImage: AboutMain,
    content: [
        (
            <div>Here's something about us!</div>
        )
    ]
}

export function postForId(id) {
    if (id === 'about') {
        return about
    } else {
        return allPosts.find((post) => {
            return post.id === id
        })
    }
}

export function postsForCountry(countryId) {
    return allPosts.filter((post) => {
        return post.countryId === countryId
    })
}

const icelandPost = {
    id: 'iceland-post',
    countryId: 'iceland',
    title: 'Iceland Post',
    longDate: 'September 18, 2018',
    month: 'Sept',
    date: '18',
    coverImage: IcelandMain,
    content: [
        (
            <div>Some text</div>
        ), (
            <div>Some more text</div>
        )
    ]
}

export const allPosts = [
    icelandPost
]
