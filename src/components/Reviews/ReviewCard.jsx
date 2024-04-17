import Ratings from "./Rating";
import UserProfile from "./UserProfile";
import PropTypes from 'prop-types'


export default function ReviewCard({rating, review, image, userName, companyName}) {
    return(
        <div className="review-card">
            <Ratings
            rating={rating}
            review={review}
            />
            <UserProfile
            image={image}
            userName={userName}
            companyName={companyName}
            />
        </div>
    )
}

ReviewCard.propTypes = {
    rating: PropTypes.number,
    review: PropTypes.string,
    userName: PropTypes.string,
    companyName: PropTypes.string
}
