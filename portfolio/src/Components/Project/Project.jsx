import React from 'react'
import ProjectHeader from './Header/ProjectHeader'
import MainProject from './Main/MainProject'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Project = () => {
    return (
        <div className=''>
            <Navbar />
            <ProjectHeader />
            <MainProject />
            <Footer />
        </div>
    )
}

export default Project
