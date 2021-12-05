import React from 'react';
import {Link} from 'react-router-dom';

function Nav() {
    return( 
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
                    {/* <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path> */}
                </svg>
                <span className="ml-3 text-xl font-bold">EventApp</span>
                </a>
                <nav className="md:ml-20 flex flex-wrap items-center text-base justify-center">
                    <Link to='/' className="mr-5 hover:text-gray-900">Home</Link>
                    <Link to='/events' className="mr-5 hover:text-gray-900">Events</Link>
                </nav>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to='/add-event' className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">Create Event &mdash;</Link>
                </nav>
               
            </div>
        </header>
    );
}

export default Nav;