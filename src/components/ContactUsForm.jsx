


export default function ContactUsForm() {
    return(
        <div className="contact-us-form">
            <div className="contact-us-form-container">
                <form action="https://api.web3forms.com/submit" method='POST'>
                    <input type="hidden" name="access_key" value="8dadd288-9210-40e6-ad7b-51d8a4759866" />
                    <h2>Contact Us</h2>
                    <label htmlFor="name">Name</label><br/>
                    <input type="text" id='name' name='name' required placeholder="Enter your name"/><br/>
                    <label htmlFor="email">Email</label><br/>
                    <input type="email" id='email' name='email' placeholder="your@email.com" required /><br/>
                    <label htmlFor="questions">Questions</label><br/>
                    <textarea name="questions" id="questions" placeholder="Enter questions or feedback" cols="50" rows="10"></textarea>
                    <button type="submit" className="hero-btn">CONTACT US</button>
                </form>
            </div>
        </div>
    )
}
