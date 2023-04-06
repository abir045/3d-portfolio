import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";
import { useLoader } from "@react-three/fiber";

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const Earth = () => {
  // const earth = useGLTF("./dream_computer_setup/scene.gltf");
  const earth = useLoader(GLTFLoader, './dream_computer_setup.glb')
  
  return (

    <mesh>
       <ambientLight intensity={1.5} />
       <directionalLight color="violet" position={[0, 0, 5]} />
      <hemisphereLight intensity={1.5} groundColor="white" />
      <pointLight intensity={1.5} />
      <spotLight
      position={[-20,50 ,10]}
      angle={0.12}
      penumbra={1}
      intensity={1.5}
      
      shadow-mapSize={1024}      
      
      />
    <primitive object={earth.scene} scale={0.25} position-y={0} rotation-y={0} />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
    
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 100,
        position: [-4, 3, 6],
      }}
      
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
