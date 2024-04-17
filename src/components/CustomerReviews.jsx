import ReviewCard from "./Reviews/ReviewCard";
import people from '../data/reviews';
import { useState } from "react";
import { FaChevronLeft, FaChevronRight} from 'react-icons/fa';


export default function CustomerReviews() {
    const [index, setIndex] = useState(0);
    const {rating, review, image, userName, companyName} = people[index];
  
    const checkNumber = (number) => {
      if(number > people.length - 1){
        return 0;
      }
      else if(number < 0){
        return people.length - 1;
      }
      return number;
    }
  
    const nextPerson = () => {
      setIndex((index) => {
        let newIndex = index + 1;
        return checkNumber(newIndex);
      }) 
    };
  
    const prevPerson = () => {
      setIndex((index) => {
        let newIndex = index - 1;
        return checkNumber(newIndex);
      }) 
    }
  
    
    return(
        <div className='customer reviews'>
            <div className='customer-reviews-container'>
                <div className='customer-reviews-header'>
                    <p>Learn more</p>
                    <h2>Customer Reviews</h2>
                </div>
                <div className="customer-reviews-logos">
                    <ReviewCard
                    rating={rating}
                    review={review}
                    image={image}
                    userName={userName}
                    companyName={companyName}
                    />
                </div>
                <div className="slide-btn">
                    <button className="prev-btn" onClick={prevPerson}>
                        <FaChevronLeft />
                    </button>
                    <button className="next-btn" onClick={nextPerson}>
                        <FaChevronRight />
                    </button>
                </div>
                
            </div>
        </div>
    )
}
