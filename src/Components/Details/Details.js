import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../hooks/useTitle';
import { FaStar } from 'react-icons/fa';
const Details = () => {
    const { _id, title, image, rating, price, description } = useLoaderData()
    const { user } = useContext(AuthContext)
    useTitle('Details')
    return (
        <div>
            <div>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className=" sm:max-w-sm sm:mx-auto lg:max-w-full">
                        <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
                            <span href="/" aria-label="Article">
                                <img
                                    src={image}
                                    className="object-cover w-full h-64 rounded"
                                    alt=""
                                />
                            </span>
                            <div className="py-5">
                              
                                <span
                                    href="/"
                                    aria-label="Article"
                                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                                >
                                    <p className="text-2xl font-bold leading-5">{title}</p>
                                </span>
                                <p className="mb-4 text-gray-700">
                                   {description}
                                </p>
                                <div className="flex space-x-4">
                                    <p
                                        href="/"
                                        aria-label="Likes"
                                        className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                                    >
                                        <div className="mr-2">
                                         price:
                                        </div>
                                        <p className="font-semibold">${price}</p>
                                    </p>
                                    <div className="flex  items-start text-gray-800">
                                        <div className='mr-2'>
                                            <FaStar className='text-orange-500'></FaStar>
                                        </div>
                                      
                                       <p className="font-semibold">{rating}</p>
                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        
                    </div>
                </div>
            </div>
            
            <div>

                <Link to='/addReview'><button>Add review</button></Link>


            </div>
        </div>
    );
};

export default Details;