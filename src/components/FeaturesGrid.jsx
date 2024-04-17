import FeaturesCard from "./FeaturesCard";
import image from '../assets/features-home.png'



export default function FeaturesGrid() {
    return(
        <div className="features-grid">
            <div className="features-grid-header">
                <h2>Feature benefits</h2>
            </div>
            <div className="features-grid-container">
                <FeaturesCard
                image={image}
                header='Magna non incididunt'
                content='Occaecat culpa non culpa est eu sint deserunt elit esse dolor ea dolore ea. Sint proident ipsum'
                featureCardContainer='features-item-grid-container'
                featureCardStyle='features-grid-item'
                />
                <FeaturesCard
                image={image}
                header='Magna non incididunt'
                content='Occaecat culpa non culpa est eu sint deserunt elit esse dolor ea dolore ea. Sint proident ipsum'
                featureCardContainer='features-item-grid-container'
                featureCardStyle='features-grid-item'
                />
                <FeaturesCard
                image={image}
                header='Magna non incididunt'
                content='Occaecat culpa non culpa est eu sint deserunt elit esse dolor ea dolore ea. Sint proident ipsum'
                featureCardContainer='features-item-grid-container'
                featureCardStyle='features-grid-item'
                />
                <FeaturesCard
                image={image}
                header='Magna non incididunt'
                content='Occaecat culpa non culpa est eu sint deserunt elit esse dolor ea dolore ea. Sint proident ipsum'
                featureCardContainer='features-item-grid-container'
                featureCardStyle='features-grid-item'
                />
            </div>
        </div>
    )
}
