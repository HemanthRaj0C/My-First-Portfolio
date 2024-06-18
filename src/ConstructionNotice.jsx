import React from 'react';
import github from "./components/GitHub.png"
import resume from "./components/resume.png"
import { useState } from 'react';
import './index.css';

const ConstructionNotice = () => {

  const [rotation1, setRotation1] = useState(0);

    const handleClickRoation1 = () => {
    setRotation1(rotation1 + 360);
    };

    const style1 = {
    transform: `rotate(${rotation1}deg)`,
    transition: 'transform 0.5s ease-in-out',
    };
    const [rotation2, setRotation2] = useState(0);

    const handleClickRoation2 = () => {
    setRotation2(rotation2 + 360);
    };

    const style2 = {
    transform: `rotate(${rotation2}deg)`,
    transition: 'transform 0.5s ease-in-out',
    };

  return (
      <div className=''>
      <div className='fixed top-0 left-0 w-full h-full bg-blue-100 '>
      <h1 className='text-center border-2 border-white m-2 rounded-full text-orange-400 font-bold text-4xl drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.8)] transition transform duration-200 hover:scale-90 shadow-white shadow-md mt-36'>Under Construction</h1>
      <div className='border-2 border-dashed border-black mb-10 mt-10 ml-2 mr-2 text-center transition tarnsform duration-300 hover:scale-90'>
      <p className='font-semibold text-lg'>Mobile experience for this Website is currently being built.</p>
      <p className='font-semibold text-lg'>Please visit on a Desktop for the Full Experience.</p>
      </div>
      <div className='border-2 text-center border-black p-1 m-2 shadow-lg shadow-white border-double'>
      <h1 className='font-semibold text-lg mb-5'>In the meantime, you can check out our GitHub Profile, where you can find more information about me.</h1>
      <div className='flex items-center justify-center m-2'>
      <img src={github} alt='' onClick={handleClickRoation1} style={style1} className='md:ml-20 mt-1 mr-2 cursor-pointer h-9 w-9 border-2 border-orange-500 rounded-full shadow-orange-500 shadow-sm transition transform duration-500 hover:shadow-lg hover:shadow-orange-400 hover:scale-110'/>
      <button onClick={()=>window.open('https://github.com/HemanthRaj0C')}className="md:p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">GitHub Profile</button>
      <img src={resume} alt='' onClick={handleClickRoation2} style={style2} className='md:mt-1 mr-2 cursor-pointer h-9 w-9 border-2 border-orange-500 rounded-full shadow-orange-500 shadow-sm transition transform duration-500 hover:shadow-lg hover:shadow-orange-400 hover:scale-110'/>
      <button onClick={()=>window.open("https://docs.google.com/document/d/1aD4aytc_o_Hdr26BJ7iI94ed26ghPdX-9ttBXA3QT4c/edit?usp=sharing")}className="md:p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Download Resume</button>
      </div>
      </div>
      </div>
      </div>
  );
};

export default ConstructionNotice;