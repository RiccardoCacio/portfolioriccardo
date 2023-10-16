import React, { useState, useEffect } from 'react'
import MessageBox from './MessageBox'
import 'aos/dist/aos.css';
import AOS from 'aos';

const ContactMain = () => {
    const [whatTime, setWhatTime] = useState()
    // DATE
    const date = new Date()
    const hour = date.getHours();
    const Minutes = date.getMinutes();

    // SETDATE
    useEffect(() => {
        if (Minutes >= 10) {
            setWhatTime(hour + ':' + Minutes);
        } else {
            setWhatTime(hour + ':' + '0' + Minutes);
        }
    }, [])


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
            offset: 100, // offset (in px) from the original trigger point
            delay: 0, // values from 0 to 3000, with step 50ms
            duration: 1000, // values from 0 to 3000, with step 50ms
            easing: 'ease', // default easing for AOS animations
            once: false, // whether animation should happen only once - while scrolling down
            mirror: false, // whether elements should animate out while scrolling past them
            anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

        });
    }, []);

    return (
        <div className='mt-[110px]'>
            <div data-aos="fade-right">
                <MessageBox
                    MessageText='Hi!'
                    MessageTime={whatTime}
                />
            </div>

            <div data-aos="fade-right">
                <MessageBox
                    MessageText='Do you wanna contact Me?!'
                    MessageTime={whatTime}
                />
            </div>
            <div data-aos="fade-right">
                <MessageBox
                    MessageText={<a className='hover:text-orange-500 text-[#3074f2]' href='mailto:riccardo1918@live.it'>Click Here to send me a mail!</a>}
                    MessageTime={whatTime}
                />
            </div>
            <div data-aos="fade-right">
                <MessageBox
                    MessageText='Do you want see my social profiles?'
                    MessageTime={whatTime}
                />
            </div>
            <div data-aos="fade-right">
                <MessageBox
                    MessageText={<a className='hover:text-orange-500 text-[#3074f2]' href='https://www.linkedin.com/in/riccardo-cacio-98713017a/' target='_blank'>My Linkedin Profile.</a>}
                    MessageTime={whatTime} profili social
                />
            </div>
            <div data-aos="fade-right">
                <MessageBox
                    MessageText={<a className='hover:text-orange-500 text-[#3074f2]' href='https://github.com/RiccardoCacio' target='_blank'>My GitHub Profile.</a>}
                    MessageTime={whatTime}
                />
            </div>

            <div data-aos="fade-right">
                <MessageBox
                    MessageText='Thanks for visiting my portfolio!'
                    MessageTime={whatTime}
                />
            </div>

            <div data-aos="fade-right">
                <MessageBox
                    MessageText='If you want to contact me I will be happy to answer you!'
                    MessageTime={whatTime}
                />
            </div>

            <div data-aos="fade-right" className='mb-[100px]'>
                <MessageBox
                    MessageText='Have a nice day!'
                    MessageTime={whatTime}
                />
            </div>
        </div>
    )
}

export default ContactMain
