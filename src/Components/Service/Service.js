import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import ServiceAll from '../Services/ServiceAll';

const Service = () => {

    return (
        <div>
            <ServiceAll></ServiceAll>
          
        </div>
       
    );
};

export default Service;