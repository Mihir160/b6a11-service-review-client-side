import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Details = () => {
    const {_id,title} = useLoaderData()
    const {user} = useContext(AuthContext)
  
    return (
        <div>
            <div>

            </div>
            <div>
            {
            user?.email ? 
            <>
            <Link to='/addReview'><button>Add review</button></Link>
           
            </>
            :
            <p className='font-semibold'><Link to='/login'>Login</Link> <span><Link to='/register'>/ Register</Link></span> </p>
        }
            </div>
        </div>
    );
};

export default Details;