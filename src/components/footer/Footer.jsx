import logo from '../../assets/stanley-t-is-marketing-logo.png'
import Email from '../Contacts/Email'
import Phone from '../Contacts/Phone'
import Socials from '../Socials'
import NavMenu from '../nav/NavMenu'

export default function Footer() {
    return(
        <footer>
            <div className="footer-container">
                <div className='footer-left'>
                    <img src={logo} alt='Stanley T Is Marketing' />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum asperiores officiis voluptas fuga, pariatur debitis earum quasi eligendi id sunt a exercitationem inventore libero delectus provident beatae dolor. Expedita, dicta.
                    </p>
                </div>
                <div className='footer-right'>
                    <div className='column-child-1'> 
                        <h2>Pages</h2>
                        <NavMenu
                        style='footer-menu'
                        />
                    </div>
                    <div className='column-child-2'>
                        <h2>Follow Us</h2>
                        <Socials
                        style='footer-socials'
                        />
                        <Phone
                        style='footer-phone'
                        mobile='tel:8005555555'
                        />
                        <Email
                        style='footer-email'
                        mobile='mail:contact@stanleytismarketing.com'
                        />
                    </div>
                </div>
               
            </div>
        </footer>
    )
}
