import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const MyreviewDetails = ({ myreview, handleDelete}) => {
 
    const { _id, title, review } = myreview
  
    return (
        <tr className='text-center'>
            <td>
                {title}
            </td>
            <td>
                {review}
            </td>
             {/* delete and update */}
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='text-orange-600  mr-4'><FaTrashAlt /></button>
                    <button className='text-orange-600'>
                        <Link to={`/updatereview/${_id}`}><label htmlFor="my-modal"><FaEdit></FaEdit></label></Link>
                    </button>

                </label>
            </th>
        </tr>
    );
};

export default MyreviewDetails;