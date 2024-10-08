import React from 'react'

const ResponsiveListElement = ({ title, paragraph }) => {
    return (
        <div className={`max-xl:block max-w-[500px] min-h-[500px] mt-5 mb-10 hidden w-[90%] rounded-3xl bg-[#fee2c6] shadow-2xl`}>
            <div className={`p-4 text-center`}>
                <h2 className='text-orange-400 text-4xl font-bold text-center mb-3'>{title}</h2>
                <h3 className='text-[20px] font-medium text-center'>{paragraph}</h3>
            </div>
        </div>
    )
}

export default ResponsiveListElement
