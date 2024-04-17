import image from '../assets/subscribe-img.png'


export default function Subscribe() {
    return(
        <div className="subscribe-section">
            <div className="subscribe-container">
                <div className="subscribe-content">
                    <h3>Get Exclusive Deals & Offers</h3>
                    <p>Subscribe to our newsletter</p>
                    <form action='' method=''>
                        <input type='text' name='email' placeholder="email" />
                        <input type='submit' name='Subscribe' value='Subscribe' />
                    </form>
                </div>
                <div className="subscribe-img">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
