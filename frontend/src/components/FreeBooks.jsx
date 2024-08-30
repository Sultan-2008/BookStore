import React from 'react';
import Slider from 'react-slick';
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function FreeBooks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    rows: 1,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-8 bg-gray-100">
        <div className='mt-4'>
        <h1 className="text-4xl font-extrabold text-center text-blue-600 mb-6">
          Dive into Our Collection of Free Books
        </h1>
        <p className="text-lg text-center text-gray-700 mb-8">
          Explore a diverse range of literary masterpieces available at no cost. Discover classics, timeless literature, and much more—all for free. Start your reading journey now and enrich your mind with captivating stories and knowledge.
        </p>
        </div>
        <div className="max-w-screen-lg mx-auto">
          <Slider {...settings}>
            {list.filter(book => book.price === 0).map((book, index) => (
              <div
                key={index}
                className="p-4 flex flex-col items-center bg-white rounded-lg shadow-lg transition-transform transform hover:-translate-y-2 hover:shadow-2xl hover:bg-gray-100"
              >
                <div className="flex flex-wrap justify-center gap-5">
                  <div className="w-30 h-48">
                    <img
                      src={book.image}
                      alt={book.name}
                      className="w-full h-full object-cover rounded-lg transition-transform transform group-hover:scale-105"
                    />
                  </div>
                  {/* Add more images if needed */}
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {book.name}
                  </h3>
                  <p className="text-gray-600 mb-2">Author: {book.title}</p>
                  <p className="text-gray-600 mb-4">Price: <span className="text-green-600 font-semibold">Free</span></p>
                  <button className="bg-blue-500 text-white py-2 px-4 hover:bg-green-600 rounded-md hover:text-xl curser-pointer px-3 py-2 transition-colors duration-300">
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default FreeBooks;
