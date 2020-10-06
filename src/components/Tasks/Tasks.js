import React from 'react';
import './Tasks.css';

const Tasks = ({task,handleEvent}) => {
    const {user,date,_id} = task;
    const handleDeleted=(id) =>{
        handleEvent(id);
        fetch(`http://safe-meadow-40975.herokuapp.com/task/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>console.log(data))
    }
    return (
        <div className="col-md-6 mt-5">
            <div className="d-flex py-5 task">
                <div className='pl-3'>
                    <img style={{height: '200px', width: '200px'}} src={user?.image} alt=""/>
                </div>
                <div className='pl-3'>
                    <h5>{user?.name}</h5>
                    <p>{date}</p>
                </div>
                <div className='pt-5 pr-2'>
                    <button className='btn btn-secondary' onClick={()=>handleDeleted(_id)}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default Tasks;