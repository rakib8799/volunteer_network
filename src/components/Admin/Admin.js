import React, { useContext, useEffect } from 'react';
import AdminEvent from '../AdminEvent/AdminEvent';
import logo from "../../logos/Group 1329.png";
import './Admin.css';
import { Link } from 'react-router-dom';
import { EventContext } from '../../App';

const Admin = () => {
    const [event,setEvent] = useContext(EventContext);
    const handleAdmin=(id)=>{
        const events = event.filter(ft=>ft._id!==id)
        setEvent(events);
    }
    useEffect( () => {
        fetch('https://safe-meadow-40975.herokuapp.com/admin',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>setEvent(data))
    },[setEvent])

    return (
        <div>
            <div className='d-flex mt-3'>
                <img style={{width: '12%',height: '12%'}} src={logo} alt=""/>
                <h4 className="mb-5 ml-5">Volunteer register list</h4>
            </div>
            <div className="row">
                <div className="col-md-2 adminLinks text-center">
                    <Link className="d-block" to='/admin'>Volunteer register list</Link>
                    <Link to='/adminForm'>Add Event</Link>
                </div>
                <div className="d-flex w-100 col-md-9 mx-auto headerData" style={{background: '#444'}}>
                        <p className="text-muted col-md-2 ml-5">Name</p>
                        <p className="text-muted col-md-2 ml-5">Email ID</p>
                        <p className="text-muted col-md-1 mx-5">Registering date</p>
                        <p className="text-muted col-md-3 ml-5">HomeContent list</p>
                        <p className="text-muted col-md-1">Action</p>
                    </div>
                    {
                        event.map(up=><AdminEvent handleAdmin={handleAdmin} key={up._id} info={up}></AdminEvent>)
                    }
                </div>
            </div>
    )
}

export default Admin;
