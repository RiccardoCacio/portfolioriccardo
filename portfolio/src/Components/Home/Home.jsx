import React from 'react'
import HeaderHome from './Header/HeaderHome'
import MainHome from './Main/MainHome'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Home = () => {
    return (
        <div className=''>
            <Navbar />
            <HeaderHome />
            <MainHome />
            <Footer />
        </div>
    )
}

export default Home
