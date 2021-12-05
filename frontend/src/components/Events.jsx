import React, {isValidElement, useEffect, useState} from "react";
import { Link } from "react-router-dom";

function Events() {
    useEffect(() => {
        fetchEvents();
    }, []);

    const [items, setItems] = useState([]);

    const fetchEvents = async () => {
        const data = await fetch('/events');
        const items = await data.json();
        // console.log(items);
        setItems(items);
    }

    return (
        <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto py-24">
            <div class="flex flex-col w-full mb-20">
            <h2 class="text-xs text-red-500 tracking-widest font-medium title-font mb-1 text-left font-bold">BROWSE</h2>
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 text-left font-bold">All Events</h1>
            </div>
            <div class="flex flex-wrap -m-4">
                {
                    items.map(item => 
                        <div class="p-4 md:w-1/4">
                            <div class="flex rounded-lg h-full bg-gray-100 p-8 flex-col shadow-md text-left">
                                <h2 class="text-gray-900 text-lg title-font font-medium font-bold">{item.event}</h2>
                                <small class="text-left text-xs mb-3"><span class="text-red-500">By - </span> {item.author} | <span class="text-red-500">Date - </span>{item.date}</small>
                            <div class="flex-grow">
                                <p class="leading-relaxed text-base">{item.description}</p>
                                <Link to={{ pathname:  `/events/${item.id}`, data: item }} class="mr-2 text-xs mt-3 text-white-500 inline-flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Event Details</Link>
                                <Link to={{ pathname:  `/event-register/${item.id}`, data: item }} class="mr-2 text-xs mt-3 text-white-500 inline-flex items-center bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Register for this event</Link>
                            </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
        </section>
        );
}

export default Events;