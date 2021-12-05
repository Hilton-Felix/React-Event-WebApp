import React, {isValidElement, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';

function EventDetail() {
    const {id} = useParams();

    useEffect(() => {
        fetchEventId();
    }, []);

    const [items, setItems] = useState([]);
    const [seats, setSeats] = useState([]);
    const [taken, setTaken] = useState([]);
    const [totalSeats, setTotalSeats] = useState([]);

    function seatsLeft(items) {
        return items[0].capacity - items[0].attendants.length;
    }

    function seatsTaken(items) {
        return items[0].attendants.length;
    }

    function getCapacity(items) {
        return items[0].capacity;
    }

    const fetchEventId = async () => {
        const data = await fetch(`/events/${id}`);
        const items = await data.json();
        console.log(items);

        // set items
        setItems(items);

        // set remaining seats
        setSeats(seatsLeft(items));

        // set seats taoen
        setTaken(seatsTaken(items));

        // setCapacity
        setTotalSeats(getCapacity(items));
        
    }



    return (
        <section class="text-gray-600 body-font">
           

        {
        items.map((item, index) => 
            <div class="container px-5 py-24 mx-auto" key={index}>
                <div class="text-center">
                <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4 font-bold">{item.event}</h1>
                <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">{item.description}</p>
                <div class="flex mt-6 justify-center">
                    <div class="w-16 h-1 rounded-full bg-red-500 inline-flex"></div>
                </div>
                </div>  
                <div class="flex flex-wrap -m-4 text-center py-10 justify-center">
                <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900 font-bold">{totalSeats}</h2>
                        <p class="leading-relaxed">seats available in this event</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900 font-bold">{taken}</h2>
                        <p class="leading-relaxed">occupied seats</p>
                        </div>
                    </div>
                    <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                        <div class="border-2 border-gray-200 px-4 py-6 rounded-lg">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-red-500 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                            <circle cx="9" cy="7" r="4"></circle>
                            <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                        </svg>
                        <h2 class="title-font font-medium text-3xl text-gray-900 font-bold">{seats}</h2>
                        <p class="leading-relaxed">spots left</p>
                        </div>
                    </div>
                </div>

                <div class="lg:w-2/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">Full Name</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Email</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">Date Registered</th>
                        <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            item.attendants.map((subitem, i) => {
                                return (  
                                <tr>
                                    <td class="px-4 py-3">{subitem.fullName}</td>
                                    <td class="px-4 py-3">{subitem.email}</td>
                                    <td class="px-4 py-3">{subitem.date}</td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <h3 class="mt-60">do you want to be part of this event?</h3>
                <Link to={{ pathname:  `/event-register/${item.id}` }} class="mr-2 mt-2 text-white-500 inline-flex items-center bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Register for this event &mdash;</Link>

                </div>

            </div>
        )
    }
    </section>     
    );
}

export default EventDetail;