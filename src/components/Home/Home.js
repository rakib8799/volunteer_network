import React from 'react';
import fakeData from '../../fakeData/fakeData';
import HomeContent from '../HomeContent/HomeContent';
import './Home.css';

const Home = () => {
    return (
        <div className="container pt-5 home">
            <h1 className="text-center">I GROW BY HELPING PEOPLE IN NEED.</h1>
            <form className="form-inline homeForm">
                <input className="form-control" type="search" placeholder="Search..." name='search'/>
                <button className='btn btn-secondary'>Search</button>
            </form>
            <div className="row">
                {
                    fakeData.map(fd=><HomeContent key={fd.id} homeContent={fd}></HomeContent>)
                }
            </div>
        </div>
    );
};

export default Home;