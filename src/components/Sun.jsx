export const Sun=()=>{

    return (
        <>
        <mesh scale={[0.4, 0.4, 0.4]} position={[0,0,0]}>
            <sphereGeometry />
            <meshBasicMaterial color="orange" transparent={true} />
        </mesh>
        </>
    )
}