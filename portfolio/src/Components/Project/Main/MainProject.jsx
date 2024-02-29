import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import RandomPizza from '../../../Img/copertineProgetti/RandomPizza.png'
import ChangeColor from '../../../Img/copertineProgetti/ChangeColor.png'
import Gameboy from '../../../Img/copertineProgetti/gameboy.png'
import Yourworld from '../../../Img/copertineProgetti/yourworldimg.png'
import CityStats from '../../../Img/copertineProgetti/cityS.png'
import ShoppingList from '../../../Img/copertineProgetti/shoppingList.png'
import Pokedex from '../../../Img/copertineProgetti/Pokedex.png'

import ProjectBox from './ProjectBox'



const MainProject = () => {


    useEffect(() => {
        AOS.refresh();
    }, []);


    // AOS CONFIG!
    useEffect(() => {
        AOS.init();

        // You can also pass an optional settings object
        // below listed default settings
        AOS.init({
            // Global settings:
            disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
            startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
            initClassName: 'aos-init', // class applied after initialization
            animatedClassName: 'aos-animate', // class applied on animation
            useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
            disableMutationObserver: false, // disables automatic mutations' detections (advanced)
            debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
            throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


            // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
            offset: 120, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1500, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, []);

    const randompizzaP = 'This is my first project! This WebApp consinst in random consists of a random pizza generator to help the user in his choice. '
    const randomcolorP = "In this project I created a random color generator in HEX scale. I promise it's the last 'random' project!"
    const gameboyP = "I developed this counter for the Start2Impact Javascript test, inspired by my passion for video games."
    const citystatsP = "I developed CityStats for the Start2Impact advanced Javascript test. This WebApp allows you to collect data on the quality of life in the most famous cities via API calls."
    const shoppinglistP = "This to-do-list is a personal project created to help users with their shopping list. To ensure that users do not lose their shopping list, it is saved in the device's local storage!"
    const yourworldP = "YourWorld is the latest project of the Start2Impact FrontEnd Developer Master. This 'SPA' allows the user to have all the latest data regarding Climate Change! For me this wasn't a simple project but a real campaign to raise awareness of the topics covered."
    const pokedexP = "Welcome to my Pokédex project made with React and Tailwind! In this project, I created a web application that acts as a digital Pokédex, allowing users to search for Pokémon and view details such as the Pokémon's picture and some key statistics."
    return (
        <main>
            <div className='flex flex-wrap justify-around gap-4 mt-[150px] ml-[10%] mr-[10%] max-md:flex-col items-center max-md:mt-[100px] max-md:mr-[2%] max-md:ml-[2%]'>

                <div data-aos="flip-down">
                    <ProjectBox
                        ProjectTitle={'01 Random Pizza'}
                        ProjectImg={RandomPizza}
                        ProjectAlt={'Random Pizza Img'}
                        ProjectParagraph={randompizzaP}
                        ProjectTech={'Html, Css, Javascript'}
                        ProjectLink={'https://riccardocacio.github.io/randompizza/'}
                    />
                </div>

                <div data-aos="flip-down">
                    <ProjectBox
                        ProjectTitle={'02 Change Color'}
                        ProjectImg={ChangeColor}
                        ProjectAlt={'Change Color Img'}
                        ProjectParagraph={randomcolorP}
                        ProjectTech={'Html, Css, Javascript'}
                        ProjectLink={'https://riccardocacio.github.io/ChangeColor/'}
                    />
                </div>

                <div data-aos="flip-down">
                    <ProjectBox
                        ProjectTitle={'03 Gameboy'}
                        ProjectImg={Gameboy}
                        ProjectAlt={'Gameboy Img'}
                        ProjectParagraph={gameboyP}
                        ProjectTech={'Html, Css, Javascript'}
                        ProjectLink={'https://riccardocacio.github.io/GameboyCounter/'}
                    />
                </div>

                <div data-aos="flip-down">
                    <ProjectBox
                        ProjectTitle={'04 City Stats'}
                        ProjectImg={CityStats}
                        ProjectAlt={'City Stats Img'}
                        ProjectParagraph={citystatsP}
                        ProjectTech={'Html, Css, Javascript, Axios'}
                        ProjectLink={'https://riccardocacio.github.io/citystats/'}
                    />
                </div>

                <div data-aos="flip-down">
                    <ProjectBox
                        ProjectTitle={'05 Shopping List'}
                        ProjectImg={ShoppingList}
                        ProjectAlt={'Shopping List Img'}
                        ProjectParagraph={shoppinglistP}
                        ProjectTech={'Html, Css, Javascript,'}
                        ProjectLink={'https://riccardocacio.github.io/shoppingList/'}
                    />
                </div>

                <div data-aos="flip-down">
                    <ProjectBox
                        ProjectTitle={'06 Yourworld'}
                        ProjectImg={Yourworld}
                        ProjectAlt={'Yourworld Img'}
                        ProjectParagraph={yourworldP}
                        ProjectTech={'Html, React, JSX, CSS, Helmet, ReactRouter, Axios, Chart.Js'}
                        ProjectLink={'https://your-world.netlify.app'}
                    />
                </div>

                <div data-aos="flip-down">
                    <ProjectBox
                        ProjectTitle={'07 Pokedex'}
                        ProjectImg={Pokedex}
                        ProjectAlt={'Pokedex Img'}
                        ProjectParagraph={pokedexP}
                        ProjectTech={'Html, React, JSX, Tailwind, Axios'}
                        ProjectLink={'https://pokedexriccardoc.netlify.app/'}
                    />
                </div>
            </div>
        </main>
    )
}

export default MainProject
