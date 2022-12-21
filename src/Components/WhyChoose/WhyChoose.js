import React from 'react';

const WhyChoose = () => {
    return (
        <div>
            {/* <div className='text-center'>
                <h1 className='text-2xl font-bold'>Why Our Customers Choose Us?</h1>
            </div> */}
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
                    <div className="grid gap-6 md:grid-cols-2 md:col-span-2 lg:col-span-3">
                        <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                            <div className="flex items-center mb-1">
                                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium  rounded bg-deep-purple-accent-400">
                                    1
                                </span>
                                <p className="text-lg font-semibold sm:text-base">
                                    We Are Experts
                                </p>
                            </div>
                            <p className="text-sm text-gray-900">
                                and dominate the industry in scale and scope with an adaptable, extensive network that consistently delivers exceptional results.
                            </p>
                        </div>
                        <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
                            <div className="flex items-center mb-1">
                                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-teal-900 rounded bg-teal-accent-400">
                                    2
                                </span>
                                <p className="text-lg font-semibold sm:text-base">
                                We Are Complete
                                </p>
                            </div>
                            <p className="text-sm text-gray-900">
                            and seek to provide exceptional service and engage in proactive behavior.
                            </p>
                        </div>
                        <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-teal-50">
                            <div className="flex items-center mb-1">
                                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium text-white rounded md:text-teal-900 bg-deep-purple-accent-400 md:bg-teal-accent-400">
                                    3
                                </span>
                                <p className="text-lg font-semibold sm:text-base">
                                We Are Committed
                                </p>
                            </div>
                            <p className="text-sm text-gray-900">
                            to our customers and are guided in all we do by their needs.


                            </p>
                        </div>
                        <div className="rounded lg:p-5 lg:transition lg:duration-300 lg:hover:bg-indigo-50">
                            <div className="flex items-center mb-1">
                                <span className="flex items-center justify-center w-4 h-4 mr-2 text-xs font-medium  rounded  bg-teal-accent-400 md:bg-deep-purple-accent-400">
                                    4
                                </span>
                                <p className="text-lg font-semibold sm:text-base">We Are Driven</p>
                            </div>
                            <p className="text-sm text-gray-900">
                            to pursue the highest standards and continuously improve in all aspects of our business.
                            </p>
                        </div>
                    </div>
                    <div className="relative md:col-span-2 lg:col-span-2">
                        <img
                            className="inset-0 object-cover object-bottom w-full h-56 rounded shadow-lg lg:absolute lg:h-full"
                            src="https://cleaningservicesbd.com/images/the-best-img.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;