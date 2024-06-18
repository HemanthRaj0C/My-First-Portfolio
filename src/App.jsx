import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Leva } from "leva";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import ConstructionNotice from "./ConstructionNotice";
import './index.css'

function App() {
  const [section, setSection]=useState(0)
  const [started, setStarted]=useState(false)
  const[menuOpened,setMenuOpened]=useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    setMenuOpened(false);
  },[section])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1279 || window.innerHeight <= 719);
    };
  
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
    {isMobile ? <ConstructionNotice /> : 
    <MotionConfig transition={{
      type: "spring",
      mass:3,
      stiffness:200,
      damping:30,
      restDelta:0.001,
    }}>
    <LoadingScreen started={started} setStarted={setStarted} />
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#DBEAFE"]} />
      <ScrollControls pages={5} damping={0.1}>
      <ScrollManager section={section} onSectionChange={setSection} setSection={setSection} />
      <Scroll>
      <Experience section={section} menuOpened={menuOpened}/>
      </Scroll>
        <Scroll html>
          <Interface setSection={setSection} section={section} onSectionChange={setSection} />
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
    <Leva hidden />
    </MotionConfig>}
    </>
  );
}

export default App;