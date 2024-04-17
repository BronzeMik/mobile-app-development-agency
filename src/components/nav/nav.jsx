import logo from '../../assets/stanley-t-is-marketing-logo.png';
import { useState } from 'react';
import NavMenu from './NavMenu';

export default function Nav() {
    const [isHidden, setIsHidden] = useState(true);

    return(

        
            <div className='nav'>
                <ul className={`${isHidden ? 'slideUp hidden' : 'slideDown'} mobile-nav`}>
                    <a href='/'><li>Home</li></a>
                    <a href='/features'><li>Features</li></a>
                    <a href='/about'><li>About Us</li></a>
                    <a href='/pricing'><li>Pricing</li></a>
                    {/* <a href='/faq'><li>FAQs</li></a> */}
                    <a href='/contact'><li>Contact Us</li></a>
                </ul>
                <div className='nav-container'>
                    <a href='/'><img src={logo} alt='Stanley T Is Marketing' className='nav-logo'/></a>
                    <NavMenu
                    style='desktop-nav'
                    />
                    
                    <a href='/contact' id='get-started-btn'>
                        <button>Get Started</button>
                    </a>
                    <a href="#" className="icon" id='hamburger' onClick={() => isHidden ? setIsHidden(false) : setIsHidden(true)}>
                        <i className="fa fa-bars"></i>
                    </a>
                </div>
            </div>
        
            
    )
}
