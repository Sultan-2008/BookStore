import React from 'react';

function Course({ courses }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
      {courses.map((course, index) => (
        <div key={index} className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden group">
            
          <img
            src={course.image}
            alt={course.name}
            className="w-full h-48 object-cover rounded-lg mb-4 transition-transform transform group-hover:scale-105"
          />
          <div className="text-center">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600">
              {course.name}
            </h3>
            <p className="text-purple-700 mb-2">Category: {course.category}</p>
            <p className="text-green-500 text-lg mb-4">Price: ${course.price}</p> {/* Show price in red */}
            <p className=" mb-4">Additional Info: {course.additionalInfo}</p> {/* New red text */}

            <button className="bg-transparent border border-red-600 text-red-600 text-lg py-2 px-4 rounded-md hover:bg-red-600 hover:text-white transition-all duration-300 cursor-pointer">
              Enroll Now
            </button>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
        </div>
      ))}
    </div>
  );
}

export default Course;
