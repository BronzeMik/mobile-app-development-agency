


export default function Email({style, mobile}) {
    return(
        <div className={`${style ? style : ''} contact-email`}>
            <i className="fa fa-envelope"></i>
            <a href={mobile}><p>contact@stanleytismareting.com</p></a>
        </div>
    )
}
