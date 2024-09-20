import React from 'react'
import IgSvg from '../../Img/svg/instagram.svg'
import LinkedinSvg from '../../Img/svg/linkedin.svg'
import GitHubSvg from '../../Img/svg/github.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='flex flex-wrap justify-around bg-orange-400 p-10 w-full cursor-auto max-md:flex-col gap-[15px]'>
            <div className=''>
                <p className=''> Copyright © 2024 - Riccardo Cacio -</p>
                <p className=''>Developed by Riccardo Cacio</p>
            </div>
            <div className='flex gap-[10px] max-md:justify-center'>
                <a target='_blank' href="https://github.com/RiccardoCacio"><img src={GitHubSvg} alt="" /></a>
                <a target='_blank' href="https://www.instagram.com/riccardo_cacio/"><img src={IgSvg} alt="" /></a>
                <a target='_blank' href="https://www.linkedin.com/in/riccardo-cacio-98713017a/"><img src={LinkedinSvg} alt="" /></a>
            </div>
            <div className=''>
                <p className=''>Telefono +39 3917254971</p>
                <p className=''>Mail riccardo1918@live.it  </p>
                <Link to='/cursoricon'>
                    <a>Cursor Icon Link</a>
                </Link>
            </div>
        </footer>
    )
}

export default Footer
