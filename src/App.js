import React from 'react';
import './App.css';
import { createContext } from 'react';
import { useState } from 'react';
import SetRoute from './components/SetRoute/SetRoute';
export const UserContext = createContext();
export const EventContext = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState([]);
  const [event,setEvent] = useState([]);

  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <EventContext.Provider value={[event,setEvent]}>
        <SetRoute></SetRoute>
      </EventContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
