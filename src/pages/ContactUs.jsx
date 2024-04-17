import ContactUsForm from "../components/ContactUsForm";
import img from '../assets/contact-us-bg.svg';
import Hero from "../components/Hero";
import IconGridTwo from "../components/IconGridTwo";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";



export default function ContactUs() {
    return(
        <div className="contact-us-page">
            <div className="contact-us-page-hero-container">
                <Hero
                title='Have Questions? Drop Us a Line'
                style='contact-us-page-hero'>
                    <div className="contact-us-hero-icon-container">
                        <IconGridTwo
                        content='Cleveland, OH'>
                            <IoLocation />
                        </IconGridTwo>
                        <IconGridTwo
                        content='216-465-5346'>
                            <IoLocation />
                        </IconGridTwo>
                        <IconGridTwo
                        content='contact@stanleytismarketing.com'>
                            <MdEmail />
                        </IconGridTwo>
                    </div>
                    
                </Hero>
            </div>
            <div className="contact-us-page-container">
                <div className="contact-us-page-form">
                    <ContactUsForm />
                    <div className="contact-us-img">
                        <img src={img} alt='contact us' />
                    </div>
                </div>
            </div>
        </div>
    )
}
