import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
const ServiceCard = ({ service }) => {
    const { _id, image, rating, price, description, title } = service;
    return (
        <div className="card bg-gray-800 text-white">
            <figure>
                <PhotoProvider>
                    <PhotoView src={image}>
                    <img src={image} />
                    </PhotoView>
                </PhotoProvider>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0, 100) + '....'}</p>
                <div className='flex'>
                    <p>Price <span className='text-orange-500'>${price}</span></p>
                    <p>Rating: <span className='text-orange-500'>{rating}</span></p>
                </div>
                <div className="card-actions justify-end">
                    <button className="p-2 rounded-lg hover:bg-orange-600 text-white bg-slate-600">details</button>
                </div>
            </div>
        </div>
    );
};



export default ServiceCard;