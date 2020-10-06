import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../logos/Group 1329.png";
import './adminForm.css';

const AdminForm = () => {

    const [newEvent, setNewEvent] = useState({
        title:"",
        imgURL: ""
    })
    const handleBlur = (e) =>{
        const name = e.target.name;
        const newItem = {...newEvent};
        newItem[name] = e.target.value;
        setNewEvent(newItem);
    }

    const handleAddEvent = (e) =>{
        fetch('https://safe-meadow-40975.herokuapp.com/adminForm',{
            method: 'POST',
            headers:{
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newEvent)
        })
        e.preventDefault();
        alert('Send product details to server successfully!!')
    }

    return (
        <div>
            <div className='d-flex mt-3'>
                <img style={{width: '12%',height: '12%'}} src={logo} alt=""/>
                <h4 className="mb-5 ml-5">Add event</h4>
            </div>
            <form method=''>
                <div className="row mb-5">
                <div className="col-md-2 text-center adminForm">
                    <Link className="d-block" to='/admin'>Volunteer register list</Link>
                    <Link to='/adminForm'>Add Event</Link>
                </div>
                    <div className="col-md-4">
                        <label htmlFor="title">Event Title</label>
                        <input onBlur={handleBlur} className="form-control" placeholder="Event title" type="text" name="title" id='title'/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="date">Event Date</label>
                        <input className="form-control" type="date" name="Date" id='date'/>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className='col-md-2'>

                    </div>
                    <div className="col-md-4">
                        <label htmlFor="description">Description</label>
                        <input className="form-control" placeholder="description" type="text" id='description'/>
                    </div>
                    <div className="col-md-4">
                        <label htmlFor="ami">Banner</label><br/>
                        <input type="file" name="image id='ami"/>
                    </div>
                </div>
                <button type="submit" onClick={handleAddEvent}className="btn btn-primary d-block mx-auto">Submit</button>
            </form>
        </div>
    );
};

export default AdminForm;