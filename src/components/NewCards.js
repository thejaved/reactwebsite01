import React from 'react'
import "./NewCards.css";
const NewCards = ({src,content,heading}) => {
    return (
        <div className='NewCards'>
            <div className="topContent">
                <div className="center_logo">
                    <img src={src} alt="Profile_Images" />
                </div>
            </div>
            <div className="bottomContent">
                <div className="details">
                    <h2>{heading}</h2>
                    <p>
                        {
                            content
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default NewCards;
