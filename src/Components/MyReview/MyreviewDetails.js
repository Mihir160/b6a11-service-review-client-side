import React from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
const MyreviewDetails = ({ myreview, handleDelete }) => {
    console.log(myreview)
    const { _id, title, review  } = myreview

    return (
        <tr className='text-center'>

            <td>
                {title}
            </td>
            <td>

                {review}
            </td>

            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className='text-orange-600  mr-4'><FaTrashAlt /></button>
                    <button className='text-orange-600'><FaEdit></FaEdit></button>
                </label>
            </th>
        </tr>
    );
};

export default MyreviewDetails;