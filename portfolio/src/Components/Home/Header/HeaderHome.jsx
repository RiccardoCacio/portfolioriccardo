import React from 'react'
import HeaderImg from '../../../Img/headerImg.png'

const HeaderHome = () => {
    return (
        <header className=''>
            <div className='h-[100px]'></div>
            <h1 className='text-orange-400 text-7xl max-md:text-5xl'

            >Hi! I'm Riccardo. <br />
                A FrontEnd Developer.
            </h1>

            <h3 className='text-black text-xl max-md:text-lg'>With passion and love i build things for the web!</h3>

            <div className='flex justify-center mt-[-120px] mb-[-90px] max-md:mt-[-110px]'>
                <img className='h-[950px] max-md:h-[700px]' src={HeaderImg} alt="" />
            </div>
        </header>
    )
}

export default HeaderHome
