import React from 'react'
import ShoppingList from '../../../Img/copertineProgetti/shoppingList.png'
const ProjectBox = ({ ProjectTitle, ProjectImg, ProjectAlt, ProjectParagraph, ProjectTech, ProjectLink }) => {
    return (

        <div className='mb-[150px] max-md:mb-[90px] '>
            <h2 className='text-orange-400 text-4xl text-left mb-[30px] max-md:text-3xl'>{ProjectTitle}</h2>
            <div className='relative w-[450px] h-[400px] max-md:w-[350px] max-md:h-[350px] '>
                <img className='h-[450px] rounded-3xl max-md:w-[350px] max-md:h-[350px] shadow-2xl' src={ProjectImg} alt={ProjectAlt} />
                <div className='absolute rounded-3xl h-[450px] top-0 left-0 right-0 bottom-0 opacity-0 transition duration-500 ease-out bg-[black]   hover:opacity-70 max-md:w-[350px] max-md:h-[350px]'>
                    <h3 className='max-md:mt-[10px] max-md:text-base  text-xl mt-[30px] text-white text-center ml-4 mr-4 '>{ProjectParagraph}</h3>
                    <h3 className='max-md:text-base max-md:mt-[10px] text-2xl mt-[19px] text-orange-600 text-center ml-4 mr-4 '>{ProjectTech}</h3>
                    <div className='absolute max-md:bottom-1 h-40 w-40 bottom-5 left-1/4 cursor-auto '>
                        <a className='max-md:right-2/3 max-md:bottom-1 text-white absolute bottom-5 left-1/3 text-2xl text-center hover:underline hover:text-orange-600' target='_blank' href={ProjectLink}>Click Here!</a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectBox
