import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../hooks/useTitle';
import { FaStar } from 'react-icons/fa';
import ServiceReview from '../ServiceReview/ServiceReview';
const Details = () => {
    const { _id, title, image, rating, price, description } = useLoaderData()
    const { user } = useContext(AuthContext)
    
    useTitle('Details')

    const addReview = event => {
        event.preventDefault()
        const form = event.target;
        const reviewAdd = form.review.value;
        const userName = user.displayName
        const userImage = user.photoURL
        const userEmail = user.email
        const now = new Date();
        const timeMili = now.getTime();
        console.log(timeMili)
        // console.log(reviewAdd, userName, userImage, userEmail)
        const review = {
            serviceId: _id,
            review: reviewAdd,
            name: userName,
            image: userImage,
            email: userEmail,
            title: title,
            time: timeMili

        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json()
                .then(data => {
                    // console.log(data)
                    if (data.acknowledged) {
                        alert('review placed successfully')
                        form.reset()
                        // window.location.reload()
                    }
                }))
            .catch(er => console.error(er))

    }

    const [sepcificReview, setsepcificReview] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/review?serviceId=${_id}`)
            .then(res => res.json())
            .then(data => setsepcificReview(data))

    }, [sepcificReview])
  
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
            {/* review */}
            <div>
                <h1 className='text-2xl'>Feed Back</h1>
               {
                sepcificReview.map(reviews => <ServiceReview id={reviews._id} reviews={reviews}></ServiceReview>)
               }
            </div>
            <div>

                {/* <Link to='/addReview'><button>Add review</button></Link> */}
                {
                    user?.email ?
                        <>
                            <form onSubmit={addReview}>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        className="inline-block mb-1 font-medium"
                                    >
                                        Review
                                    </label>
                                    <input
                                        placeholder="enter your Review"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                        name="review"
                                    />
                                </div>
                                <div className="mt-4 mb-2 sm:mb-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-gray-800 focus:shadow-outline focus:outline-none"
                                    >
                                        Submit
                                    </button>

                                </div>
                            </form>
                        </>
                        :
                        <>
                            <Link to='/login'><span className='text-orange-600 underline'>Please login to add a review</span></Link>
                        </>
                }

            </div>
        </div>
    );
};

export default Details;