import React from 'react'
import Plus from '../../../Img/contact/plus.svg'
import Microphone from '../../../Img/contact/microphone.svg'
import Sticker from '../../../Img/contact/sticker.svg'
import Camera from '../../../Img/contact/camera.svg'

const ContactFooter = () => {
    return (
        <footer className='flex fixed bottom-0 bg-slate-100 p-5 w-full justify-center gap-5'>
            <img className='h-[30px] max-md:mt-3' src={Plus} alt="Plus icon" />
            <div className='w-[80%] max-w-[900px] border-[0.1px] rounded-xl border-black bg-white flex justify-between  '>
                <p className='mt-[3px] ml-[5px] text-base'>Developed By Riccardo Cacio.</p>
                <div className='flex place-content-end'>
                    <img src={Sticker} alt="Sticker icon" className='h-[20px] mt-[5px] mr-[9px] max-md:mt-7' />
                </div>
            </div>
            <img src={Camera} alt="Photocamera icon" className='h-[25px] max-md:mt-3' />
            <img src={Microphone} alt="Microphone icon" className='h-[25px] max-md:mt-3' />
        </footer>
    )
}

export default ContactFooter
