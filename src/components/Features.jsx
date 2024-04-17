import FeaturesCard from "./FeaturesCard";
import image1 from '../assets/features-home.png'
import image2 from '../assets/features-home1.png'
import image3 from '../assets/features-home3.png'


export default function Features() {
    return(
        <div className="features">
            <div className="features-container">
                <p>Learn more</p>
                <h2>Features Spotlight</h2>
                <div className="cards-container-home">
                    <FeaturesCard
                    header='Push Notification'
                    content='Utilize push notifications strategically to keep users informed about updates, promotions, and relevant content, increasing user engagement and retention.'
                    image={image1}
                    />
                    <FeaturesCard
                    header='Social Sharing'
                    content='Enable users to easily share their experiences, achievements, and content from the app on social media platforms, fostering user-generated content and community engagement.'
                    image={image2}
                    />
                    <FeaturesCard
                    header='Personalized Experience'
                    content='Implement features like user profiles, preferences, and behavior tracking to deliver tailored content and recommendations, keeping users engaged.'
                    image={image3}
                    />
                </div>
                <a href='#'>
                    <button>Learn More</button>
                </a>
            </div>
        </div>
    )
}
