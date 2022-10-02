import { OBJLoader  } from 'three/examples/jsm/loaders/OBJLoader'
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'


const ISSModel = ({position}) => {
    
    const materials = useLoader(MTLLoader, "models/material.lib")
    const obj = useLoader(OBJLoader, 'models/scene.obj')


    const issRef = useRef()

    useFrame(()=>{
        if(!issRef.current){
            return
        }

        // issRef.current.position = [0,0,10]
        
    })

    return ( 
        <primitive ref={issRef} object={obj} position={position} scale={0.01} rotation={[0, 5.5, 0]}>
            
        </primitive>
     );
}
 
export default ISSModel;