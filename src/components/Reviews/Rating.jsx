import PropTypes from 'prop-types'


export default function Ratings({rating, review}) {
    let starRating=[];
    let i = 0;
    while (i < 5) {
        if(i >= rating) {
            starRating.push('fa-regular fa-star');
        } else {
            starRating.push('fa-solid fa-star');
        }
        
        i++
    }
    return(
        <div className='ratings'>
            <div className='stars'>
                {
                    starRating.map((star) => 
                        <i key={star} className={star}></i>
                        
                    )
                }
            </div>
            <p>{review}</p>
        </div>

    )
}

Ratings.propTypes = {
    rating: PropTypes.number,
    review: PropTypes.string,
}
