import { Avatar } from "./Avatar";
import { useControls } from "leva";
import { Sun } from "./Sun";
import { BackGround } from "./Background";
import { Office } from "./Office";
import {motion} from "framer-motion-3d"
import { Avatar2 } from "./Avatar2";
import { animate, useMotionValue } from "framer-motion";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";

export const Experience = (props) => {
  
  const {section, menuOpened} =props
  const {animation}=useControls({
    animation:{
      value:"Idle",
      options:["Idle","Wave","Bored","Typing"]
    }
  })

  return (
    <>
      <BackGround />
      <ambientLight intensity={1} />

      <motion.group position={[-6, -0.9, 0]} 
      animate={{
        x:section==1?2.2:-6.5,
        y:section==1?-0.85:-1,
      }}
      >
        <Sun />
      </motion.group>

      <motion.group position-y={0.1} position-x={2.2} rotation-z={0.2} rotation-x={-0.2} rotation-y={0} scale={[0.8, 0.8, 0.8]} 
      animate={{
        x:section==1?2:2,
        y:section==1?-3:0,
      }}
      >
        <Avatar animation={section === 0 ? "Idle" : "Wave"}/>
      </motion.group>
      
      <motion.group rotation-z={0.27} rotation-x={-0.2} rotation-y={0.2} 
      animate={{
        x:section==4? 1.75:3,
        y:section==4? -11.5:-11.5,
      }}
      > 
        <Avatar2 />
      </motion.group>

      <motion.group position-y={0.1} position-x={0} rotation-z={-0.4} rotation-x={-0.3} rotation-y={2.8} scale={[0.4, 0.4, 0.4]}
      animate={{
        x:section==3?2:3,
        y:section==3? -8.2:-7.5,
      }}
      >
        <Office />
      </motion.group>
    </>
  );
};
