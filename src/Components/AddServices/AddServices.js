import React from 'react';
import Swal from 'sweetalert2';
import useTitle from '../hooks/useTitle';

const AddServices = () => {
    useTitle('AddService')
    const handleAddServices = event =>{
        event.preventDefault()
        const form = event.target;
        const title = form.title.value;
        const image = form.image.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

       
        
        const addsevices = {
            title ,
            image,
            price,
            rating,
            description
        }
        //post add service value
        fetch('https://b6a11-service-review-server-side-five.vercel.app/servicesAll',{
            method:'POST',
            headers: {
                'content-type': 'application/json', 
              
            },
            body: JSON.stringify(addsevices)
        })
        .then(res => res.json()
        .then(data => {
           
            if(data.acknowledged){
                Swal.fire('Add service placed successfully')
                form.reset()
            }
        }))
        .catch(er => console.error(er))

    }
    return (
        <div>
            <div className='text-center'>
            <h1 className='text-2xl font-bold text-orange-600'>Add to Services</h1>
            </div>
            <form onSubmit={handleAddServices}>
                <div className="mb-1 sm:mb-2">
                    <label
                        className="inline-block mb-1 font-medium"
                    >
                        Title
                    </label>
                    <input
                        placeholder="Enter your title"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                       
                        name="title"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                       
                        className="inline-block mb-1 font-medium"
                    >
                        Image
                    </label>
                    <input
                        placeholder="Enter your image url"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        
                        name="image"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                    
                        className="inline-block mb-1 font-medium"
                    >
                        Price
                    </label>
                    <input
                        placeholder="Enter your price"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        
                        name="price"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                    
                        className="inline-block mb-1 font-medium"
                    >
                        Rating
                    </label>
                    <input
                        placeholder="Enter your rating"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        
                        name="rating"
                    />
                </div>
                <div className="mb-1 sm:mb-2">
                    <label
                    
                        className="inline-block mb-1 font-medium"
                    >
                        Description
                    </label>
                    <input
                        placeholder="Enter your Description"
                        required
                        type="text"
                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                        
                        name="description"
                    />
                </div>
                <div className="mt-4 mb-2 sm:mb-4">
                    <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-gray-800"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddServices;