import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import img from "./ContactFrom.jpg";
import {motion} from "framer-motion"
import clg from "./College.jpg"
import scl from "./School.png"

const Section = (props) => {

    const {children}=props;

    return (<section className={`
    h-screen w-screen p-8 max-w-screen-2xl mx-auto
    flex flex-col items-start justify-center
    `}>
        {children}
    </section>)
}

export const Interface = (props) => {

    const {setSection}=props;

    return (<>
    <div className="flex flex-col items-center w-screen">
    <HomeSection setSection={setSection}/>
    <AboutSection setSection={setSection}/>
    <SkillSection setSection={setSection}/>
    <ProjectSection setSection={setSection}/>
    <ContactSection setSection={setSection}/>
    </div>
    </>)
}

const HomeSection=(props)=>{
    const {setSection}=props
    var time=new Date().getHours();
    var greeting=""
    if(time<12){
        greeting="Good Morning"
    }
    else if(time<18){
        greeting="Good Afternoon"
    }
    else{
        greeting="Good Evening"
    }

    return (<>
    <Section>
        <h1 className="text-3xl font-bold bg-indigo-500 text-transparent bg-clip-text p-1 mt-20">{greeting}</h1>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 from-20% via-purple-500 via-30% to-pink-500 to-90% text-transparent bg-clip-text p-1 pb-2 ">Hi, my name is <span className="text-5xl pb-2 transition-transform duration-300 hover:bg-orange-400 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-transparent bg-clip-text">Hemanth Raj</span></h1>
        <h3 className="text-2xl p-1 pt-10">I'm a <span className="text-2xl p-1 pt-5 font-bold">Web Developer, 3D Artist and Designer</span></h3>
        <h3 className="text-2xl p-1">I love to <span className="text-2xl p-1 font-bold">create good looking and beautiful websites</span></h3>
        <div className="flex items-stretch mt-20 ">
        <button onClick={()=>setSection(1)} className="p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">About Me</button>
        <button onClick={()=>setSection(2)} className="p-2 mr-4 border-2 pl-4 pr-4 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Skills</button>
        <button onClick={()=>setSection(3)} className="p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Projects</button>
        <button onClick={()=>setSection(4)}className="p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Contact Me</button>
        </div>
    </Section>
    </>)
}

