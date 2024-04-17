

export default function BlogCard({sectionStyle, imgStyle, title, topic, date}) {
    return(
        <div className={`${sectionStyle ? sectionStyle : 'blog-card-section'}`}>
            <div className={`${imgStyle ? imgStyle : 'blog-card-img'}`}></div>
            <div className="blog-card-content">
                <div className="blog-card-title">
                    <a href={`/blogs/${title}`}><h3>{title}</h3></a>
                </div>
                <div className="blog-card-description">
                    <p>{topic}</p>
                    <p>{date}</p>
                </div>
            </div>
        </div>
    )
}
