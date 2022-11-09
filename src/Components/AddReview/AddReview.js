import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
           
        </div>
    );
};

export default AddReview;