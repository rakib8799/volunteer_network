import React, { useContext, useEffect, useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logos/Group 1329.png';
import './RegisterVolunteers.css';


const RegisterVolunteers = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [user,setUser] = useState({});
    const {id} = useParams();
    useEffect(() => {
        const fake=fakeData.find(fd=>fd.id===Number(id))
        setUser(fake);
    },[id, setLoggedInUser])
    const [selectedDate, setSelectedDate] = useState({date: ''});
    const handleSubmit = () =>{
        const newBooking = {...loggedInUser,...selectedDate,user};
        console.log(newBooking)
        fetch(`https://safe-meadow-40975.herokuapp.com/content`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newBooking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    }
    const handleChange=(event)=>{
        const date = {...selectedDate};
        date[event.target.name] = event.target.value;
        setSelectedDate(date);
        event.preventDefault();
    }

    return (
        <div className='container'>
            <img className="m-auto d-block" style={{width: '13%'}} src={logo} alt=""/>
            <form className='form'>
                <h2 className='px-3 pb-3'>Register as a HomeContent</h2>
                <input name="name" className='form-control' defaultValue={loggedInUser.name}  placeholder="Full Name" />
                
                <input name="email" className='form-control' defaultValue={loggedInUser.email}  placeholder="Username or Email"/>     
                <input type="date" className='form-control' onBlur={handleChange} name="date" placeholder="Date"/>
                <input name="description" className='form-control' placeholder="Description" />
                <input type='text' className='form-control' name="text" defaultValue={user?.name} placeholder="Organize books at the library"/>             
                <Link to='/event'>
                    <button className='btn btn-primary w-100' onClick={handleSubmit}>Registration</button>
                </Link>
            </form>
        </div>
    );
};

export default RegisterVolunteers;

