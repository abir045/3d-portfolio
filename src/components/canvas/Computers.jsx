import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({isMobile}) => {
  
  // const computer = useGLTF('./the_night_owls_desk/scene.gltf')
  // const computer = useGLTF('./motherboard__components/scene.gltf')
  // const computer = useGLTF('./pc_gamer_animation/scene.gltf')
  const computer = useGLTF('./gaming_desktop_pc/scene.gltf')
  // const computer = useGLTF('./desktop_pc/scene.gltf')

  return ( 
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
      position={[-20,50 ,10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      shadow-mapSize={1024}      
      
      />
      <primitive 
      
      object={computer.scene}
      scale={ isMobile? 0.7 : 0.75}
      position={isMobile? [0,-3, -2.2] : [0,-3.25 , -1.5]}
      rotation={[-0.01, -0.2, -0.1]}
      />
       
      
    </mesh>
  )
    
}



const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false) ;

  useEffect(() => {

  // add event listener that changes to the screen size 
  const mediaQuery = window.matchMedia('(max-width:500px)')

   //set the initial value of the 'isMobile' state variable
  setIsMobile(mediaQuery.matches) ;
 
  //define a callback function to handle changes to the media query
 const handleMediaQueryChange = (event) => {
  setIsMobile(event.matches)


  // adding the call back function as a event listener for changes to media Query
  mediaQuery.addEventListener('change', handleMediaQueryChange) ;

  //removing event listener when the component is unmounted
  return () => {
    mediaQuery.removeEventListener('change', handleMediaQueryChange)
  }
}

},[])

  return (
    <Canvas
    frameloop="demand"
    shadows
     dpr={[1, 2]}
    camera={{position: [20,3,5], fov:25 }}
    gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />} >
       <OrbitControls 
       enableZoom={false}
       maxPolarAngle={Math.PI / 2}
       minPolarAngle={Math.PI /2}
       
       />
      
      
      <Computers isMobile={isMobile} />

      </Suspense>
     
     <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;
