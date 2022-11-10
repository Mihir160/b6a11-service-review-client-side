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
        fetch(`http://localhost:5000/reviews?email=${user.email}`,{
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
        const proceed = window.confirm('Are you sure, you want to cancel this order ')
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
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
                                myreviews.map(myreview => <MyreviewDetails key={myreview._id} myreview={myreview} handleDelete={handleDelete} ></MyreviewDetails>)
                            }




                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyReview;