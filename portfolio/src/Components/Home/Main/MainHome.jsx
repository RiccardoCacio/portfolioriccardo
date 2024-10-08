import React, { useState } from 'react';




const MainHome = () => {

    //title
    const titleVariants = {
        1: '01 About Me',
        2: '02 My Skills',
        3: '03 My Goals',
        4: '04 This Portfolio',
        5: '05 Collaborations',
        6: '06 Blog',
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
        <main className='max-md:pl-5 max-md:pr-5 max-lg:pl-10 max-lg:pr-10 pl-72 pr-72 relative mt-52'>
            {/*  */}
            <div className={`max-md:min-h-[500px] max-md:justify-start max-lg:min-h-[500px] max-lg:justify-start min-h-[600px] sticky top-[100px] mb-10 rounded-3xl bg-[#ff7000] shadow-2xl flex flex-col justify-start items-center self-center object-center`}>
                <div className={`p-4 text-center`}>
                    <h2 className='text-white text-3xl font-bold text-center mb-3'>{titleVariants[1]}</h2>
                    <h3 className='max-md:hidden text-[20px] font-medium text-center'>{paragraphVariants[1]}</h3>
                    {/* responsive text */}
                    <h3 className='text-[19px] font-medium text-center'>{responsiveParagraphVariants[1]}</h3>

                </div>
            </div>
            {/* */}
            <div className={`max-md:min-h-[500px] max-md:justify-start max-md:top-[160px] max-lg:min-h-[500px] max-lg:justify-start min-h-[600px] sticky top-[160px] mb-10 rounded-3xl bg-[#ff7900] shadow-2xl flex flex-col justify-start items-center self-center object-center`}>
                <div className={`p-4 text-center`}>
                    <h2 className='text-white text-3xl font-bold text-center mb-3'>{titleVariants[2]}</h2>
                    <h3 className='max-md:hidden text-[20px] font-medium text-center'>{paragraphVariants[2]}</h3>
                    {/* responsive text */}
                    <h3 className='text-[19px] font-medium text-center'>{responsiveParagraphVariants[2]}</h3>
                </div>
            </div>
            {/**/}
            <div className={`max-md:min-h-[500px] max-md:justify-start max-lg:min-h-[500px] max-lg:justify-start min-h-[600px] sticky top-[220px] mb-10 rounded-3xl bg-[#ff8000] shadow-2xl flex flex-col justify-start items-center self-center object-center`}>
                <div className={`p-4 text-center`}>
                    <h2 className='text-white text-3xl font-bold text-center mb-3'>{titleVariants[3]}</h2>
                    <h3 className='max-md:hidden text-[20px] font-medium text-center'>{paragraphVariants[3]}</h3>
                    {/* responsive text */}
                    <h3 className='text-[19px] font-medium text-center'>{responsiveParagraphVariants[3]}</h3>
                </div>
            </div>

            {/**/}
            <div className={`max-md:min-h-[500px] max-md:justify-start max-lg:min-h-[500px] max-lg:justify-start min-h-[600px] sticky top-[280px] mb-10 rounded-3xl bg-[#ff9800] shadow-2xl flex flex-col justify-start items-center self-center object-center`}>
                <div className={`p-4 text-center`}>
                    <h2 className='text-white text-3xl font-bold text-center mb-3'>{titleVariants[4]}</h2>
                    <h3 className='max-md:hidden text-[20px] font-medium text-center'>{paragraphVariants[4]}</h3>
                    {/* responsive text */}
                    <h3 className='text-[19px] font-medium text-center'>{responsiveParagraphVariants[4]}</h3>
                </div>
            </div>
            {/* 
 */}
            <div className={`max-md:min-h-[500px] max-md:justify-start max-lg:min-h-[500px] max-lg:justify-start min-h-[600px] sticky top-[340px] mb-10 rounded-3xl bg-[#FFA500] shadow-2xl flex flex-col justify-start items-center self-center object-center`}>
                <div className={`p-4 text-center`}>
                    <h2 className='text-white text-3xl font-bold text-center mb-3'>{titleVariants[5]}</h2>
                    <h3 className='max-md:hidden text-[20px] font-medium text-center'>{paragraphVariants[5]}</h3>
                    {/* responsive text */}
                    <h3 className='text-[19px] font-medium text-center'>{responsiveParagraphVariants[5]}</h3>
                </div>
            </div>
            <div className={`max-md:justify-start max-md:mb-42 max-lg:min-h-[480px] min-h-[570px] max-lg:justify-start max-lg:mb-16 sticky top-[380px] mb-32 rounded-3xl bg-[#FFB100] shadow-2xl flex flex-col justify-start items-center self-center object-center`}>
                <div className={`p-4 text-center`}>
                    <h2 className='text-white text-3xl font-bold text-center mb-3'>{titleVariants[6]}</h2>
                    <h3 className='max-md:min-h-[260px] text-[20px] font-medium text-center mb-32'>{paragraphVariants[6]}</h3>
                </div>
            </div>

        </main>
    );
};

export default MainHome;
