import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
            <div className='text-center mt-8 mb-4'>

                <h2 className="text-5xl font-semibold">Our Services</h2>

            </div>
            <div className='grid gap-10 mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center m-12'>
                <Link to='/servicesAll'>
                    <button className="btn btn-outline btn-warning">See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Services;