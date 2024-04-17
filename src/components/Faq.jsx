
import image from '../assets/faq-img.png'
import Panel from './Panel'


export default function Faq() {


    return(
        <div className="home-faq-section">
            <div className='home-faq-header'>
                    <p>Have Questions?</p>
                    <h2 className='header-faq-header-h2'>Learn More with FAQs</h2>
            </div>
            <div className="home-faq-container">
                <div className="home-faq-img">
                    <img src={image} alt="faq" className="faq-img" />
                </div>
                <div className='home-faqs'>
                     <Panel
                     title='What platforms does Stanley T Is Marketing develop apps for?'
                     paragraph='Stanley T Is Marketing specializes in developing mobile applications for both iOS (iPhone/iPad) and Android platforms.'
                     />
                     <Panel
                     title='Do you provide maintenance and support services post-launch?'
                     paragraph='Yes, we offer comprehensive maintenance and support services post-launch to ensure the smooth operation and continuous improvement of the app.'
                     />
                     <Panel
                     title='How does you ensure app security?'
                     paragraph='We follow industry best practices for app security, including data encryption, secure authentication mechanisms, and regular security audits to identify and mitigate potential vulnerabilities.'
                     />
                     <Panel
                     title='What level of involvement can clients expect during the app development process?'
                     paragraph='We encourage active client participation and collaboration throughout the app development process, ensuring that client feedback and input are incorporated into the final product.'
                     />
                     <Panel
                     title='Can you assist with app monetization strategies?'
                     paragraph='Yes, we offer expertise in app monetization strategies, including in-app purchases, subscription models, advertising, and other revenue-generating opportunities.'
                     />
                     
                </div>
            </div>
            <a href='#'>
                <button className='home-faqs-btn'>More FAQs</button>
            </a>
        </div>
    )
}
