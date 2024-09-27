import React, { useState, useEffect } from 'react'; // Import useState
import NavBar from '../components/NavBar';
import Course from '../components/Course';
import Footer from '../components/Footer';
import axios from 'axios';
import { Link } from 'react-router-dom'; 

function Courses() {
  const [book, setBook] = useState([]); // Initialize the state

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        // console.log(res.data);  // Debugging output
        setBook(res.data);
      } catch (error) {
        console.log(error); // Error handling
      }
    };
    getBook(); // Fetch data when the component mounts
  }, []);

  // Filter out paid books
  const paidBooks = book.filter(book => book.price > 0);

  return (
    <>
      <NavBar />
      <div className='min-h-screen pt-16 bg-gray-100'>
        <div className='max-w-screen-lg mx-auto'>
          <h1 className='mt-8 text-4xl font-extrabold text-center text-blue-700 mb-6'>
            Discover Our Premium Books
          </h1>
          <p className='text-lg text-center text-gray-800 mb-8 px-5 py-5'>
            Unlock the full potential of your career with our curated selection of premium books. Our expert-led programs provide comprehensive training and valuable insights to propel your professional growth. Start learning today and transform your skills!
          </p>
          <Link to="/">
            <div className="flex justify-center mb-8">
              <button className="w-full max-w-xs bg-transparent border border-red-600 text-red-600 text-lg py-2 px-4 rounded-md hover:bg-gray-600 hover:text-white hover:text-xl transition-all duration-300 cursor-pointer">
                Back
              </button>
            </div>
          </Link>
          <Course courses={paidBooks} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Courses;
