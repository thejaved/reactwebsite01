import React from 'react';
import './PageTopContent.css';
const PageTopContent = ({PageTitle}) => {
    return (
        <div className='PageTopContent'>
            <div className="top_color"></div>
            <h2>Welcome To {PageTitle} Page</h2>
        </div>
    )
}
export default PageTopContent;
