import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import HeaderCursorIcon from './Header/HeaderCursorIcon'
import MainCursor from './Main/MainCursor'

const CursorIcon = () => {
    return (
        <div>
            <Navbar />
            <HeaderCursorIcon />
            <MainCursor />
            <Footer />
        </div>
    )
}

export default CursorIcon
