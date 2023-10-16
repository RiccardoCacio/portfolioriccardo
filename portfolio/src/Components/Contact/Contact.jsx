import React, { useReducer, useState } from 'react'
import NavbarContact from './NavbarContact/NavbarContact'
import ContactMain from './Main/ContactMain'
import ContactFooter from './Footer/ContactFooter'

const Contact = () => {
    return (
        < div className='' >
            <NavbarContact />
            <ContactMain />
            <ContactFooter />
        </div >
    )
}

export default Contact
