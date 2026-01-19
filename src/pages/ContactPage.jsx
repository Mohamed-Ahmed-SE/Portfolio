import React, { useEffect } from "react";
import Navbar from "../sections/Navbar";
import ContactHero from "../sections/contact/ContactHero";
import ContactForm from "../sections/contact/ContactForm";

const ContactPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-white min-h-screen flex flex-col justify-between">
            <div>
                <Navbar />
                <ContactHero />
                <ContactForm />
            </div>
            {/* SocialsLocation integrated into ContactForm */}
        </div>
    );
};

export default ContactPage;
