import React from 'react';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import RegisterVolunteers from '../RegisterVolunteers/RegisterVolunteers';
import Event from '../Event/Event';
import Admin from '../Admin/Admin';
import Header from '../Header/Header';
import AdminForm from '../AdminForm/AdminForm';

const SetRoute = () => {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <PrivateRoute path="/content/:id">
                        <RegisterVolunteers/>
                    </PrivateRoute>
                    <Route path='/event'>
                        <Header/>
                        <Event/>
                    </Route>
                    <Route path='/admin'>
                        <Admin/>
                    </Route>
                    <Route path='/adminForm'>
                        <AdminForm/>
                    </Route>
                    <Route exact path="/">
                        <Header/>
                        <Home/>
                    </Route>
                    <Route path="*">
                        <NotFound/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
};

export default SetRoute;