import React from 'react'

const ParagraphBox = ({ titleP, paragraph }) => {
    return (
        <div className='text-balck bg-[#fee2c6] rounded-3xl p-[20px] max-w-[500px]'>
            <h2 className='text-orange-400 text-4xl text-left mb-[30px]  max-md:text-3xl max-md:mb-[25px]'>{titleP}</h2>
            <h3 className='text-[20px] text-left max-md:text-[19px]'>{paragraph}</h3>
        </div>
    )
}

export default ParagraphBox
