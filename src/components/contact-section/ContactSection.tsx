import React from 'react'
import CtaButton from '../cta-button/CtaButton'
import './ContactSection.scss'

const ContactSection = () => {
    return (
        <div className="ContactSection">
            <h3 className="ContactSection__Title">Kontakta oss idag</h3>
            <p className="ContactSection__Text">Låt oss Bygga något bra tillsammans</p>
            <CtaButton width="medium" />
        </div>
    )
}

export default ContactSection