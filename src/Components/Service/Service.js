import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ServiceAll from '../Services/ServiceAll';

const Service = () => {
    const {loading} = useContext(AuthContext)
    if (loading) {
        return <label htmlFor="">
          <svg class="animate-spin h-8 w-8 bg-gray-900 mr-3 ..." viewBox="0 0 24 24">
          </svg>
      </label>
    }
    return (
        <div>
            <ServiceAll></ServiceAll>
          
        </div>
       
    );
};

export default Service;