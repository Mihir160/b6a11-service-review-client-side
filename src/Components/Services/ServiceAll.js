import React, {  useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import ServiceCard from './ServiceCard';
import { TailSpin } from 'react-loader-spinner'

const ServiceAll = () => {
    const [services, setServices] = useState([])
    const [loader, setLoader] = useState(true);
  
    useTitle('ServiceAll')
    useEffect(() => {
        fetch('https://b6a11-service-review-server-side-five.vercel.app/servicesAll')
            .then(res => res.json())
            .then(data => {
                setLoader(false)
                setServices(data)})
         
    }, [])
    if (loader) {
        return <TailSpin
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    }

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
    </div>
    );
};

export default ServiceAll;