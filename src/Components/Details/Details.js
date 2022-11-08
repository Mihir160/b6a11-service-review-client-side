import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../hooks/useTitle';

const Details = () => {
    const {_id,title} = useLoaderData()
    const {user} = useContext(AuthContext)
    useTitle('Details')
    return (
        <div>
            <div>

            </div>
            <div>
           
            <Link to='/addReview'><button>Add review</button></Link>
           
           
            </div>
        </div>
    );
};

export default Details;