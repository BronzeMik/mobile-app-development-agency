import { FaCheck } from "react-icons/fa";



export default function PricingCard({packageName, description, price, btn, featureOne, featureTwo, featureThree, recommended}) {
    return(
        <div className="pricing-card">
            <div className="pricing-card-container">
                <div className="header">
                    <div className='title'>
                        <h3>{packageName}</h3>
                        {recommended ? <p className='recommended'>recommended</p> : ''}
                    </div>
                    <p>{description}</p>
                </div>
                <div className="price-card">
                    <p className=''>{price}</p>
                    <a href='#'>
                        <button>
                            {btn}
                        </button>
                    </a>
                    <p style={{textAlign: 'left', fontSize: '1.3em'}}>Features</p>
                    <div className="price-feature">
                        <FaCheck />
                        <p>
                            {featureOne}
                        </p>
                    </div>
                    <div className="price-feature">
                        <FaCheck />
                        <p>
                            {featureTwo}
                        </p>
                    </div>
                    <div className="price-feature">
                        <FaCheck />
                        <p>
                            {featureThree}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
