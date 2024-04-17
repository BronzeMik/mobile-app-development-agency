


export default function WhoWeAre({title, subTitle, content, color, lineOne, lineTwo, lineThree, image, pStyle}) {
    return(
        <div className="who-we-are">
            <div className="who-we-are-container">
                <div className="who-we-are-content">
                    <h2>{title}</h2>
                    <h4>{subTitle}</h4>
                    <p className={pStyle ? pStyle : ''}>{content}</p>
                    <hr
                    style={{
                        color: color,
                        borderColor: color,
                        backgroundColor: color,
                        height: 1
                    }}
                    />
                    <p>{lineOne}</p>
                    <hr
                    style={{
                        color: color,
                        borderColor: color,
                        backgroundColor: color,
                        height: 1
                    }}
                    />
                    <p>{lineTwo}</p>
                    <hr
                    style={{
                        color: color,
                        borderColor: color,
                        backgroundColor: color,
                        height: 1
                    }}
                    />
                    <p>{lineThree}</p>
                </div>
                <div className="who-we-are-img">
                    <img src={image} alt='who we are' />
                </div>
            </div>
        </div>
    )
}
