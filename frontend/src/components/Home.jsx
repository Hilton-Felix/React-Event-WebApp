import React from "react";
import {Link} from 'react-router-dom';


function Home() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-3xl" alt="hero" src="https://source.unsplash.com/720x600/?calendar/"/>
                <div className="text-center lg:w-2/3 w-full">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Event App</h1>
                <p className="mb-8 leading-relaxed">The Covid epidemic has affected the way we do several things nowadays, mostly because of the severe health and safety procedures that we must follow. This application will facilitate public gatherers to register for functions or events online before they can attend.</p>
                <div className="flex justify-center">
                    <Link to='/events' className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-3">All Events &mdash;</Link>
                    <Link to='/add-event' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Create a new Event &mdash;</Link>
                </div>
                </div>
            </div>
        </section>
    );
}

export default Home;