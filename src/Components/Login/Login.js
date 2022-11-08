import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import { FaGoogle } from 'react-icons/fa';
import useTitle from '../hooks/useTitle';
const Login = () => {
    const { login, googleSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    useTitle('login')

    const googlProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(email, password)

        login(email, password)
            .then(result => {
                const user = result.user
                form.reset()
                navigate(from, { replace: true })
                setError('')
            })
            .catch(error => {
                setError(error.message)
                console.error(error)
            })
    }
    
    const handleGoogleSignIn = () => {
        googleSignIn(googlProvider)
            .then(result => {
                const user = result.user
                //  console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => console.error(error))
    }
    return (
        <div className="relative">
            <img
                src="https://img.freepik.com/free-photo/full-shot-man-servant-vacuuming-floor_23-2149482265.jpg?w=2000"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative bg-opacity-75 bg-gray-800">
                <svg
                    className="absolute inset-x-0 bottom-0 text-white"
                    viewBox="0 0 1160 163"
                >
                    <path
                        fill="currentColor"
                        d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                    />
                </svg>
                <div className="relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Please login
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-gray-200 md:text-lg">
                                Even when overwhelmed by the mess, you can do anything for 15 minutes.
                            </p>

                        </div>
                        <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                            <div className="bg-white rounded shadow-2xl p-7 sm:p-10">

                                <form onSubmit={handleLogin}>

                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            htmlFor="email"
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Email
                                        </label>
                                        <input
                                            placeholder="enter your email"
                                            required
                                            type="email"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                            name="email"
                                        />
                                    </div>
                                    <div className="mb-1 sm:mb-2">
                                        <label
                                            className="inline-block mb-1 font-medium"
                                        >
                                            Password
                                        </label>
                                        <input
                                            placeholder="enter your password"
                                            required
                                            type="password"
                                            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"

                                            name="password"
                                        />
                                    </div>


                                    <div className="mt-4 mb-2 sm:mb-4">
                                        <button
                                            type="submit"
                                            className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-gray-800 focus:shadow-outline focus:outline-none"
                                        >
                                            Login
                                        </button>
                                        <button
                                            onClick={handleGoogleSignIn}
                                            type="submit"
                                            className="inline-flex mt-4 items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md  bg-gray-800 focus:shadow-outline focus:outline-none"
                                        >
                                            Google <span className='mx-2'><FaGoogle></FaGoogle></span>
                                        </button>
                                        <p className="text-xs text-red-600 sm:text-sm">
                                            {error}
                                        </p>
                                    </div>
                                    <p className="text-xs text-gray-600 sm:text-sm">
                                        You have no account please <Link className='underline' to='/register'><span className='text-orange-600'>register</span></Link>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;