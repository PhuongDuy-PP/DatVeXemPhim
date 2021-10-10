import React from 'react';
import { history } from "../../App";
import PropTypes from 'prop-types';

export default function NotFound(props) {
    return (
        <div className="bg-gradient-to-r from-purple-300 to-blue-200" style={{ backgroundImage: `url("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/hbz-best-disney-movies-finding-nemo-everett-1587424583.jpg")` }}>
            <div className="w-9/12 m-auto py-16 min-h-screen flex items-center justify-center">
                <div className="bg-white shadow overflow-hidden sm:rounded-lg pb-8">
                    <div className="border-t border-gray-200 text-center pt-8">
                        <h1 className="text-9xl font-bold text-purple-400">404</h1>
                        <h1 className="text-6xl font-medium py-8">oops! Page not found</h1>
                        <p className="text-2xl pb-8 px-12 font-medium">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
                        <button
                            onClick={() => { history.push('/') }}
                            className="bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-6 py-3 rounded-md mr-6"
                        >
                            HOME
                        </button>
                        <button
                            onClick={() => {history.push('/contact')}} 
                            className="bg-gradient-to-r from-red-400 to-red-500 hover:from-red-500 hover:to-red-500 text-white font-semibold px-6 py-3 rounded-md"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>

        </div>

    )
}