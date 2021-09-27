import React from 'react';
import imgTypography from '../../assets/images/typography.png';

export default function News(props) {
    return (
        <div>
            
            <div className="mx-7 lg:mx-6 flex-grow">
                <div className="max-w-5xl mx-auto">
                    <div className="flex flex-wrap -mx-2">
                        <div className="mt-32 w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                            <div className="rounded shadow-md h-full">
                                <a href="/news/typography">
                                    <img className="w-full m-0 rounded-t lazy" src={imgTypography} data-src={imgTypography} width={960} height={500} alt="This post thumbnail" />
                                </a>
                                <div className="px-6 py-5">
                                    <div className="font-semibold text-lg mb-2">
                                        <a className="text-gray-900 hover:text-gray-700" href="/news/typography">Typography</a>
                                    </div>
                                    <p className="text-gray-700 mb-1" title="Published date">21 June 2020 08:04 AM</p>
                                    <p className="text-gray-800">
                                        Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distincti...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-32 w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                            <div className="rounded shadow-md h-full">
                                <a href="/traveling-ultralight/">
                                    <img className="w-full m-0 rounded-t lazy" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201%201'%20height%3D'500'%20width%3D'960'%20style%3D'background-color%3Argb(203%2C213%2C224)'%2F%3E" data-src="/assets/img/traveling-kuy.jpg" width={960} height={500} alt="This post thumbnail" />
                                </a>
                                <div className="px-6 py-5">
                                    <div className="font-semibold text-lg mb-2">
                                        <a className="text-gray-900 hover:text-gray-700" href="/traveling-ultralight/">Getting Started with Traveling Ultralight</a>
                                    </div>
                                    <p className="text-gray-700 mb-1" title="Published date">23 April 2020 07:00 PM</p>
                                    <p className="text-gray-800">
                                        Start by getting a small backpack and then just travel with what fits in that
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-32 w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                            <div className="rounded shadow-md h-full">
                                <a href="/untitled-post/">
                                    <img className="w-full m-0 rounded-t lazy" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201%201'%20height%3D'500'%20width%3D'960'%20style%3D'background-color%3Argb(203%2C213%2C224)'%2F%3E" data-src="/assets/img/windows-7.jpg" width={960} height={500} alt="This post thumbnail" />
                                </a>
                                <div className="px-6 py-5">
                                    <div className="font-semibold text-lg mb-2">
                                        <a className="text-gray-900 hover:text-gray-700" href="/untitled-post/">Untitled</a>
                                    </div>
                                    <p className="text-gray-700 mb-1" title="Published date">20 April 2020 06:30 PM</p>
                                    <p className="text-gray-800">
                                        Example of post without a title
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                            <div className="rounded shadow-md h-full">
                                <a href="/much-to-do/">
                                    <img className="w-full m-0 rounded-t lazy" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201%201'%20height%3D'500'%20width%3D'960'%20style%3D'background-color%3Argb(203%2C213%2C224)'%2F%3E" data-src="/assets/img/much-to-do.jpg" width={960} height={500} alt="This post thumbnail" />
                                </a>
                                <div className="px-6 py-5">
                                    <div className="font-semibold text-lg mb-2">
                                        <a className="text-gray-900 hover:text-gray-700" href="/much-to-do/">When You Have Too Much to Do</a>
                                    </div>
                                    <p className="text-gray-700 mb-1" title="Published date">3 March 2020 05:51 PM</p>
                                    <p className="text-gray-800">
                                        You have a to-do list that scrolls on for days. You are managing multiple projects, gettin...
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                            <div className="rounded shadow-md h-full">
                                <a href="/stop-procrastinating/">
                                    <img className="w-full m-0 rounded-t lazy" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201%201'%20height%3D'500'%20width%3D'960'%20style%3D'background-color%3Argb(203%2C213%2C224)'%2F%3E" data-src="/assets/img/no-image.svg" width={960} height={500} alt="This post thumbnail" />
                                </a>
                                <div className="px-6 py-5">
                                    <div className="font-semibold text-lg mb-2">
                                        <a className="text-gray-900 hover:text-gray-700" href="/stop-procrastinating/">How I Learned to Stop Procrastinating</a>
                                    </div>
                                    <p className="text-gray-700 mb-1" title="Published date">23 February 2020 02:33 AM</p>
                                    <p className="text-gray-800">
                                        The end of procrastination is the art of letting go
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-1/2 md:w-1/3 self-stretch p-2 mb-2">
                            <div className="rounded shadow-md h-full">
                                <a href="/fearlessness/">
                                    <img className="w-full m-0 rounded-t lazy" src="data:image/svg+xml,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%201%201'%20height%3D'500'%20width%3D'960'%20style%3D'background-color%3Argb(203%2C213%2C224)'%2F%3E" data-src="https://i.imgur.com/AAVR2qH.jpg" width={960} height={500} alt="This post thumbnail" />
                                </a>
                                <div className="px-6 py-5">
                                    <div className="font-semibold text-lg mb-2">
                                        <a className="text-gray-900 hover:text-gray-700" href="/fearlessness/">Fearlessness: How to Stop Running from Space</a>
                                    </div>
                                    <p className="text-gray-700 mb-1" title="Published date">11 February 2020 05:30 PM</p>
                                    <p className="text-gray-800">
                                        This post uses an external image as a thumbnail
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3 flow-root">
                        <a href="javascript:void(0)" className="float-left bg-white font-semibold py-2 px-4 border rounded shadow-md text-gray-800 cursor-default text-opacity-75">Previous</a>
                        <a href="/page/2/" className="float-right bg-white font-semibold py-2 px-4 border rounded shadow-md text-gray-800 cursor-pointer hover:bg-gray-100">Next</a>
                    </div>
                </div>
            </div>
        </div>

    );
}