import React, { useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from 'react-router-dom'


function EventRegister() {
  const [data, setData] = useState("");
  const {id} = useParams();

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
    let newAttendee = {
        "id": Math.random()*100,
        "fullName": data['fullName'],
        "email": data['email'],
        "date": date.toLocaleDateString('en-US'),
    }

    fetch(`/event-register/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAttendee)
    })
        .then(() => {
            navigate(`/events/${id}`);
        })
    e.preventDefault();
  };

  return (
    <section class="text-gray-600 body-font relative">
    <div class="container px-5 py-24 mx-auto">
      <div class="flex flex-col text-center w-full mb-12">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-bold">Register for Event</h1>
        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
            <div class="p-2 w-full">
                <div class="relative">
                <label for="fullName" class="leading-7 text-sm text-gray-600 text-left">Full Name</label>
                <input type="text" id="name" name="fullName" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl" onChange={handleChange} required='required' />
                </div>
            </div>
            <div class="p-2 w-full">
                <div class="relative">
                <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out rounded-2xl" onChange={handleChange} required='required' />
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

export default EventRegister;
