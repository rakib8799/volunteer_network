import React, { useContext, useEffect } from 'react';
import { EventContext, UserContext } from '../../App';
import Tasks from '../Tasks/Tasks';

const Event = () => {
    const [loggedInUser,] = useContext(UserContext);
    const [event,setEvent] = useContext(EventContext)
    useEffect(() => {
        fetch(`http://localhost:5000/event?email=`+loggedInUser.email,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data => setEvent(data))
    },[loggedInUser.email, setEvent])
    
    return (
        <div className="container">
            <div className="row">
                {
                    event.map(us=><Tasks key={us._id} task={us}></Tasks>)
                }
            </div>
        </div>
    );
};

export default Event;