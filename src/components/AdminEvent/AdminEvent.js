import React from 'react';
import deleteIcon from '../../logos/trash-2 9.png';
import './AdminEvent.css';

const AdminEvent = ({info}) => {
    const {name,email,date,user} = info; 
    return (
            <div className='d-flex w-100 bg-secondary text-white admin'>
                <h6 className=' col-md-3'>{name}</h6>
                <h6 className=' col-md-3'>{email}</h6>
                <h6 className=' col-md-2'>{date}</h6>
                <p className=' col-md-3'>{user?.name}</p>
                < img className='col-md-1' src={(email)? (deleteIcon):''} alt=""/>
            </div>
    );
};

export default AdminEvent;