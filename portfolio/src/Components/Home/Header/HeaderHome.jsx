import React from 'react'
import { Typewriter, Cursor } from "react-simple-typewriter"
import HeaderImg from '../../../Img/headerImg.png'
import Hbg2 from '../../../Img/Hbg2.png'
import { FaPlay } from "react-icons/fa6";
import { FaBackward } from "react-icons/fa6";
import { TbPlayerTrackNextFilled } from "react-icons/tb";





const HeaderHome = () => {

    return (
        <header className=''>
            <div className='h-[100px]'></div>
            <h1 className='text-orange-400 text-7xl  max-md:text-5xl'>Hi! I'm Riccardo. <br />
                A FrontEnd Developer.
            </h1>
            <div className='h-10'>
                <h3 className='text-black text-xl max-md:text-lg'>With passion and love i build things for<span>
                    <Typewriter
                        words={[' the web!', ' the people!', ' YOU!']}
                        loop={true}
                        cursor
                        cursorStyle="_"
                        typeSpeed={100}
                        deleteSpeed={90}
                        delaySpeed={1200}
                    />
                </span></h3>
            </div>
            <div className='flex justify-center mt-[-150px] max-md:mt-[-150px]'>
                <div className='flex flex-col h-[510px] w-[400px] p-7 mt-[221px] rounded-3xl shadow-2xl max-md:h-[700px] bg-[#fee2c6]'>
                    <img className='rounded-3xl h-[250px] w-[400px]' src={Hbg2} alt="" />

                    <div class="mt-8 h-1 w-full bg-neutral-200 dark:bg-neutral-600">
                        <div class="h-1 bg-orange-400 w-[35%]">
                        </div>
                    </div>

                    <div className='flex gap-8 mt-8 justify-center'>
                        <FaBackward size={55} />
                        <FaPlay size={55} />
                        <TbPlayerTrackNextFilled size={55} />
                    </div>
                    <div className='mt-5'>
                        <h3 className=' font-bold text-2xl underline decoration-orange-400 decoration-2 underline-offset-3'>FrontEnd Developer</h3>
                        <h4 className='text-lg '>Riccardo Cacio</h4>

                    </div>

                </div>

            </div>

        </header>
    )

}

export default HeaderHome
