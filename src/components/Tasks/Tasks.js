import React, { useContext } from 'react';
import { EventContext } from '../../App';
import './Tasks.css';

const Tasks = ({task}) => {
    const {user,date,_id} = task;
    const [,setEvent] = useContext(EventContext);
    const handleDeleted=(id) =>{
        fetch(`http://localhost:5000/task/${id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>setEvent(data))
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