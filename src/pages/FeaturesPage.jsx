import FeaturesBlock from "../components/FeaturesBlock";
import Hero from "../components/Hero";
import { GoDash } from "react-icons/go";
import { AiOutlineAreaChart } from "react-icons/ai";
import { FaUserCheck } from "react-icons/fa";
import Subscribe from "../components/Subscribe";
import CountUp from 'react-countup';
import AboutUsVid from "../components/AboutUsVideo";
import BlogListSection from "../components/BlogListSection";
import FeaturesGrid from "../components/FeaturesGrid";




export default function FeaturesPage() {
    
    return(
        <div className="features-page">
            <Hero
            style='features-hero'
            title='Over 100+ Features'
            content='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo, nostrum a impedit voluptatibus placeat fugiat nisi necessitatibus inventore, quod eaque ipsa sapiente tenetur asperiores rerum facere, perferendis alias earum?'
            btn1='Learn More'
            btn2='Contact Us'
            btn1Style='features-hero-btn'
            btn2Style='features-hero-btn'
            />
            <section className="features-block-section">
                <FeaturesBlock
                title='Cross Platforms'
                content='Cross-platform mobile app development offers numerous benefits for businesses seeking to reach a wider audience and reduce development costs. By leveraging frameworks like React Native or Flutter, our developers can write code once and deploy it across multiple platforms, including iOS and Android.'
                >
                    <div className="features-block-children1">
                        <GoDash />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="features-block-children1">
                        <GoDash />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="features-block-children1">
                        <GoDash />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </FeaturesBlock>
                <FeaturesBlock
                title='Consistent User Experience'
                content='With cross-platform development, we can ensure a consistent user experience across different devices and platforms, which is essential for building brand loyalty and retaining users.'
                >
                <div className="features-block-children2-container">
                    <div className="features-block-children2">
                        <div className="features-block-children2-content">
                            <AiOutlineAreaChart />
                            <p>National & International</p>
                        </div>
                        <div className="features-block-children2-content-p" id='counter'>
                            <p>+<span><CountUp end={55} enableScrollSpy/></span></p>
                        </div>
                    </div>
                    <div className="features-block-children2">
                        <div className="features-block-children2-content">
                            <FaUserCheck />
                            <p>High Speed Uptime</p>
                        </div>
                        <div className="features-block-children2-content-p" id='counter'>
                            <p>+<span><CountUp end={99} enableScrollSpy/></span>%</p>
                        </div>
                    </div>
                </div>
                </FeaturesBlock>
            </section>
            <FeaturesGrid />
            <AboutUsVid 
            Title='How It Works'
            subTitle='Get Started'
            />

            {/* <BlogListSection /> */}
            <Subscribe />
        </div>
    )
}
