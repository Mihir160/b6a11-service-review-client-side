import React, { useState } from 'react';

import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const UpdateReview = () => {

    const update = useLoaderData()
    const navigate = useNavigate()
    const [reviews, setReviews] = useState(update)
    const handleUpdate = (event) => {
        event.preventDefault();
        const review = event.target.review.value;
        reviews.review = review;
        fetch(`https://b6a11-service-review-server-side-five.vercel.app/reviewsupdate/${update._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
               
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                Swal.fire(
                    'SuccessFully update'
                   )
                navigate('/myreview')
            })
            .catch(err => console.error(err))

    }


    return (
        <div className='min-h-screen'>
            <div className='lg:p-44'>
                <form onSubmit={handleUpdate} className=''>
                    <div className="mb-1 sm:mb-2">
                        <label
                         
                            className="inline-block mb-1 font-medium"
                        >
                            Add New Review
                        </label>
                        <input
                            placeholder="enter your Review"
                            required
                            type="text"
                            className="flex-grow w-full h-24 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                            name='review'
                        />
                    </div>
                    <div>
                        <input type="submit" placeholder="submit" className="bg-orange-600 py-2 rounded-lg text-white  px-9 " />
                    </div>
                </form>


            </div>
        </div>
    );
};

export default UpdateReview