const AboutSection=(props)=>{

    const [showDetails, setShowDetails] = useState(false);
    const { setSection } = props;
    const svg1 = document.getElementById('triangles-1');
    const svgFlip1 = document.getElementById('triangles-flip-1');
    const handleClick = () => {
        setShowDetails(!showDetails);
      };

    if(svg1){
        svg1.onclick=()=>setSection(2)
    }
    if(svgFlip1){
        svgFlip1.onclick=()=>setSection(0)
    }

    return (<>
    <Section>
        <h1 className='font-bold text-3xl '>About Me</h1>
        <motion.h2 onClick={handleClick} className='text-xl font-semibold m-5 transition transform duration-500 hover:cursor-pointer hover:bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 hover:text-transparent hover:bg-clip-text hover:hover:drop-shadow-[0_5px_3px_rgba(0,0,0,0.8)] hover:scale-110 hover:translate-x-7'
        >Do you wanna Know about me?</motion.h2>
        {showDetails && (
            <>
            <div className='mb-7 border-dashed border-2 rounded-3xl p-4'>
            <motion.h2 className='font-normal text-lg text-black'
            initial={{
                opacity: 0,
                y: -20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                delay: 0.1
            }}
            >
            As you wish, I am just a Random Guy who tries to do something useful for someone.</motion.h2>
            <motion.h2
                initial={{
                    opacity: 0,
                    y: -25,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                    delay: 0.2
                }}
                className='font-normal text-lg text-black'
            >I love to spend my time sitting in front of a computer and doing things that I am interested in. </motion.h2>
            <motion.h2
                initial={{
                    opacity: 0,
                    y: -30,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.7,
                    delay: 0.3
                }}
                className='font-normal text-lg text-black'
            >Which includes being a 3D Artist, Web Developer, and Designer. </motion.h2>
            <motion.h2
            initial={{
                opacity: 0,
                y: -35,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.8,
                delay: 0.4
            }}
            className='font-normal text-lg text-black'
            >Not only that, in my free time, I used to play games including FPS such as CS:GO, Valorant, PUBG, and so on. </motion.h2>
            <motion.h2
            initial={{
                opacity: 0,
                y: -40,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                delay: 0.5
            }}
            className='font-normal text-lg text-black'
            >&emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;I love to play story games such as Tomb Raider, Resident Evil, and Forza Horizon...</motion.h2>
            </div>
            </>
        )}
        <motion.h3 
            initial={{
                opacity: 0,
                y: -20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                delay: 0.1
            }}
        className='font-normal text-lg text-black'>I'm just a Random Guy from a small city in <span>Madurai</span>, trying to explore the world through learning.</motion.h3>
        <motion.h3 
            initial={{
                opacity: 0,
                y: -25,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.5,
                delay: 0.5
            }}
        className='font-normal text-lg text-black'>Currently, I am a student pursuing UG program in CSE (Cyber Security) from the <span>Chennai Institute of Technology.</span></motion.h3>
        <motion.h1 
        initial={{
            opacity: 0,
            y: -80,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 0.8,
            delay: 0.1
        }}
        className='font-medium text-2xl mt-5 ml-5'>About My Education:</motion.h1>
        <motion.div className='pt-5 pl-1'
        initial={{
            opacity: 0,
            y: -85,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 1,
            delay: 0.2
        }}
        >
            <div className='flex border-2 p-2 rounded-xl mb-1'>
                <img src={clg} alt="College Logo" className='rounded-2xl mr-10' />
                <h1 className='font-normal text-lg'>Chennai Institute of Technology <br />Bachelor of Engineering in CSE (Cyber Security) CGPA: 9.8/10</h1>
                <h2></h2>
            </div>
            <div className='flex border-2 p-2 rounded-xl'>
                <img src={scl} alt="School Logo" className='rounded-2xl mr-5'/>
                <h1 className='font-normal text-lg'>Annamalaiyaar Matriculation Higher Secondary School <br />Higher Secondary Education: 91.83%</h1>
            </div>
        </motion.div>
        <div className="flex items-stretch">
        <div className="mr-10 mt-8 ml-32">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="triangles-1" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        <div className="">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flipped">
            <g id="triangles-flip-1" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" />
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        </div>
    </Section>
    </>)
}

const SkillSection=(props)=>{

    const { section, onSectionChange, setSection } = props;
    const svg2 = document.getElementById('triangles-2');
    const svgFlip2 = document.getElementById('triangles-flip-2');

    if(svg2){
        svg2.onclick=()=>setSection(3)
    }
    if(svgFlip2){
        svgFlip2.onclick=()=>setSection(1)
    }

    return (<>
    <Section>
        <h1>Skills</h1>
        <div className="flex items-stretch">
        <div className="mr-10 mt-7">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="triangles-2" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        <div className="">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flipped">
            <g id="triangles-flip-2" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        </div>
    </Section>
    </>)
}

const ProjectSection=(props)=>{

    const { setSection } = props;
    const svg3 = document.getElementById('triangles-3');
    const svgFlip3 = document.getElementById('triangles-flip-3');

    if(svg3){
        svg3.onclick=()=>setSection(4)
    }
    if(svgFlip3){
        svgFlip3.onclick=()=>setSection(2)
    }

    return (<>
    <Section>
        <h1>Projects</h1>
        <div className="flex items-stretch">
        <div className="mr-10 mt-7">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="triangles-3" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        <div className="">
        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flipped">
            <g id="triangles-flip-3" clip-path="url(#clip0_1_2)">
            <g id="LightGroup">
            <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" />
            </g>
            <g id="DarkGroup">
            <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
            <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
            </g>
            </g>
            <defs>
            <clipPath id="clip0_1_2">
            <rect width="120" height="100" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        </div>
        </div>
    </Section>
    </>)
}

const ContactSection=(props)=>{

    const { setSection } = props;
    const svg4 = document.getElementById('triangles-4');
    const svgFlip4 = document.getElementById('triangles-flip-4');
    const [state, handleSubmit] = useForm("xrgnnpgd");
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        setIsFormValid(formData.name.trim() !== "" || formData.email.trim() !== "" || formData.message.trim() !== "");
    };

    if(svg4){
        svg4.onclick=()=>setSection(0)
    }
    if(svgFlip4){
        svgFlip4.onclick=()=>setSection(3)
    }
    
    return (<>
    <Section>
    <div className="bg-gray-400 p-11 mt-14 pt-14 pb-14 ml-8 rounded-2xl bg-opacity-50 border-4 border-black shadow-lg shadow-white/50 flex items-stretch">
    <div className=''>
        <h1 className="font-bold text-3xl text-center border-2 rounded-2xl pt-1 pb-1 pl-0 border-black transition-transform duration-300 transform hover:scale-110 hover:text-orange-500 hover:border-white">Contact Us</h1><br />
        {state.succeeded ? (
            <h2 className="text-orange-500 font-bold text-2xl text-center p-16 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-transform duration-300 transform hover:scale-125 hover:text-orange-600 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Thank You for you Message!</h2>
        ) : (
            <form onSubmit={handleSubmit}>
                <div className="pt-0 pb-3">
                    <br />
                    <label htmlFor="" className="text-2xl font-medium text-black transition-transform duration-300 transform hover:text-orange-500 hover:drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,.8)]">
                        Enter Your Name:&emsp;
                    </label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg pl-1 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,.8)] transition-transform duration-300 transform hover:scale-110"
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="" className="text-2xl font-medium text-black transition-transform duration-300 transform hover:text-orange-500 hover:drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,.8)]">
                        Enter Your E-Mail:&emsp;
                    </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-lg pl-1 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,.8)] transition-transform duration-300 transform hover:scale-110"
                        required
                    />
                    <br />
                    <br />
                    <label htmlFor="" className="text-2xl font-medium text-black transition-transform duration-300 transform hover:text-orange-500 hover:drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,.8)]">
                        Message:
                    </label>
                    <br />
                    <br />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-lg pl-1 drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,.8)] transition-transform duration-300 transform hover:scale-110"
                        required
                    />
                </div>
                <ValidationError
                        className="mt-1 text-red-600 text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,1)]"
                        errors={state.errors}
                />
                <button
                disabled={state.submitting || !isFormValid}
                className={`border-black border-2 rounded-full p-2 mt-3 bg-orange-500 shadow-lg shadow-orange-500/50 transition-transform duration-200 transform hover:scale-110 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ${
                    state.submitting || !isFormValid ? 'cursor-not-allowed hover:opacity-1' : ''
                }`}
                title={state.submitting || !isFormValid ? 'Please fill all the required details' : ''}
                >
                Send Message
                </button>
            </form>
        )}
        </div>
        <div className='pl-10 pt-5'>
        <img src={img} width={505} height={505} className='border-4 border-black rounded-full transition-transform duration-300 transform hover:scale-90 hover:border-orange-600'/>
        </div>
    </div>
    <div className="flex items-stretch ml-96 mt-5">
    <div className="mr-10 mt-8">
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="triangles-4" clip-path="url(#clip0_1_2)">
        <g id="LightGroup" className=''>
        <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
        </g>
        <g id="DarkGroup" className=''>
        <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
        <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_1_2">
        <rect width="120" height="100" fill="white"/>
        </clipPath>
        </defs>
    </svg>
    </div>
    <div className="">
    <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="flipped">
        <g id="triangles-flip-4" clip-path="url(#clip0_1_2)">
        <g id="LightGroup">
        <path id="Light1" opacity="0.8" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z"/>
        </g>
        <g id="DarkGroup">
        <path id="Dark2" d="M60.573 43.7085C59.408 45.6517 56.592 45.6517 55.427 43.7085L37.3409 13.5426C36.142 11.5431 37.5824 9 39.9139 9L76.0861 9C78.4176 9 79.858 11.5431 78.6591 13.5426L60.573 43.7085Z" fill-opacity="0.8"/>
        <path id="Dark1" d="M60.573 55.7085C59.408 57.6517 56.592 57.6517 55.427 55.7085L37.3409 25.5426C36.142 23.5431 37.5824 21 39.9139 21L76.0861 21C78.4176 21 79.858 23.5431 78.6591 25.5426L60.573 55.7085Z" fill-opacity="0.8"/>
        </g>
        </g>
        <defs>
        <clipPath id="clip0_1_2">
        <rect width="120" height="100" fill="white"/>
        </clipPath>
        </defs>
    </svg>
    </div>
    </div>
    </Section>
    </>)
}