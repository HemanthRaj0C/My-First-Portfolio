import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Leva } from "leva";
import { Interface } from "./components/Interface";
import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Cursor } from "./components/Cursor";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";

function App() {
  const [section, setSection]=useState(0)
  const [started, setStarted]=useState(false)
  const[menuOpened,setMenuOpened]=useState(false);

  useEffect(()=>{
    setMenuOpened(false);
  },[section])

  return (
    <>
    <MotionConfig transition={{
      type: "spring",
      mass:5,
      stiffness:500,
      damping:32,
      restDelta:0.001,
    }}>
    <LoadingScreen started={started} setStarted={setStarted} />
    <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
      <color attach="background" args={["#ececec"]} />
      <ScrollControls pages={5} damping={0.1}>
      <ScrollManager section={section} onSectionChange={setSection}/>
      <Scroll>
      <Experience section={section} menuOpened={menuOpened}/>
      </Scroll>
        <Scroll html>
          <Interface setSection={setSection}/>
        </Scroll>
      </ScrollControls>
    </Canvas>
    <Menu onSectionChange={setSection} menuOpened={menuOpened} setMenuOpened={setMenuOpened}/>
    <Cursor />
    <Leva hidden />
    </MotionConfig>
    </>
  );
}

export default App;