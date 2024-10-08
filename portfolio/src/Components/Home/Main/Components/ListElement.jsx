import React, { } from 'react';

const ListElement = ({ listElementTitle, hoverColor, updateClick, changeVideo, firstClick, elementNumber, setSectionNumber }) => {

    const firstHandleClick = () => {
        setSectionNumber(elementNumber)
        if (firstClick) return;
        changeVideo(true)
        setTimeout(() => {
            changeVideo(false)
            updateClick(true)
        }, 1250);
    }
    const colorVariants = {
        orange: 'bg-[#ff7000] hover:bg-[#ff7000]',
        orange2: 'bg-[#ff7900] hover:bg-[#ff7900]',
        orange3: 'bg-[#ff8000] hover:bg-[#ff8000]',
        orange4: 'bg-[#ff9800] hover:bg-[#ff9800]',
        orange5: 'bg-[#FFA500] hover:bg-[#FFA500]',
        orange6: 'bg-[#FFB100] hover:bg-[#FFB100]',
    }
    return (
        <li><button onClick={firstHandleClick} className={`border-t-2 border-solid p-4 border-black font-semibold text-3xl text-start w-full duration- hover:${colorVariants[hoverColor]}`}>{listElementTitle}</button></li>
    )
}

export default ListElement
