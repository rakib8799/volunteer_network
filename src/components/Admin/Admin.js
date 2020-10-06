import React, { useEffect, useState} from 'react';
import AdminEvent from '../AdminEvent/AdminEvent';
import logo from "../../logos/Group 1329.png";
import './Admin.css';


const Admin = () => {
    const [user,setUser] = useState([]);
    useEffect( () => {
        fetch('https://safe-meadow-40975.herokuapp.com/admin',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])

    return (
        <div className="container">
            <div className='d-flex mt-3'>
                <img style={{width: '12%',height: '12%'}} src={logo} alt=""/>
                <h4 className="mb-5 ml-5">Volunteer register list</h4>
            </div>
            <div className="row">
                <div className="d-flex w-100" style={{background: '#444'}}>
                        <p className="text-muted col-md-3">Name</p>
                        <p className="text-muted col-md-3">Email ID</p>
                        <p className="text-muted col-md-2">Registering date</p>
                        <p className="text-muted col-md-3">HomeContent list</p>
                        <p className="text-muted col-md-1">Action</p>
                    </div>
                    {
                        user.map(up=><AdminEvent key={up._id} info={up}></AdminEvent>)
                    }
                    {/* <Link to='/adminForm'><button>Update</button></Link>             */}
                </div>
            </div>
    )
}

export default Admin;
