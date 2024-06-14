import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useState } from "react";
import img from "./ContactFrom.jpg";
import {motion} from "framer-motion"
import clg from "./College.jpg"
import scl from "./School.png"
import chatBox from "/projects/ChatBox-min.png"
import portFolio from "/projects/Portfolio-min.png"
import retro from "/projects/RetroWebsite-min.png"
import Modal1 from "./Modals/modal1";
import Modal2 from "./Modals/modal2";
import Modal3 from "./Modals/modal3";
import github from "./GitHub.png"
import resume from "./resume.png"

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
    const [showDetails, setShowDetails] = useState(false);
    
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

    const handleClick = () => {
        setShowDetails(!showDetails);
      };
    
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

    return (<>
    <Section>
        <div className="flex flex-col">
        <h1 className="text-3xl font-bold bg-indigo-500 text-transparent bg-clip-text p-1 mt-20">{greeting}</h1>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 from-20% via-purple-500 via-30% to-pink-500 to-90% text-transparent bg-clip-text p-1 pb-2 ">Hi, my name is <span className="cursor-pointer text-5xl pb-2 transition transform duration-100 hover:bg-orange-500 hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] text-transparent bg-clip-text " onClick={handleClick} title={!handleClick ? '' : 'Click Here to see a Suprise'}>Hemanth Raj</span></h1>
        </div>
        <h3 className="text-2xl p-1 pt-10">I'm a <span className="text-2xl p-1 pt-5 font-bold">Web Developer, 3D Artist and Designer</span></h3>
        <h3 className="text-2xl p-1">I love to <span className="text-2xl p-1 font-bold">create good looking and beautiful websites</span></h3>

        <div className="flex items-stretch mt-20 ">
        <button onClick={()=>setSection(1)} className="p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">About Me</button>
        <button onClick={()=>setSection(2)} className="p-2 mr-4 border-2 pl-4 pr-4 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Skills</button>
        <button onClick={()=>setSection(3)} className="p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Projects</button>
        <button onClick={()=>setSection(4)}className="p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Contact Me</button>
        {showDetails && (
            <>
            <motion.div className='flex'
            initial={{
                opacity: 0,
                y: -50,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            exit={{
                opacity: 0,
                y: 50,
            }}
            transition={{
                duration: 0.5,
                delay: 0.1
            }}
            >
            <img src={github} alt='' onClick={handleClickRoation1} style={style1} className='ml-20 mt-1 mr-2 cursor-pointer h-9 w-9 border-2 border-orange-500 rounded-full shadow-orange-500 shadow-sm transition transform duration-500 hover:shadow-lg hover:shadow-orange-400 hover:scale-110'/>
            <button onClick={()=>window.open('https://github.com/HemanthRaj0C')}className="p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">GitHub Profile</button>
            <img src={resume} alt='' onClick={handleClickRoation2} style={style2} className='mt-1 mr-2 cursor-pointer h-9 w-9 border-2 border-orange-500 rounded-full shadow-orange-500 shadow-sm transition transform duration-500 hover:shadow-lg hover:shadow-orange-400 hover:scale-110'/>
            <button onClick={()=>window.open("https://docs.google.com/document/d/1aD4aytc_o_Hdr26BJ7iI94ed26ghPdX-9ttBXA3QT4c/edit?usp=sharing")}className="p-2 mr-4 border-2 pl-2 pr-2 border-black rounded-full transition-transform duration-300 transform hover:scale-110 hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-white hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Download Resume</button>
            </motion.div>
            </>
        )}
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
        <h1 className='text-3xl font-bold mb-5 mt-10 border-2 pl-4 pr-4 rounded-2xl pt-1 pb-1 transition transform duration-500 hover:scale-110 hover:shadow-lg hover:translate-y-2 hover:shadow-white shadow-sm shadow-white bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text hover:translate-x-6'>About Me</h1>
        <motion.h2 onClick={handleClick} className='text-xl font-semibold m-5 transition transform duration-500 hover:cursor-pointer hover:bg-gradient-to-r from-red-600 via-yellow-400 to-orange-500 hover:text-transparent hover:bg-clip-text hover:hover:drop-shadow-[0_5px_3px_rgba(0,0,0,0.8)] hover:scale-110 hover:translate-x-7 hover:font-bold'
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
        className='font-normal text-lg text-black'>I'm just a Random Guy from a small city in <span className='cursor-pointer transition transform duration-300 hover:text-orange-500 hover:drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.25)]' onClick={() => window.open('https://maps.app.goo.gl/XfXJaJERSs14s78L9')} >Madurai</span>, trying to explore the world through learning.</motion.h3>
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
        className='font-normal text-lg text-black'>Currently, I am a student pursuing UG program in CSE (Cyber Security) from the <span className='cursor-pointer transition transform duration-300 hover:text-orange-500 hover:drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.25)]' onClick={() => window.open('https://maps.app.goo.gl/JZ14TKSqGzMp2s6YA')} >Chennai Institute of Technology.</span></motion.h3>
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
        whileHover={{
            scale: 1.1,
            x:10
        }}
        className='font-medium text-2xl mt-5 ml-5 cursor-pointer'>About My Education:</motion.h1>
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
                <h1 className='font-normal text-lg'><span className='cursor-pointer transition transform duration-300 hover:text-orange-500 hover:drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.25)]' onClick={() => window.open('https://maps.app.goo.gl/JZ14TKSqGzMp2s6YA')}>Chennai Institute of Technology</span> <br />Bachelor of Engineering in CSE (Cyber Security) CGPA: 9.8/10</h1>
                <h2></h2>
            </div>
            <div className='flex border-2 p-2 rounded-xl'>
                <img src={scl} alt="School Logo" className='rounded-2xl mr-5'/>
                <h1 className='font-normal text-lg'><span className='cursor-pointer transition transform duration-300 hover:text-orange-500 hover:drop-shadow-[0_2px_1.5px_rgba(0,0,0,0.25)]' onClick={() => window.open('https://maps.app.goo.gl/CcW4qsS56Cpj6duu5')}>Annamalaiyaar Matriculation Higher Secondary School</span> <br />Higher Secondary Education: 91.83%</h1>
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

    const frontEndSkills=[
        {
            title:"HTML",
            level:85,
        },
        {
            title:"CSS",
            level:75,
        },
        {
            title:"JavaScript",
            level:70,
        },
        {
            title:"BootStrap",
            level:80,
        },
        {
            title:"TailWind",
            level:80,
        },
    
        {
            title:"React JS",
            level:70,
        },
    ]
    const backEndSkills=[
        {
            title:"Node JS",
            level:65,
        },

        {
            title:"MySQL",
            level:85,
        },

        {
            title:"PHP",
            level:75,
        },

        {
            title:"Laravel",
            level:65,
        },

        {
            title:"FireBase",
            level:60,
        },
    ]
    const toolSkills=[
        {
            title:"Git",
            level:60,
        },

        {
            title:"GitHub",
            level:70,
        },

        {
            title:"Vercel",
            level:75,
        },

        {
            title:"VS Code",
            level:85,
        },

        {
            title:"Figma",
            level:80,
        },
    ]

    const threedSkills=[

        {
            title:"Blender",
            level:85,
        },

        {
            title:"ThreeJS",
            level:75,
        },

        {
            title:"WebGL",
            level:70,
        },
    ];

    return (<>
    <Section>
        
        <motion.h1 className='text-3xl font-bold mb-5 mt-11 border-2 pl-4 pr-4 rounded-2xl pt-1 pb-1 transition transform duration-500 hover:scale-110 hover:shadow-lg hover:translate-y-2 hover:shadow-white shadow-sm shadow-white bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text'
        initial={{
            opacity: 1,
            y: 35,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 0.1,
            delay: 0
        }}
        whileHover={{
            scale: 1.1,
            y:10,
            x:5
        }}
        >Skills</motion.h1>
        <motion.h1 className='text-2xl font-semibold mb-3 text-white'
        initial={{
            opacity: 1,
            y: -35,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 0.5,
            delay: 0
        }}
        >These are some of the skills that I have learned over the past few years...</motion.h1>
        <div className='text-center'>
        <motion.div className='grid grid-rows-2 grid-cols-2 gap-4 ml-24'
        >
            <div className='border-2 rounded-3xl transition transform duration-300 hover:scale-105 shadow-gray-800 shadow-lg'>
                <div>
                    <h1 className='font-semibold text-2xl p-2 transition transform duration-200 hover:scale-125 cursor-pointer drop-shadow-[0_6px_4px_rgba(255,255,255,0.5)]'>FrontEnd Development</h1>
                </div>
                <div className='border-2 m-2 p-2 rounded-2xl pb-7'>
                    <div className=''>
                    <motion.div whileInView={"visible"}>   
                    <div>
                    <div className="grid grid-rows-2 grid-cols-3 gap-5 p-2">
                        {frontEndSkills.map((frontEndSkills, index) => (
                        <div className="" key={index}>
                            <motion.h3 className="text-black font-medium text-lg cursor-pointer transform duration-200 hover:scale-105 p-2"
                                initial={{
                                    opacity:0,
                                }}
                                variants={{
                                    visible:{
                                        opacity:1,
                                        transition:{
                                            duration:1,
                                            delay:1+index*0.2,
                                        }
                                    }
                                }}
                            >{frontEndSkills.title}</motion.h3>
                            <div className="h-2 w-full bg-white rounded-full">
                            <motion.div
                                className="h-full bg-orange-600 rounded-full flex pt-2 cursor-pointer"
                                style={{ width: `${frontEndSkills.level}%` }}
                                initial={{
                                    scaleX:0,
                                    originX:0,
                                }}
                                variants={{
                                    visible:{
                                        scaleX:1,
                                        transition:{
                                            duration:1,
                                            delay: 1+index*0.2,
                                        }
                                    }
                                }}
                            >{frontEndSkills.level}%</motion.div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    </motion.div>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded-3xl transition transform duration-300 hover:scale-105 shadow-gray-800 shadow-lg'>
                <div>
                    <h1 className='font-semibold text-2xl p-2 transition transform duration-200 hover:scale-125 cursor-pointer drop-shadow-[0_6px_4px_rgba(255,255,255,0.5)]'>BackEnd Development</h1>
                </div>
                <div className='border-2 m-2 p-2 rounded-2xl pb-7'>
                    <div className=''>
                    <motion.div whileInView={"visible"}>   
                    <div>
                    <div className="grid grid-rows-2 grid-cols-3 gap-5 p-2">
                        {backEndSkills.map((backEndSkills, index) => (
                        <div className="" key={index}>
                            <motion.h3 className="text-black font-medium text-lg cursor-pointer transform duration-200 hover:scale-105 p-2"
                                initial={{
                                    opacity:0,
                                }}
                                variants={{
                                    visible:{
                                        opacity:1,
                                        transition:{
                                            duration:1,
                                            delay:1+index*0.2,
                                        }
                                    }
                                }}
                            >{backEndSkills.title}</motion.h3>
                            <div className="h-2 w-full bg-white rounded-full">
                            <motion.div
                                className="h-full bg-orange-600 rounded-full flex pt-2 cursor-pointer"
                                style={{ width: `${backEndSkills.level}%` }}
                                initial={{
                                    scaleX:0,
                                    originX:0,
                                }}
                                variants={{
                                    visible:{
                                        scaleX:1,
                                        transition:{
                                            duration:1,
                                            delay: 1+index*0.2,
                                        }
                                    }
                                }}
                            >{backEndSkills.level}%</motion.div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    </motion.div>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded-3xl transition transform duration-300 hover:scale-105 shadow-gray-800 shadow-lg'>
                <div>
                    <h1 className='font-semibold text-2xl p-2 transition transform duration-200 hover:scale-125 cursor-pointer drop-shadow-[0_6px_4px_rgba(255,255,255,0.5)]'>3D Development</h1>
                </div>
                <div className='border-2 m-2 p-2 rounded-2xl pb-7'>
                    <div className=''>
                    <motion.div whileInView={"visible"}>   
                    <div>
                    <div className="grid grid-rows-2 grid-cols-3 gap-5 p-2">
                        {threedSkills.map((threedSkills, index) => (
                        <div className="" key={index}>
                            <motion.h3 className="text-black font-medium text-lg cursor-pointer transform duration-200 hover:scale-105 p-2"
                                initial={{
                                    opacity:0,
                                }}
                                variants={{
                                    visible:{
                                        opacity:1,
                                        transition:{
                                            duration:1,
                                            delay:1+index*0.2,
                                        }
                                    }
                                }}
                            >{threedSkills.title}</motion.h3>
                            <div className="h-2 w-full bg-white rounded-full">
                            <motion.div
                                className="h-full bg-orange-600 rounded-full flex pt-2 cursor-pointer"
                                style={{ width: `${threedSkills.level}%` }}
                                initial={{
                                    scaleX:0,
                                    originX:0,
                                }}
                                variants={{
                                    visible:{
                                        scaleX:1,
                                        transition:{
                                            duration:1,
                                            delay: 1+index*0.2,
                                        }
                                    }
                                }}
                            >{threedSkills.level}%</motion.div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    </motion.div>
                    </div>
                </div>
            </div>
            <div className='border-2 rounded-3xl transition transform duration-300 hover:scale-105 shadow-gray-800 shadow-lg'>
                <div>
                    <h1 className='font-semibold text-2xl p-2 transition transform duration-200 hover:scale-125 cursor-pointer drop-shadow-[0_6px_4px_rgba(255,255,255,0.5)]'>Other Tools</h1>
                </div>
                <div className='border-2 m-2 p-2 rounded-2xl pb-7'>
                    <div className=''>
                    <motion.div whileInView={"visible"}>   
                    <div>
                    <div className="grid grid-rows-2 grid-cols-3 gap-5 p-2">
                        {toolSkills.map((toolSkills, index) => (
                        <div className="" key={index}>
                            <motion.h3 className="text-black font-medium text-lg cursor-pointer transform duration-200 hover:scale-105 p-2"
                                initial={{
                                    opacity:0,
                                }}
                                variants={{
                                    visible:{
                                        opacity:1,
                                        transition:{
                                            duration:1,
                                            delay:1+index*0.2,
                                        }
                                    }
                                }}
                            >{toolSkills.title}</motion.h3>
                            <div className="h-2 w-full bg-white rounded-full">
                            <motion.div
                                className="h-full bg-orange-600 rounded-full flex pt-2 cursor-pointer"
                                style={{ width: `${toolSkills.level}%` }}
                                initial={{
                                    scaleX:0,
                                    originX:0,
                                }}
                                variants={{
                                    visible:{
                                        scaleX:1,
                                        transition:{
                                            duration:1,
                                            delay: 1+index*0.2,
                                        }
                                    }
                                }}
                            >{toolSkills.level}%</motion.div>
                            </div>
                        </div>
                        ))}
                    </div>
                    </div>
                    </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
        <div className="flex items-stretch ml-80">
            <div className='flex items-stretch ml-7'>
        <div className="mr-10 mt-9">
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
        </div>
    </div>
    </Section>
    </>)
}

const ProjectSection=(props)=>{

    const [isModal1Open, setIsModal1Open] = useState(false);
    const openModal1 = () => {
      setIsModal1Open(true);
    };
    const closeModal1 = () => {
      setIsModal1Open(false);
    };

    const [isModal2Open, setIsModal2Open] = useState(false);
    const openModal2 = () => {
      setIsModal2Open(true);
    };
    const closeModal2 = () => {
      setIsModal2Open(false);
    };

    const [isModal3Open, setIsModal3Open] = useState(false);
    const openModal3 = () => {
      setIsModal3Open(true);
    };
    const closeModal3 = () => {
      setIsModal3Open(false);
    };

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
        <motion.h1 className='font-bold text-4xl pl-3 pr-3 cursor-pointer mb-3 mt-14 bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text p-2 border-2 rounded-3xl transition transform duration-500 hover:scale-110 hover:shadow-lg hover:translate-y-2 hover:shadow-white shadow-sm shadow-white '
        initial={{
            opacity: 1,
            y: 25,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 0.2,
            delay: 0
        }}
        whileHover={{
            scale: 1.1,
            y:8,
            x:4
        }}
        >Projects</motion.h1>
        <motion.h1 className='text-2xl mt-4 ml-2 font-semibold text-white'
        initial={{
            opacity: 0,
            y: -80,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 0.2,
            delay: 0
        }}
        >I have worked on various projects, including Frontend Development and Backend Development.</motion.h1>
        <motion.h1 className='text-2xl ml-2 mb-10 font-semibold text-white'
        initial={{
            opacity: 0,
            y: -70,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        transition={{
            duration: 0.4,
            delay: 0.2
        }}
        >Here are some of the Web Development projects I have worked on:</motion.h1>
        <motion.div className='grid grid-cols-3 grid-rows-1 gap-5 '>
            <motion.div className='p-2 border-4 rounded-3xl border-orange-500 bg-blue-900 backdrop-blur-xl transition tarnsform duration-500 shadow-gray-500 shadow-lg'
            initial={{
                opacity: 1,
                y: -50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.2,
                delay: 0
            }}
            whileHover={{
                scale: 1.075,
                duration: 0.1
            }}
            >
                <motion.img src={chatBox} alt="Chat-Box" className='border-red-600 h-52 w-72 rounded-xl border-2 border-solid tarnsition transform duration-500 hover:border-dashed hover:border-orange-500 cursor-pointer ' 
                onClick={openModal1}
                whileHover={{
                    scale:0.95
                }}
                whileTap={{
                    scale:1
                }}
                />
                <div className='grid grid-cols-4 grid-rows-2 '>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>HTML</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>CSS</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>JS</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>NodeJS</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>SASS</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90 text-xs pt-1'>BootStrap</h1>
                </div>
                <h1 className='pt-3 pb-2 font-semibold text-gray-200'>This is ChatBox, a website which is used <br />to communicate with your Friends and<br /> Family to have FUN.</h1>
            </motion.div>
            <motion.div className='p-2 border-4 rounded-3xl border-orange-500 bg-blue-900 backdrop-blur-xl transition tarnsform duration-500 shadow-gray-500 shadow-lg'
            initial={{
                opacity: 1,
                y: -70,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.3,
                delay: 0
            }}
            whileHover={{
                scale: 1.075,
                duration: 0.1
            }}>
            <motion.img src={portFolio} alt="Port-Folio" className='border-green-200 h-52 w-72 rounded-xl border-2 border-solid tarnsition transform duration-500 hover:border-dashed hover:border-orange-500 cursor-pointer'
            onClick={openModal2}
            whileHover={{
                scale:0.95
            }}
            whileTap={{
                scale:1
            }}
            />
                <div className='grid grid-cols-4 grid-rows-2'>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>HTML</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>CSS</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>JS</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>NodeJS</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>ReactJS</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>ThreeJS</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>Blender</h1>
                </div>
                <h1 className='pt-3 pb-2 font-semibold text-gray-200'>This is a PortFolio website which uses <br />3D Design into the WebPage using<br /> Blender and ThreeJS.</h1>
            </motion.div>
            <motion.div className='p-2 border-4 rounded-3xl border-orange-500 bg-blue-900 backdrop-blur-xl transition tarnsform duration-500 shadow-gray-500 shadow-lg'
            initial={{
                opacity: 1,
                y: -90,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                duration: 0.4,
                delay: 0
            }}
            whileHover={{
                scale: 1.075,
                duration: 0.1
            }}>
                
            <motion.img src={retro} alt="Retro Website" className='border-blue-400 h-52 w-72 rounded-xl border-2 border-solid tarnsition transform duration-500 hover:border-dashed hover:border-orange-500 cursor-pointer'
            onClick={openModal3}
            whileHover={{
                scale:0.95
            }}
            whileTap={{
                scale:1
            }}
            />
                <div className='grid grid-cols-4 grid-rows-1 pt-3 pb-6'>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>HTML</h1>
                    <h1 className='cursor-pointer border-2 rounded-2xl pl-1 pr-1 text-center mt-1 bg-orange-500 border-black font-semibold tarnsition transform duration-500 hover:scale-90'>CSS</h1>
                </div>
                <h1 className='pt-3 pb-2 font-semibold text-gray-200'>This is a Retro-Themed website made<br />just using the HTML and CSS.</h1>
            </motion.div>
        </motion.div>
        <div className="flex items-stretch ml-96">
        <div className="mr-10 mt-9">
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
    {isModal1Open && <Modal1 handleClose={closeModal1} />}
    {isModal2Open && <Modal2 handleClose={closeModal2} />}
    {isModal3Open && <Modal3 handleClose={closeModal3} />}
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
        <h1 className="font-bold text-3xl text-center border-2 rounded-2xl pt-1 pb-1 pl-0 border-black transition-transform duration-300 transform hover:scale-110 hover:text-orange-500 hover:border-white cursor-pointer">Contact Us</h1><br />
        {state.succeeded ? (
            <h2 className="text-orange-500 font-bold text-2xl text-center p-16 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] transition-transform duration-300 transform hover:scale-125 hover:text-orange-600 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Thank You for you Message!</h2>
        ) : (
            <form onSubmit={handleSubmit}>
                <div className="pt-0 pb-3">
                    <br />
                    <label htmlFor="" className="cursor-pointer text-2xl font-medium text-black transition-transform duration-300 transform hover:text-orange-500 hover:drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,.8)]">
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
                    <label htmlFor="" className="cursor-pointer text-2xl font-medium text-black transition-transform duration-300 transform hover:text-orange-500 hover:drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,.8)]">
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
                    <label htmlFor="" className="cursor-pointer text-2xl font-medium text-black transition-transform duration-300 transform hover:text-orange-500 hover:drop-shadow-[0_1.5px_1.5px_rgba(0,0,0,.8)]">
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
        <img src={img} width={505} height={505} className='cursor-pointer border-4 border-black rounded-full transition-transform duration-300 transform hover:scale-90 hover:border-orange-600'/>
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