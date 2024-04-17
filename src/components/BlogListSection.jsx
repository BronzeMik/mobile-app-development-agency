import BlogCard from "./BlogCard";



export default function BlogListSection() {
    return(
        <div className="blog-list-section-container">
         <div className="blog-list-section">
            <div className="blog-list-header">
                <h2>Blogs</h2>
                <a href='/blogs'>
                    <button className=''>View More</button>
                </a>
            </div>
            <div className="blog-list-container">
                <BlogCard
                title='How to Increase Traffic on Website'
                topic='Lead Generation'
                date='Dec. 20, 2023'
                />
                <BlogCard
                title='How to Increase Traffic on Website'
                topic='Lead Generation'
                date='Dec. 20, 2023'
                />
                <BlogCard
                title='How to Increase Traffic on Website'
                topic='Lead Generation'
                date='Dec. 20, 2023'
                />
            </div>
            
        </div>
        </div>
        
    )
}
