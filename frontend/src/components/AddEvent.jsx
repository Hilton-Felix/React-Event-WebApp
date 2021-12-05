import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function AddEvent() {
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const currentInputFieldData = {
       [name]: value
    }

    const updateData = {
       ...data,
       ...currentInputFieldData
    }
   
    // merge data object with the current input field data object
    setData(updateData);
  };

  const handleSubmit = (e) => {
    let date = new Date();
    let newEvent = {
        "id": Math.random()*100,
        "author": data['organizer'],
        "capacity": data['capacity'],
        "event": data['eventName'],
        "venue": data['venue'],
        "date": data['date'],
        "description": data['description'],
    }

    fetch('/add-event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent)
    })
      .then(() => {
        navigate('/events')
      })
    e.preventDefault();
  };

  return (
    <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-bold">Add Event</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
            <div class="p-2 w-full">
                <div class="relative">
                <label for="eventName" class="leading-7 text-sm text-gray-600 text-left">Event Name</label>
                <input type="text" id="name" name="eventName" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl" onChange={handleChange} required='required' />
                </div>
            </div>
            <div class="p-2 w-full">
                <div class="relative">
                <label for="venue" class="leading-7 text-sm text-gray-600 text-left">Venue</label>
                <input type="text" id="venue" name="venue" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl" onChange={handleChange} required='required' />
                </div>
            </div>
            <div class="p-2 w-1/2">
                <div class="relative">
                <label for="date" class="leading-7 text-sm text-gray-600">Event date</label>
                <input type="datetime-local" id="date" name="date" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl" onChange={handleChange} required='required' />
                </div>
            </div>
            <div class="p-2 w-1/2">
                <div class="relative">
                <label for="capacity" class="leading-7 text-sm text-gray-600">Capacity</label>
                <input type="number" id="capacity" name="capacity" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl" onChange={handleChange} required='required'/ >
                </div>
            </div>
            <div class="p-2 w-full">
                <div class="relative">
                <label for="description" class="leading-7 text-sm text-gray-600">Description</label>
                <textarea id="description" name="description" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out rounded-2xl" onChange={handleChange} required='required'></textarea>
                </div>
            </div>
            <div class="p-2 w-full">
                <div class="relative">
                <label for="organizer" class="leading-7 text-sm text-gray-600 text-left">Organizer (Who is creating this event?)</label>
                <input type="text" id="name" name="organizer" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl" onChange={handleChange} required='required' />
                </div>
            </div>

            <div class="p-2 w-full">
                <button type="submit" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-3">Add Event &mdash;</button>
            </div>
            </div>
        </div>
      </form>
    </div>
  </section>
  );
}

export default AddEvent;
