


export default function QuoteSection({title, content}) {
    return(
        <div className="quote-section">
            <div className="quote-section-content">
                <h2>{title}</h2>
                <p>{content}</p>
            </div>
        </div>
    )
}
