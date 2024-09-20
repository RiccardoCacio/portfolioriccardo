import React from 'react'
import Carrello from '../../../Img/cursor/carrelloCursor.png'
import Cheese from '../../../Img/cursor/cheeseCursor.png'
import Home from '../../../Img/cursor/homeCursor.png'
import Mario from '../../../Img/cursor/marioCursor.png'
import Palette from '../../../Img/cursor/paletteCursor.png'
import Pizza from '../../../Img/cursor/pizzaCursor.png'
import Poke from '../../../Img/cursor/pokeCursor.png'
import World from '../../../Img/cursor/worldCursor.png'


const MainCursor = () => {
    return (
        <div className='mt-28 flex flex-wrap justify-center pl-[20%] pr-[20%] gap-32 font-Montserrat'>
            <div className='flex flex-wrap gap-40 text-center items-center '>
                <a className='hover:text-orange-500' href="https://icons8.com/icon/rPCAH753HAqD/buying" target='_blank'><img src={Carrello} alt="" /><span className='text-lg font-semibold'>Cart by Icon8</span></a>
                <a className='hover:text-orange-500' href="https://icons8.com/icon/12888/formaggio" target='_blank'><img src={Cheese} alt="" /><span className='text-lg font-semibold'>Cheese by Icon8</span></a>
                <a className='hover:text-orange-500' href="https://icons8.com/icon/iJzm3AFQCS4W/home" target='_blank'><img src={Home} alt="" /><span className='text-lg font-semibold'>Home by Icon8</span></a>
                <a className='hover:text-orange-500' href="https://icons8.com/icon/SlB5l9JWEz7p/pokeball" target='_blank'><img src={Poke} alt="" /><span className='text-lg font-semibold'>Pokeball by Icon8</span></a>
            </div>

            <div className='flex flex-wrap gap-40 mb-28 text-center items-center'>
                <a className='hover:text-orange-500' href="https://icons8.com/icon/2saf39iSUpNd/super-mario" target='_blank'><img src={Mario} alt="" /><span className='text-lg font-semibold'>Mario by Icon8</span></a>
                <a className='hover:text-orange-500' href="https://icons8.com/icon/Hs4y0qsqaZ6G/color-palette" target='_blank'><img src={Palette} alt="" /><span className='text-lg font-semibold'>Palette by Icon8</span></a>
                <a className='hover:text-orange-500' href="https://icons8.com/icon/oTyopyeAHiFU/salami-pizza" target='_blank'><img src={Pizza} alt="" /><span className='text-lg font-semibold'>Pizza by Icon8</span></a>
                <a className='hover:text-orange-500' href="https://icons8.com/icon/XsvEZR0h6fav/globe" target='_blank'><img src={World} alt="" /><span className='text-lg font-semibold'>Globe by Icon8</span></a>
            </div>
        </div>

    )
}

export default MainCursor
