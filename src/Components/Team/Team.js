import React from 'react';
import img1 from '../../image/mihirimage.jfif'
const Team = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                    <p className="inline-block px-3 text-2xl py-px mb-4  font-bold tracking-wider  uppercase rounded-full bg-teal-accent-400">
                        Discover Our Team
                    </p>
                 
                </div>
                <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
                    <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src={img1}
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col sm:text-center">
                            <p className="text-lg font-bold">Mihir Roy</p>
                            <p className="mb-5 text-xs text-gray-800">Product Manager</p>
                      
                        </div>
                    </div>
                    <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg"
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col sm:text-center">
                            <p className="text-lg font-bold">Gazi ashiq Reza</p>
                            <p className="mb-5 text-xs text-gray-800">Design Team Lead</p>
                   
                        </div>
                    </div>
                    <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://media.istockphoto.com/id/1270067126/photo/smiling-indian-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=ovIQ5GPurLd3mOUj82jB9v-bjGZ8updgy1ACaHMeEC0="
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col sm:text-center">
                            <p className="text-lg font-bold">Tanvir Anjum</p>
                            <p className="mb-5 text-xs text-gray-800">Human Resources</p>
                      
                        </div>
                    </div>
                    <div>
                        <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
                            <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                            />
                        </div>
                        <div className="flex flex-col sm:text-center">
                            <p className="text-lg font-bold">Tusher</p>
                            <p className="mb-5 text-xs text-gray-800">Good guy</p>
           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;