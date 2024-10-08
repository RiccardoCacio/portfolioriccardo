import { useEffect, useState } from 'react'
import '../../App.css';
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    useEffect(() => {
        const updatePosition = () => {
            setScrollPosition(window.scrollY)
        }
        window.addEventListener('scroll', updatePosition);
        updatePosition();
    })
    //
    const [screenSize, setScreenSize] = useState(0)
    useEffect(() => {
        const updateSize = () => {
            setScreenSize(window.innerWidth);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
    })


    return (
        <div className='ease-in duration-500 cursor-auto'>
            {scrollPosition >= 50 && screenSize >= 768 ?
                // dinamic navbar
                <nav className='ease-in duration-500 backdrop-blur-sm bg-[#0C0C0C] opacity-90 text-xl fixed top-10 z-10 left-1/2 translate-x-[-50%] p-3 w-[30%] rounded-2xl md:w-[60%] lg:w-[30%] '>
                    <ul className='flex justify-around list-none'>
                        <li><Link className='no-underline text-[#f3ede2] hover:text-orange-400' to='/'>Home</Link></li>
                        <li><Link className='no-underline text-[#f3ede2] hover:text-orange-400' to='/project'>Project</Link></li>
                        <li><Link className='no-underline text-[#f3ede2] hover:text-orange-400' to='/contact'>Contact</Link></li>
                        <li><a className='no-underline text-[#f3ede2] hover:text-orange-400' href="https://github.com/RiccardoCacio" target='blank_'>Github</a></li>
                    </ul>
                </nav> :
                // classic navbar
                <nav className='backdrop-blur-sm bg-transparent text-xl fixed top-0 z-10 w-full p-4 '>
                    <ul className='flex justify-around list-none'>
                        <li><Link className='no-underline text-black hover:text-orange-400' to='/'>Home</Link></li>
                        <li><Link className='no-underline text-black hover:text-orange-400' to='/project'>Project</Link></li>
                        <li><Link className='no-underline text-black hover:text-orange-400' to='/contact'>Contact</Link></li>
                        <li><a className='no-underline text-black hover:text-orange-400' href="https://github.com/RiccardoCacio" target='blank_'>Github</a></li>
                    </ul>
                </nav>}
        </div>
    )
}

export default Navbar
