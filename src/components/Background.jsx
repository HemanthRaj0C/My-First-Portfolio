import { Sphere, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { useEffect, useRef } from "react"
import * as THREE from "three"

export const BackGround=()=>{
    const material=useRef();
    const color=useRef({
        color:"#DBEAFE"
    })
    const data=useScroll();
    const timeLine=useRef();

    useFrame(()=>{
        timeLine.current.progress(data.scroll.current)
        material.current.color=new THREE.Color(color.current.color)
    })

    useEffect(()=>{
        timeLine.current=gsap.timeline();
        timeLine.current.to(
            color.current,{
                color:"#b5d4ff"
            })
        timeLine.current.to(
            color.current,{
                color:"#3d8eff"
                })
        timeLine.current.to(
            color.current,{
                color:"#2264bf"
                })
        timeLine.current.to(
            color.current,{
                color:"#223d63"
                })
        timeLine.current.to(
            color.current,{
                color:"#2f3640"
                })
    },[])

    return(<>
    <Sphere scale={[30,30,30]}>
        <meshBasicMaterial ref={material} side={THREE.BackSide} toneMapped={false}/>
    </Sphere>
    </>)
}

