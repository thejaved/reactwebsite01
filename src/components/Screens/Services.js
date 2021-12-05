import React from 'react';
import CardsContainer from '../CardsContainer';
import PageTopContent from '../PageTopContent';
import './css/Services.css'
const Services = () => {
    return (
        <div className='Services'>
            <PageTopContent PageTitle='Services'/>
            <CardsContainer/>
        </div>
    )
}
export default Services;
