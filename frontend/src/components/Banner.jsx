import React from 'react';

function Banner() {
  return (
    <>
      <div className=" mt-12 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row items-center my-8">
        {/* Left Side: Text */}
        <div className="  order-2 md:order-1 w-full md:w-1/2 text-left space-y-4">
          <h1 className="text-4xl font-bold text-gray-800 mt-10 md:mt-6 ">Hello, Welcome Hear to learn something <span className='text-pink-500'>new everyday!</span></h1>
          <p className="text-lg text-gray-600">
            Discover a world of books at your fingertips. From bestsellers to classics, our collection has something for every reader. 
            Find your next great read today.Whether you're looking for fiction, non-fiction, or something in between, we have a wide
            range of genres to choose from. Explore our curated collections, enjoy special discounts, and let us help you embark on your
            next literary adventure.
          </p>
            <label className="input input-bordered flex items-center gap-2">
            Email
            <input type="text" className="grow" placeholder="danish@gmail.com" />
            </label>
          <button className="bg-blue-500 text-white px-6 py-2 hover:bg-purple-600 rounded-md hover:text-xl duration-300">
            Browse Collection
          </button>
        </div>
        {/* Right Side: Single Image of a Book */}
        <div className=" order-1 w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-6">
          <img src="/public/banner.jpg" alt="Book" className="mt-2 md:mt-4 w-full h-auto object-cover rounded-md shadow-md" />
        </div>
      </div>
    </>
  );
}

export default Banner;
