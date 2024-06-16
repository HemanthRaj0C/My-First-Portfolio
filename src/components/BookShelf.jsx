/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFBX,useAnimations } from '@react-three/drei'
import { useEffect } from 'react'

export function BookShelf(props) {
  const { nodes, materials } = useGLTF('models/Book.glb')
  const group=useRef()
  const {animations: takingAnimation} = useFBX("animations/Taking Item.fbx")

  takingAnimation[0].name="Taking"

  const {actions}=useAnimations(takingAnimation,group)

  useEffect(()=>{
    actions["Taking"].reset().fadeIn(0.5).play()
    return ()=>{
        actions["Taking"].reset().fadeOut(0.5)
    }
  },[])

  return (
    <group {...props} dispose={null} ref={group}>
      <group name="Armature" position={[0, 0, 0.5]} scale={[1.2, 1.2, 1.2]}>
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Body"
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Hair"
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Bottom"
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Footwear"
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Outfit_Top"
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
        />
        <primitive object={nodes.Hips} />
      </group>
      <group rotation-y={-Math.PI} position-y={0} position-z={2}>
      <group
        name="BookCase_LeftDoor"
        position={[-0.77, 0.588, 0.299]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}>
        <mesh
          name="BookCase_LeftDoor_1"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_LeftDoor_1.geometry}
          material={materials.DarkWood}
        />
        <mesh
          name="BookCase_LeftDoor_2"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_LeftDoor_2.geometry}
          material={materials.Metal}
        />
      </group>
      <group
        name="BookCase_RightDoor"
        position={[0.775, 0.588, 0.299]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}>
        <mesh
          name="BookCase_RightDoor_1"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_RightDoor_1.geometry}
          material={materials.DarkWood}
        />
        <mesh
          name="BookCase_RightDoor_2"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_RightDoor_2.geometry}
          material={materials.Metal}
        />
      </group>
      <group
        name="BookCase_Single"
        position={[0.004, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}>
        <mesh
          name="BookCase_Single_1"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_1.geometry}
          material={materials.Wood1}
        />
        <mesh
          name="BookCase_Single_2"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_2.geometry}
          material={materials.Wood2}
        />
        <mesh
          name="BookCase_Single_3"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_3.geometry}
          material={materials.DarkWood}
        />
        <mesh
          name="BookCase_Single_4"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_4.geometry}
          material={materials.Cover1}
        />
        <mesh
          name="BookCase_Single_5"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_5.geometry}
          material={materials.Pages}
        />
        <mesh
          name="BookCase_Single_6"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_6.geometry}
          material={materials.Cover6}
        />
        <mesh
          name="BookCase_Single_7"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_7.geometry}
          material={materials.Cover2}
        />
        <mesh
          name="BookCase_Single_8"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_8.geometry}
          material={materials.Cover3}
        />
        <mesh
          name="BookCase_Single_9"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_9.geometry}
          material={materials.Cover4}
        />
        <mesh
          name="BookCase_Single_10"
          castShadow
          receiveShadow
          geometry={nodes.BookCase_Single_10.geometry}
          material={materials.Cover5}
        />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('models/Book.glb')