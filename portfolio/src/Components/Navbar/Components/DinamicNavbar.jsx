import React from 'react'
import { Link } from 'react-router-dom'

const DinamicNavbar = () => {
    return (
        <nav className='ease-in duration-500 backdrop-blur-sm bg-[#0C0C0C] opacity-90 text-xl fixed top-10 z-10 left-1/2 translate-x-[-50%] p-3 w-[30%] rounded-2xl md:w-[60%] lg:w-[30%] '>
            <ul className='flex justify-around list-none'>
                <li><Link className='no-underline text-white hover:text-orange-400' to='/'>Home</Link></li>
                <li><Link className='no-underline text-white hover:text-orange-400' to='/project'>Project</Link></li>
                <li><Link className='no-underline text-white hover:text-orange-400' to='/contact'>Contact</Link></li>
                <li><a className='no-underline text-white hover:text-orange-400' href="https://github.com/RiccardoCacio" target='blank_'>Github</a></li>
            </ul>
        </nav>
    )
}

export default DinamicNavbar
