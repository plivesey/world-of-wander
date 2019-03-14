import icelandHotPots from './Content/HotPots.js'
import about from './Content/About.js'
import peruRecs from './Content/PeruRecs.js'
import sailingEngland from './Content/Sailing.js'
import laugavegur from './Content/Laugavegur.js'
import first24Vietnam from './Content/First24Vietnam.js'
import seattle from './Content/Seattle.js'
import machuPichu from './Content/MachuPichu.js'
import sacredValley from './Content/SacredValley.js'
import tmb from './Content/TMB.js'
import lakeDistrict from './Content/LakeDistrict.js'
import icelandPhotos from './Content/IcelandPhotos.js'
import hanoi from './Content/Hanoi.js'
import hanoiFood from './Content/HanoiFood.js'
import ninhBinh from './Content/NinhBinh.js'
import muiNe from './Content/MuiNe.js'
import sixMonths from './Content/6Months.js'
import kohYao from './Content/KohYao.js'
import kohLanta from './Content/KohLanta.js'
import dalat from './Content/Dalat.js'
import surviving from './Content/surviving.js'
import highlights from './Content/highlights.js'
import lanterns from './Content/lanterns.js'
import laos from './Content/Laos.js'
import laosPhotos from './Content/LaosPhotos.js'
import chiangMai from './Content/ChiangMai.js'
import pai from './Content/pai.js'
import hue from './Content/hue.js'
import siemReap from './Content/siemReap.js'
import saigon from './Content/saigon.js'
import nepalPhotos from './Content/nepalPhotos.js'
import nepal from './Content/nepal.js'
import sriLankaSouthCoast from './Content/sriLankaSouthCoast.js'

export function postForId(id) {
    if (id === 'about') {
        return about
    } else {
        return allPosts.find((post) => {
            return post.id === id
        })
    }
}

export function countryTitleForId(id) {
    if (id === 'pnw') {
        return 'Washington & Oregon'
    } else if (id === 'seAsia') {
        return 'S.E. Asia'
    } else if (id === 'france') {
        return 'France'
    } else if (id === 'uk') {
        return 'U.K.'
    } else if (id === 'iceland') {
        return 'Iceland'
    } else if (id === 'peru') {
        return 'Peru'
    } else {
        return '?'
    }
}

export function postsForCountry(countryId) {
    return allPosts.filter((post) => {
        return post.countryId === countryId
    })
}

export const allPosts = [
    // sriLankaSouthCoast,
    nepal,
    nepalPhotos,
    saigon,
    hue,
    siemReap,
    pai,
    laosPhotos,
    laos,
    chiangMai,
    lanterns,
    surviving,
    highlights,
    dalat,
    kohLanta,
    kohYao,
    sixMonths,
    muiNe,
    ninhBinh,
    hanoi,
    hanoiFood,
    first24Vietnam,
    seattle,
    tmb,
    sailingEngland,
    icelandPhotos,
    laugavegur,
    icelandHotPots,
    lakeDistrict,
    sacredValley,
    machuPichu,
    peruRecs
]
