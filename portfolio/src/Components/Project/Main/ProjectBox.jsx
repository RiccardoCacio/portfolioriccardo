import React from 'react'
import ShoppingList from '../../../Img/copertineProgetti/shoppingList.png'
const ProjectBox = ({ ProjectTitle, ProjectImg, ProjectAlt, ProjectParagraph, ProjectTech, ProjectLink }) => {
    return (

        <div className='mb-[150px]'>
            <h2 className='text-orange-400 text-4xl text-left mb-[30px] max-md:text-3xl'>{ProjectTitle}</h2>
            <div className='relative w-[450px] h-[400px] max-md:w-[350px] max-md:h-[350px]'>
                <img className='h-[450px] rounded-3xl max-md:w-[350px] max-md:h-[350px]' src={ProjectImg} alt={ProjectAlt} />
                <div className='absolute rounded-3xl h-[450px] top-0 left-0 right-0 bottom-0 opacity-0 transition duration-500 ease-out bg-[black]   hover:opacity-70 max-md:w-[350px] max-md:h-[350px]'>
                    <h3 className='text-xl mt-[30px] text-white text-center ml-4 mr-4 max-md:text-lg max-md:mt-[10px]'>{ProjectParagraph}</h3>
                    <h3 className='text-2xl mt-[20px] text-orange-500 text-center ml-4 mr-4 max-md:text-lg max-md:mt-[10px]'>{ProjectTech}</h3>
                    <a className='text-white absolute bottom-5 left-1/3 text-2xl text-center hover:underline hover:text-orange-500' target='_blank' href={ProjectLink}>Click Here!</a>
                </div>
            </div>
        </div>

    )
}

export default ProjectBox
