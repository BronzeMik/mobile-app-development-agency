


export default function Hero({style, title, content, btn1, btn2, btn1Style, btn2Style, children}) {
    return(
        <div className={`${style ? style : ''} hero`}>
            <div className="hero-container">
                <div className="hero-content">
                    <h2>{title ?? title}</h2>
                    <p>
                     {content ?? content}
                    </p>
                    <div className="hero-btn-container">
                        <a href='#'>
                           {btn1 ? <button className={`${btn1Style ? btn1Style : 'hero-btn'}`}>{btn1}</button>: ''} 
                            
                        </a>
                        <a href='#'>
                            {btn2 ? <button className={`${btn1Style ? btn1Style : 'hero-btn'}`}>{btn2}</button> : ''}
                        </a>
                    </div>                    
                </div>
                {children}
            </div>
        </div>
    )
}
