import React from 'react';

const WorkHandle = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
                    <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-teal-accent-400">

                    </div>
                    <div className="max-w-xl mb-6">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                            why you
                            <br className="hidden md:block" />
                            should hire our {' '}
                            <span className="inline-block text-deep-purple-accent-400">
                                services
                            </span>
                        </h2>
                        <p className="text-base text-gray-700 md:text-lg">
                            Any work is done at your own discretion. We try to provide the best service. 
                            We provide best service at low cost. We provide superior support to customers. 
                            Our cleaning is different from others.
                             During cleaning we try to use high quality products.
                        </p>
                    </div>

                </div>
                <div className="flex items-center justify-center -mx-4 lg:pl-8">
                    <div className="flex flex-col items-end px-3">
                        <img
                            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                            src="https://media.istockphoto.com/photos/young-man-cleaning-house-with-vacuum-cleaner-picture-id1081949862?b=1&k=20&m=1081949862&s=170667a&w=0&h=MwMJYnnyO6eKYTd7ia0w0Y_rtwL6tNLUHlTIf-lBnxw="
                            alt=""
                        />
                        <img
                            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
                            src="https://www.poison.org/-/media/images/shared/articles/wood-floor-cleaners-man-cleaning-floor-212.jpg"
                            alt=""
                        />
                    </div>
                    <div className="px-3">
                        <img
                            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
                            src="https://media.istockphoto.com/id/1217336170/photo/family-cleaning-during-isolation.jpg?s=612x612&w=0&k=20&c=1FBgx0sALmBph5OQhoLpp4dAfSdtRzGxC_Ywj62nzeY="
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkHandle;