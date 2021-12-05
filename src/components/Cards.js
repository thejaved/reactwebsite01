import React from 'react';
import './Cards.css';
const Cards = ({href,src,title,paragraph,btn_title}) => {
    return (
        <div className='Cards'>
            <div className="cards_inset_one">
                <img src={src} className="cards_Images"/>
            </div>
            <div className="cards_inset_second">
                <h3>{title}</h3>
                <p>{paragraph}</p>
                <a href={href}>{btn_title}</a>
            </div>
        </div>
    )
}
export default Cards;
