import {motion} from "framer-motion";
import BackDrop from "../BackDrop/backDrop";
import portFolio from "/projects/Portfolio.png"



const dropIn={
    hidden:{
        y:"-100vh",
        opacity: 0,
    },
    visible:{
        y:"100vh",
        opacity: 1,
        transition:{
            duration:0.5,
            type:"spring",
            damping:100,
            stiffness:500,
        },
    },
    exit:{
        y:"-100vh",
        opacity: 0,
    },
}

const Modal=({handleClose, text})=>{

    return(
        <BackDrop onClick={handleClose}>
            <motion.div
            onClick={(e)=>e.stopPropagation()}
            className="modal2 orange-gradient"
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <button onClick={handleClose} className="close-button">Close</button>
                <div className="flex items-stretch">
                <div className="flex-shrink-0 items-start">
                    <img src={portFolio} alt="Port-Folio" className="h-56 w-80 border-2 p-1 border-black rounded-3xl shadow-sm shadow-black transition transform duration-500 hover:scale-105 hover:translate-x-1 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"/>
                </div>
                <div className="flex-grow ml-4">
                <h1 className='pt-3 pb-2 font-semibold text-gray-300'>This is a PortFolio website which uses 3D Design into the WebPage using Blender and ThreeJS.</h1>
                <h1 className='pt-3 pb-2 font-semibold text-gray-300'>Immerse yourself in a visually captivating experience as you explore the depth and dimensionality of our creations.</h1>
                <h1 className='pt-3 pb-2 font-semibold text-gray-300'>Witness the seamless integration of cutting-edge 3D technology, bringing your digital journey to life with unparalleled realism.</h1>
                <button className="mr-5 border-black border-2 text-white rounded-xl p-1 pl-2 pr-2 mt-3 bg-black shadow-lg shadow-orange-500/50 transition-transform duration-200 transform hover:scale-110 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]"
                onClick={()=>window.open("https://github.com/HemanthRaj0C/My-First-Portfolio")}>
                    GitHub
                </button>
                <button className="border-black border-2 text-white rounded-xl p-1 pl-2 pr-2 mt-3 bg-black shadow-lg shadow-orange-500/50 transition-transform duration-200 transform hover:scale-110 hover:drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] hover:text-red-600 hover:font-bold"
                onClick={()=>window.open("https://hemanthraj0c.github.io/My-First-Portfolio/")}>
                    Live Preview
                </button>
                </div>
                </div>
            </motion.div>
        </BackDrop>

    )


}

export default Modal