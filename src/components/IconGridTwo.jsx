

export default function IconGridTwo({children, content, style}) {
    return(
        <div className={`${style ? style : ''} contact-phone`}>
           {children}
            <p>{content}</p>
        </div>
    )
}
