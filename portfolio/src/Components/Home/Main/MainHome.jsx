import React, { useEffect, useLayoutEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ParagraphBox from './ParagraphBox';


const MainHome = () => {


    useEffect(() => {
        AOS.refresh();
    }, []);

    useEffect(() => {
        AOS.init({
            offset: 120,
            delay: 0,
            duration: 700,
            easing: 'ease',
            once: false,
            mirror: false,
            anchorPlacement: 'top-bottom',
        });
    }, []);

    // About Me 
    const aboutMe = '01 About Me';
    const aboutMeParagraph = "I am Riccardo Cacio, a young front-end developer living in Fabro, a small town in Umbria. Thanks to the Front-end Developer Master's program at Start2Impact University, I have had the opportunity to study and gain extensive knowledge in the world of web development. What's more, I've had the privilege of working on practical projects that have undoubtedly accelerated my learning curve. This hands on experience has allowed me to apply my skills and expand my portfolio while tackling real-world challenges. I am passionate about creating responsive and user-friendly web applications, and I'm always excited to take on new and innovative projects.";

    // Skills
    const skills = '02 Skills';
    const skillsParagraph = "In my Master's program at Start2Impact, I've acquired a strong skill set essential for web development, including expertise in HTML, CSS, and JavaScript, which form the foundation of web development. I also have practical experience with popular front-end libraries and frameworks like React, along with proficiency in using CSS frameworks like Tailwind CSS and Bootstrap to create responsive and visually appealing user interfaces. I'm knowledgeable in content management systems like WordPress and possess design skills, utilizing tools like Canva to create visually engaging graphics and layouts. This diverse skill set allows me to excel in various aspects of web development, from building interactive web applications to designing captivating user interfaces.";

    return (
        <main className='pr-[10%] mb-[100px] mt-16 pl-[10%] flex flex-wrap justify-center gap-[100px] max-md:pr-[5%] max-md:pl-[5%] max-md:gap-[50px]'>
            <div data-aos="flip-left">
                <ParagraphBox titleP={aboutMe} paragraph={aboutMeParagraph} />
            </div>
            <div data-aos="flip-right">
                <ParagraphBox titleP={skills} paragraph={skillsParagraph} />
            </div>
        </main>
    );
};

export default MainHome;
