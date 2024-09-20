import { useEffect, useState } from 'react'
import '../../App.css';
import ClassicNavbar from './Components/ClassicNavbar';
import DinamicNavbar from './Components/DinamicNavbar';

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
    console.log(screenSize)


    return (
        <>
            {scrollPosition >= 50 && screenSize >= 768 ?

                <DinamicNavbar />
                :
                <ClassicNavbar />
            }
        </>

    )
}

export default Navbar
