import React from 'react';
import Cards from './Cards';
import './CardsContainer.css';
import CardsData from './Data/CardsData';
const CardsContainer = () => {
    return (
        <div className='CardsContainer'>
            {
                CardsData.map((items)=>{
                    return(
                        <Cards href={items.href} src={items.src} title={items.title} paragraph={items.paragraph} btn_title={items.btn_title}/>
                    )
                })
            }
        </div>
    )
}

export default CardsContainer;
