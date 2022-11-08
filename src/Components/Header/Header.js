import React from 'react';

const Header = () => {
    return (
        <div className="relative ">
            <img
                src="https://img.freepik.com/premium-photo/young-man-cleaning-sofa-with-vacuum-cleaner-leaving-room-home_130111-3594.jpg?w=2000"
                className="absolute inset-0 object-cover w-full h-full"
                alt=""
            />
            <div className="relative min-h-screen bg-gray-900 bg-opacity-75">
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="flex flex-col items-center justify-between xl:flex-row">
                        <div className="w-full max-w-xl mx-24 mt-24 xl:mb-0 xl:pr-16 xl:w-7/12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                                Professional cleaning <br className="hidden md:block" />
                                service for your{' '}
                                <span className="text-teal-accent-400">home</span>
                            </h2>
                            <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                                Cleaning is the process of removing unwanted substances, such as dirt, infectious agents, and other impurities, from an object or environment.
                            </p>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;