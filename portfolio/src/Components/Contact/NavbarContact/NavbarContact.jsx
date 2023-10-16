import React from 'react'
import { Link } from 'react-router-dom'
import ProfileImg from '../../../Img/contact/contactProfileImg.PNG'
import ChevronLeft from '../../../Img/contact/chevronLeft.svg'
import XClose from '../../../Img/contact/xClose.svg'
const NavbarContact = () => {
    return (
        <nav className='backdrop-blur-sm bg-white text-xl fixed top-0 z-10 w-full p-3'>
            <ul className='flex list-none justify-between'>
                <div className='flex gap-[30px]'>
                    <Link to='/' className=''><img src={ChevronLeft} alt="" className='h-[40px] mt-1' /></Link>
                    <img src={ProfileImg} alt="Profile imagine" className='h-[50px]' />

                    <div className=''>
                        <p className='text-black text-xl font-semibold'>Cacio Riccardo</p>
                        <p className='text-left text-gray-400 text-base font-medium'>Online</p>
                    </div>

                </div>
                <Link to='/'>
                    <div className='mr-2 pt-3 pb-3 pl-3 pr-3 rounded-xl   hover:bg-slate-300 hover:bg-opacity-20'>

                        <img src={XClose} alt="X to close the page" className='h-[25px]' />

                    </div>
                </Link>
            </ul >

        </nav >
    )
}

export default NavbarContact
