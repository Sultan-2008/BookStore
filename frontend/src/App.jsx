import React from 'react';
import Home from './home/Home';
import Courses from './courses/Courses';
import {} from 'react-router-dom';
import { Routes, Route } from'react-router-dom';
import Signup from './components/Signup';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white '>
    <Routes>
        <Route path="/" element={<Home/>} />  
        <Route path="/course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/contactus' element={<ContactUs/>}/>
        <Route path="*" element={<h1>404 - Not Found</h1>} />
      </Routes>
    </div>
    </>
  )
}

export default App;