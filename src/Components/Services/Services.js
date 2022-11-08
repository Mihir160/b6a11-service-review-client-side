import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([])
    console.log(services)
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))

    },[])
    return (
        <div>
            <div>
                 <h1 className='text-bold'>Services {services.length}</h1>
                  
            </div>
            <div>

            </div>
        </div>
    );
};

export default Services;