
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import { useState } from 'react';

export default function Panel({title, paragraph}) {
    const [faq, setFaq] = useState(true);
    const faqClick = () => {
        if(faq) {
            setFaq(false);
        } else {
            setFaq(true);
        }

        return
    }
    return(
        <div className='home-faq'>
            <div className='home-faq-title'>
                <h2>{title}</h2>
                <button className='home-faq-button' onClick={faqClick}>
                    <FaRegArrowAltCircleDown />
                </button>
            </div>
            <div className={`${faq ? 'none' : 'glideDown'}`}>
                <p>
                    {paragraph}
                </p>
            </div>
        </div>
    )
}


