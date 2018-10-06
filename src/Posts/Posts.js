import React from 'react'

import icelandHotPots from './Content/HotPots.js'
import about from './Content/About.js'
import peruRecs from './Content/PeruRecs.js'

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

const icelandPhotos = {
    id: 'iceland',
    type: 'photoPost',
    countryId: 'iceland',
    title: 'Best of Iceland: Photos',
    longDate: 'July 2, 2018',
    month: 'July',
    date: '2',
    content: [
        {
            images: ['https://plivesey.github.io/world-of-wander-images/posts/iceland/icelandMainPhoto.png'],
            text: 'Waterfalls at some place'
        },
        {
            images: ['https://plivesey.github.io/world-of-wander-images/posts/iceland/icelandMainPhoto.png',
                'https://plivesey.github.io/world-of-wander-images/posts/iceland/icelandMainPhoto.png'],
            text: 'Waterfalls at some place'
        }
    ]
}

export const allPosts = [
    icelandPhotos,
    icelandHotPots,
    peruRecs
]
