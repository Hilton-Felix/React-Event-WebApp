import React from "react";
import { Route, Routes } from 'react-router-dom';

import Home from "../components/Home.jsx";
import Events from "../components/Events.jsx";
import EventDetail from "../components/EventDetail.jsx";
import AddEvent from "../components/AddEvent.jsx";
import EventRegister from "../components/EventRegister";

function RoutesTree() {
    return(
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/events' element={<Events />}></Route>
            <Route path='/events/:id' element={<EventDetail />}></Route>
            <Route path="/add-event" element={<AddEvent />}></Route>
            <Route path="/event-register/:id" element={<EventRegister />}></Route>
        </Routes>
    ) 
}

export default RoutesTree;