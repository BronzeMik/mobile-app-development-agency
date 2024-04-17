import Hero from "../components/Hero";
import video from '../assets/hero-video.mp4'
import QuoteSection from "../components/QuoteSection";
import WhoWeAre from "../components/WhoWeAre";
import image from '../assets/who-we-are-img.png'
import Subscribe from "../components/Subscribe";
import TrustedBy from "../components/TrustedBy";


export default function AboutUs() {
    return(
        <div className="about-us-page">
            <Hero
            style='about-us-hero'
            title='Our Story'
            content='Cupidatat proident nulla adipisicing eiusmod excepteur est voluptate officia ex exercitation adipisicing mollit. Cillum laboris'
            >
                <div className='hero-video-container'>
                    <video controls >
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
            </Hero>
            <QuoteSection
            title='Our Mission'
            content='&apos;Ex adipisicing sint occaecat tempor incididunt incididunt eu minim anim irure fugiat mi&apos;'
            />
            <WhoWeAre
            title='Who We Are'
            content='Occaecat magna do minim cillum proident sunt exercitation ut nulla sit ad ad do proident proident id tempor.'
            subTitle='Commodo dolore aliqua'
            lineOne='Aute aliqua voluptate elit in nisi'
            lineTwo='Irure do ex esse'
            lineThree='Magna aute culpa do nisi'
            image={image}
            color='#fff'
            pStyle='pStyle'
            />
            <TrustedBy />
            <Subscribe />
        </div>
    )
}
