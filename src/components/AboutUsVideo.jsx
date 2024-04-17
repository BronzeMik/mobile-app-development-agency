
import video from '../assets/hero-video.mp4'

export default function AboutUsVid({subTitle, Title, bgstyle}) {
    return(
        <div className={`${bgstyle ? bgstyle : ''} about-us-video`}>
            <div className="about-us-video-container">
                <p>{subTitle}</p>
                <h2>{Title}</h2>
                <div className='hero-video-container'>
                    <video controls >
                        <source src={video} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}
