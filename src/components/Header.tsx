import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap bg-indigo-600 p-4">
                <div className="brand flex items-center ">
                    <Link to="/">
                        <i className="w-10 fa fa-film text-white text-3xl"></i>
                        <span className="text-white text-2xl"> Bucata Web </span>
                    </Link>
                </div>
                <ul className="nav-links list-none flex p-0 m-0 items-center text-white">
                    <li className="mr-4 inline-block text-xl hover:text-yellow-500">
                        <Link to="/">Watch List</Link>
                    </li>
                    <li className="mr-4 inline-block text-xl hover:text-yellow-500">
                        <Link to="/watched">Watched</Link>
                    </li>
                    <li className="mr-4 inline-block text-xl bg-green-500 hover:bg-green-400 rounded-md px-2 py-1">
                        <Link to="/add">+Add</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
