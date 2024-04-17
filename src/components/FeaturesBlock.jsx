


export default function FeaturesBlock({title, content, children}) {
    return(
        <div className="features-block">
            <h2>{title}</h2>
            <p>{content}</p>
            {children}
        </div>
    )
}
