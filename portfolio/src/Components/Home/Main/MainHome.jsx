import React, { useState } from 'react';
import ListElement from './Components/ListElement';
import FingerBallCut from '../../../video/fingerBallCut.mp4'
import FingerBallCut2 from '../../../video/fingerBallCut2.mp4'
import ResponsiveListElement from './Components/ResponsiveListElement';



const MainHome = () => {
    //state change on click (function firstHandleClick())
    const [firstClick, setFirstClick] = useState(false);
    //state change on click (function firstHandleClick())
    const [secondVideo, setSecondVideo] = useState(false);
    //Title && Paragraph number
    const [sectionNumber, setSectionNumber] = useState(1);

    //title
    const titleVariants = {
        1: 'About Me',
        2: 'My Skills',
        3: 'My Goals',
        4: 'This Portfolio',
        5: 'Collaborations',
        6: 'Blog',
    }
    //paragraph
    const paragraphVariants = {
        1: "Hi, I'm Riccardo, a 26 year old junior front end developer. After a few years in the hospitality industry, I decided to change careers and dedicate myself to web development. I completed a master's degree in front end development with Start2Impact, where I acquired solid skills in HTML, CSS, JavaScript and React, working on real projects under the guidance of industry professionals. Later, I had the opportunity to do a training internship at B4next, where I expanded my knowledge with technologies such as C#, .NET and SQL and NoSQL databases(such as MySQL and Cosmos DB). During this period, I also had the opportunity to work with WordPress and Elementor for web content management. These experiences gave me a complete vision of the development process, from front-end to back-end, enriching my professional path.",
        2: "In my career path, I have developed skills in various fundamental technologies for front-end web development. I have gained experience in using HTML and CSS to create responsive and modern interfaces, while with JavaScript and React I implement interactive and dynamic features. In addition, thanks to my experience at B4next, I have expanded my knowledge in the back-end, working with C# and .NET, and I have become familiar with SQL and NoSQL databases, such as MySQL and Cosmos DB. Furthermore, I have worked with CMS such as WordPress combined with Elementor, allowing me to manage web content effectively. The technologies I interface with include: Frontend: HTML, CSS, Bootstrap, Tailwind, JavaScript, React Backend: C#, .NET Database: MySQL, Cosmos DB",
        3: "My main goals are to grow as a front end developer, continuing to explore new technologies and honing the skills I already have. I believe in the importance of continuous learning and am committed to staying up to date with the latest trends in the web development industry. In the long term, I want to work on challenging projects that allow me to express my creativity and tackle increasingly complex challenges. I am particularly interested in web accessibility and usability, so that my projects are inclusive and easy to use for everyone. Ultimately, my ambition is to create websites that are not only functional, but that engage users and leave a lasting impression.",
        4: "This portfolio was developed with React and Tailwind, technologies that reflect my approach to a simple yet beautiful style. It is an ever-evolving platform, where I add new projects and make updates to the style and structure. Each section is designed to highlight the skills I have acquired and the progress I continue to make in the field of web development.",
        5: "I am always open to new collaborations, both with companies and individuals. Whether it is to discuss new opportunities or simply to network, I am available for a discussion. I would also like to work on group projects and contribute my skills in collaborative initiatives, always with the aim of growing and bringing added value. If you are interested in collaborating or exchanging ideas, do not hesitate to contact me!",
        6: 'Coming soon..',
    }

    //responsive paragraph
    const responsiveParagraphVariants = {
        1: "Hi, I'm Riccardo, a 26-year-old junior front-end developer. After a career shift from hospitality, I completed a front-end development master's at Start2Impact, gaining solid skills in HTML, CSS, JavaScript, and React. I then interned at B4next, where I expanded my knowledge with C#, .NET, and databases like MySQL and Cosmos DB, along with WordPress and Elementor. These experiences have enriched my understanding of both front-end and back-end development.",
        2: "I have experience in front-end technologies like HTML, CSS, JavaScript, React, and Tailwind. At B4next, I also gained back-end skills with C#, .NET, and databases like MySQL and Cosmos DB, as well as CMS platforms like WordPress with Elementor. Key technologies: Frontend: HTML, CSS, Bootstrap, Tailwind, JavaScript, React; Backend: C#, .NET; Database: MySQL, Cosmos DB.",
        3: "My goal is to grow as a front-end developer, exploring new technologies and tackling complex challenges. I'm passionate about web accessibility and usability, aiming to create functional, engaging, and inclusive websites.",
        4: "This portfolio was developed with React and Tailwind, technologies that reflect my approach to a simple yet beautiful style. It is an ever-evolving platform, where I add new projects and make updates to the style and structure. Each section is designed to highlight the skills I have acquired and the progress I continue to make in the field of web development.",
        5: "I'm open to collaborations with companies and individuals. Whether it’s for new opportunities or networking, feel free to contact me to discuss ideas a,nd projects.",
        6: "Coming soon...",
    }



    return (
        <>
            <main className={`max-xl:hidden flex w-full mt-16 p-20 gap-14 justify-between`}>
                <div className={`max-xl:hidden flex w-full bg-[#fee2c6] rounded-3xl shadow-2xl`}>
                    <ul className='p-10 w-full'>
                        <ListElement
                            elementNumber={1}
                            listElementTitle={'01 About Me'}
                            hoverColor={'orange'}
                            updateClick={setFirstClick}
                            changeVideo={setSecondVideo}
                            firstClick={firstClick}
                            setSectionNumber={setSectionNumber}
                        />
                        <ListElement
                            elementNumber={2}
                            listElementTitle={'02 My Skills'}
                            hoverColor={'orange2'}
                            updateClick={setFirstClick}
                            changeVideo={setSecondVideo}
                            firstClick={firstClick}
                            setSectionNumber={setSectionNumber}
                        />
                        <ListElement
                            elementNumber={3}
                            listElementTitle={'03 My Goals'}
                            hoverColor={'orange3'}
                            updateClick={setFirstClick}
                            changeVideo={setSecondVideo}
                            firstClick={firstClick}
                            setSectionNumber={setSectionNumber}
                        />
                        <ListElement
                            elementNumber={4}
                            listElementTitle={'04 This Portfolio'}
                            hoverColor={'orange4'}
                            updateClick={setFirstClick}
                            changeVideo={setSecondVideo}
                            firstClick={firstClick}
                            setSectionNumber={setSectionNumber}
                        />
                        <ListElement
                            elementNumber={5}
                            listElementTitle={'05 Collaborations'}
                            hoverColor={'orange5'}
                            updateClick={setFirstClick}
                            changeVideo={setSecondVideo}
                            firstClick={firstClick}
                            setSectionNumber={setSectionNumber}
                        />
                        <ListElement
                            elementNumber={6}
                            listElementTitle={'06 Blog'}
                            hoverColor={'orange6'}
                            updateClick={setFirstClick}
                            changeVideo={setSecondVideo}
                            firstClick={firstClick}
                            setSectionNumber={setSectionNumber}
                        />
                    </ul>
                </div>

                <div className={`max-xl:hidden h-[550px] overflow-hidden hover:overflow-scroll rounded-3xl bg-[#f3ede2] shadow-2xl ${firstClick === false ? 'w-2/6' : 'w-full ease-in-out duration-1000'}`}>
                    {/* paragraph */}
                    <div className={`${firstClick === false ? 'hidden' : 'block'} p-10 `}>
                        <h2 className='text-orange-400 text-4xl font-bold text-left mb-3'>{titleVariants[sectionNumber]}</h2>
                        <h3 className='max-lg:text-red-600 text-[22px] font-medium text-left'>{paragraphVariants[sectionNumber]}</h3>
                    </div>
                    {/* video */}
                    {secondVideo === false ? <video src={FingerBallCut}
                        autoplay="{true}" loop muted
                        className={`${firstClick == true ? 'hidden' : 'block'} h-[550px] rounded-3xl transform scaley(-1) `}>
                    </video> :
                        <video src={FingerBallCut2}
                            autoplay="{true}" loop muted
                            className="h-[550px] rounded-3xl transform scaley(-1)">
                        </video>
                    }
                </div>


            </main >

            {/* responsive */}
            <main className='flex flex-wrap gap-10 justify-center items-center mt-20'>
                <ResponsiveListElement
                    title={"01 About Me"}
                    paragraph={responsiveParagraphVariants[1]}
                />
                <ResponsiveListElement
                    title={"02 My Skills"}
                    paragraph={responsiveParagraphVariants[2]}
                />
                <ResponsiveListElement
                    title={"03 My Goals"}
                    paragraph={responsiveParagraphVariants[3]}
                />
                <ResponsiveListElement
                    title={"04 This Portfolio "}
                    paragraph={responsiveParagraphVariants[4]}
                />
                <ResponsiveListElement
                    title={"05 Collaborations"}
                    paragraph={responsiveParagraphVariants[5]}
                />
                <ResponsiveListElement
                    title={"06 Blog"}
                    paragraph={responsiveParagraphVariants[6]}
                />
            </main>

        </>
    );
};

export default MainHome;
