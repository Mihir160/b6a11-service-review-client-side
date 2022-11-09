import React from 'react';


const ServiceReview = ({reviews}) => {
     const {image, name, review} = reviews
    //  console.log(image, name)
    return (
        <div>

            {/* <img src={image} alt="" srcset="" /> */}
             <div className="px-4 py-4">
                  
                  <div>
                      <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                          <div className="flex items-center justify-center w-12 h-12 mb-4">
                            <img className='rounded-full'  src={image}/>
                          </div>
                          <h6 className="mb-2 font-semibold leading-5">{name}</h6>
                          <p className="text-sm text-gray-900">
                          <span className='text-orange-600 font-bold'>Comment :</span> {review}
                          </p>
                      </div> 
                  </div>
                 
              </div>
        </div>
    );
};

export default ServiceReview;