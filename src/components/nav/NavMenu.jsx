

export default function NavMenu({style}) {
    return(
        <>
            <ul className={style ? style : ''}>
                <a href='/'><li>Home</li></a>
                <a href='/features'><li>Features</li></a>
                <a href='/about'><li>About Us</li></a>
                <a href='/pricing'><li>Pricing</li></a>
                {/* <a href='/faq'><li>FAQs</li></a> */}
                <a href='/contact'><li>Contact Us</li></a>
            </ul>
        </>
    )
}
