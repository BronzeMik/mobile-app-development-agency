import PropTypes from 'prop-types'

export default function UserProfile({image, userName, companyName}) {
    return(
        <div className='user-profile'>
            <div className='user-img'>
                <img src={image} alt='user' />
            </div>
            <div className='user-name'>
                <p className='customer-review-name'>{userName}</p>
                <p className='customer-review-company'>{companyName ? companyName : 'Valued Customer'}</p>
            </div>
        </div>
    )
}

UserProfile.propTypes = {
    userName: PropTypes.string,
    companyName: PropTypes.string,
}
