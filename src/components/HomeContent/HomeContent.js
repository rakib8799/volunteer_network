import React from 'react';
import './HomeContent.css';
import { Link } from 'react-router-dom';

const HomeContent = ({homeContent}) => {
    const {name,image,id} = homeContent;
    return (
        <div className='col-md-3 pt-5 homeContent'>
            <Link to={`/content/${id}`}>
                <img className='all' style={{height: '300px'}} src={image} alt=""/>
                <h5 className="text">{name}</h5>
            </Link>
        </div>
    );
};

export default HomeContent;