import { useState } from "react";
import PricingCard from "./PricingCard";



export default function PricingGrid() {
    const [pricing, setPricing] = useState(true);

    const handleClick = () => {
        if(pricing) {
            setPricing(false)
        } else{
            setPricing(true)
        }
    }
    return(
        <div className="pricing-grid-section">
            <div className="pricing-grid-container">
            <header className="pricing-page-header">
                <h1>Choose Your Plan</h1>
                <div className='pricing-btn-container'>
                    <button onClick={handleClick} className={pricing ? 'selected' : ''}>Monthly</button>
                    <button onClick={handleClick} className={!pricing ? 'selected' : ''}>Annual</button>
                </div>
            </header>
            <div className="pricing-grid">
                <PricingCard
                packageName='Starter'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, numquam.'
                price='FREE'
                btn='Join For Free'
                featureOne='Anim magna proident'
                featureTwo='Voluptate labore fugiat amet '
                featureThree='Cillum dolore sit cillum'
                recommended={false}
                />
                <PricingCard
                packageName='Pro'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, numquam.'
                price={pricing ? '$299/mo' : '$1,000/yr'}
                btn='Start Now'
                featureOne='Anim magna proident'
                featureTwo='Voluptate labore fugiat amet '
                featureThree='Cillum dolore sit cillum'
                recommended={true}
                />
                <PricingCard
                packageName='Business'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, numquam.'
                price={pricing ? '$599/mo' : '$2,000/yr'}
                btn='Get Started'
                featureOne='Anim magna proident'
                featureTwo='Voluptate labore fugiat amet '
                featureThree='Cillum dolore sit cillum'
                recommended={false}
                />
            </div>
            </div>
        </div>
    )
}
