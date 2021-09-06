import React from 'react'
import HomeFooter from '../components/HomeFooter/HomeFooter'
import HomeNavbar from '../components/HomeNavbar'

export default function LayoutHome({children}) {
    return (
        <>
            <HomeNavbar/>
            {children}
            <HomeFooter/>
        </>
    )
}
