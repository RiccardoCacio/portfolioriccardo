import React, { useEffect } from 'react'
import ParagraphBox from './ParagraphBox'
import AOS from 'aos';
import 'aos/dist/aos.css';



const MainHome = () => {
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
            duration: 700, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, []);

    // About Me 
    const aboutMe = '01 About Me'
    const aboutMeParagraph = "I am Riccardo Cacio, a young front-end developer living in Fabro, a small town in Umbria. Thanks to the Front-end Developer Master's program at Start2Impact University, I have had the opportunity to study and gain extensive knowledge in the world of web development. What's more, I've had the privilege of working on practical projects that have undoubtedly accelerated my learning curve. This hands on experience has allowed me to apply my skills and expand my portfolio while tackling real-world challenges.I am passionate about creating responsive and user-friendly web applications, and I'm always excited to take on new and innovative projects."

    // Skills
    const skills = '02 Skills'
    const skillsParagraph = "In my Master's program at Start2Impact, I've acquired a strong skill set essential for web development, including expertise in HTML, CSS, and JavaScript, which form the foundation of web development. I also have practical experience with popular front-end libraries and frameworks like React, along with proficiency in using CSS frameworks like Tailwind CSS and Bootstrap to create responsive and visually appealing user interfaces. I'm knowledgeable in content management systems like WordPress and possess design skills, utilizing tools like Canva to create visually engaging graphics and layouts. This diverse skill set allows me to excel in various aspects of web development, from building interactive web applications to designing captivating user interfaces."

    return (
        <main className='pr-[10%] mb-[100px] pl-[10%] flex flex-wrap justify-center gap-[100px] max-md:pr-[5%] max-md:pl-[5%] max-md:gap-[50px]'>
            <div data-aos="flip-left">
                <ParagraphBox titleP={aboutMe} paragraph={aboutMeParagraph} />
            </div>
            <div data-aos="flip-right">
                <ParagraphBox titleP={skills} paragraph={skillsParagraph} />
            </div>
        </main>
    )
}
export default MainHome
