import React from 'react';
import { Link } from 'react-router-dom';


const BackButton = () => {
    return(
        <Link to="/artist" className="absolute top-0 left-0 flex flex-row focus:outline-none pt-4 pl-4">
                <svg className="fill-current text-gray-600 w-4 h-4 md:w-8 md:h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 12l9-8v6h15v4h-15v6z"/></svg>
        </Link>
    );
}

export default BackButton;