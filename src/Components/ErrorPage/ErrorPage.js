import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    return (
        <div>
            <div className='flex flex-col bg-gray-900 min-h-[700px] justify-center items-center'>
                <h1 className='text-4xl text-white'>Ops! An Error Ocurred!</h1>
                <br />
                {error && (
                    <div>
                        <p className='text-red-500'>{error.statusText || error.message}</p>
                        <p className='text-white'>{error.status}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ErrorPage;