

export default function FeaturesCard({image, header, content, featureCardContainer, featureCardStyle}) {
    return(
        <div>
            <div className={`${featureCardContainer ? featureCardContainer : "features-card"}`}>
                <div className={`${featureCardStyle ? featureCardStyle : 'features-card-container'}`}>
                    <img src={image} alt='feature' />
                    <div className="features-card-content">
                        <h2>{header}</h2>
                        <p>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
