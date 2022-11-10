import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../hooks/useTitle';
import MyreviewDetails from './MyreviewDetails';

const MyReview = () => {
    const { user ,logOut} = useContext(AuthContext)
    const [myreviews, setMyreview] = useState([])
    useTitle('MyReview')
    useEffect(() => {
        fetch(`https://b6a11-service-review-server-side-five.vercel.app/reviews?email=${user.email}`,{
            headers:{
                authorization: `Bearer ${localStorage.getItem('review-token')}`
            }
        })
         .then(res => {
                if(res.status === 401 || res.status === 403){
                
                }
               return res.json()})
            .then(data => setMyreview(data))
    },
        [user?.email, logOut])


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review ')
        if (proceed) {
            fetch(`https://b6a11-service-review-server-side-five.vercel.app/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                   
                    if (data.deletedCount > 0) {
                        Swal.fire(
                         'SuccessFully delete'
                        )
                        const remainingReview = myreviews.filter(myreview => myreview._id !== id)
                        setMyreview(remainingReview)
                    }
                })

        }
    }


    return (
        <div>
            <div className=' '>

                <div className="overflow-x-auto min-h-screen w-full">
                    <table className="table w-full text-center">

                        <thead>
                            <tr>


                                <th>Service Name</th>
                                <th>Review</th>
                                <th>Delete/edit</th>

                            </tr>
                        </thead>
                        <tbody>
                        
                            {
                                myreviews.length > 0 ?
                                myreviews.map(myreview => <MyreviewDetails key={myreview._id} myreview={myreview} handleDelete={handleDelete} ></MyreviewDetails>)
                                :
                                <h2 className='text-2xl font-bold'>No review Found</h2>
                            }




                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReview;