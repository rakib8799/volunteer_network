import React from 'react';
import deleteIcon from '../../logos/trash-2 9.png';
import './AdminEvent.css';

const AdminEvent = ({info,handleAdmin}) => {
    const {name,email,date,user,_id} = info; 
    const handleDelete=(id)=>{
        handleAdmin(id);
        fetch(`https://safe-meadow-40975.herokuapp.com/admin/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className="row eventLinks w-100 bg-secondary text-white">
            <h6 className="col-md-3">{name}</h6>
            <h6 className='col-md-3'>{email}</h6>
            <h6 className='col-md-2'>{date}</h6>
            <p className='col-md-3'>{user?.name}</p>
            <img onClick={()=>handleDelete(_id)} className='col-md-1' src={email? deleteIcon : ''} alt=""/>
        </div>
    );
};

export default AdminEvent;