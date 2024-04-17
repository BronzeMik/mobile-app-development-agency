


export default function Phone({style, mobile}) {
    return(
        <div className={`${style ? style : ''} contact-phone`}>
            <i className="fa fa-phone" />
            <a href={mobile}><p>+1 800 - 555 -5555 </p></a>
        </div>
    )
}
