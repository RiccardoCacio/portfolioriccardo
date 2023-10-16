import React from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='backdrop-blur-sm bg-transparent text-xl fixed top-0 z-10 w-full p-4'>
            <ul className='flex justify-around list-none'>
                <li><Link className='no-underline text-black hover:text-orange-400' to='/'>Home</Link></li>
                <li><Link className='no-underline text-black hover:text-orange-400' to='/project'>Project</Link></li>
                <li><Link className='no-underline text-black hover:text-orange-400' to='/contact'>Contact</Link></li>
                <li><a className='no-underline text-black hover:text-orange-400' href="https://github.com/RiccardoCacio" target='blank_'>Github</a></li>
            </ul>
        </nav>
    )
}

export default Navbar
