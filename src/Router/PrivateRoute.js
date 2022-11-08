import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <label htmlFor="">
            <svg class="animate-spin h-8 w-8 bg-gray-900 mr-3 ..." viewBox="0 0 24 24">
            </svg>
        </label>


    }
    // navigate another page
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;