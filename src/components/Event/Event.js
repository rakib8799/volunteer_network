import React, { useContext, useEffect } from 'react';
import { EventContext, UserContext } from '../../App';
import Tasks from '../Tasks/Tasks';

const Event = () => {
    const [loggedInUser,] = useContext(UserContext);
    const [event,setEvent] = useContext(EventContext);
    const handleEvent=(id)=>{
        const events = event.filter(ft=>ft._id!==id)
        setEvent(events);
    }
    useEffect(() => {
        fetch(`http://safe-meadow-40975.herokuapp.com/event?email=`+loggedInUser.email,{
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
                    event.map(us=><Tasks handleEvent={handleEvent} key={us._id} task={us}></Tasks>)
                }
            </div>
        </div>
    );
};

export default Event;