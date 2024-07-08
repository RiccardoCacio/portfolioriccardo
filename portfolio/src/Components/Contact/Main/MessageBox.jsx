import React from 'react'

const MessageBox = ({ MessageText, MessageTime }) => {
    return (
        <div className='flex'>
            <div className='bg-white inline-flex text-left pt-2 pb-2 pl-3 pr-3 ml-5 mb-8 rounded-xl shadow-lg max-md:ml-2'>
                <div className='flex'>
                    <p className=' text-lg max-md:text-[17px]'>{MessageText}</p>
                    <p className='text-xs text-right mt-3 ml-4'>{MessageTime}</p>
                </div>
            </div>
        </div>
    )
}

export default MessageBox
