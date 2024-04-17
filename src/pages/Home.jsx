import AboutUsVid from "../components/AboutUsVideo";
import CustomerReviews from "../components/CustomerReviews";
import Faq from "../components/Faq";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Subscribe from "../components/Subscribe";

export default function Home() {
    return(
        <>
            <Hero 
            title='Transforming Ideas into Exceptional Mobile Experiences'
            content='Whether you&apos;re a startup venturing into the digital realm or an established enterprise seeking to amplify your online presence, we&apos;re here to guide you through every step of the journey.'
            btn1='Start Boosting Your Sales!'
            />
            <AboutUsVid
            Title='About Us'
            subTitle='Learn More'
            bgstyle='about-us-bg-color'
            />
            <Features />
            <CustomerReviews />
            <Faq />
            <Subscribe />
        </>
    )
}
