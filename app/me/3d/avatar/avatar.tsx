"use client";

import { Canvas } from "@react-three/fiber";
import MeshComponent from "../mesh";
import { OrbitControls } from "@react-three/drei";



export function Avatar() {

    return (
      <div className='flex justify-center items-center h-screen'>
        <Canvas className='h-2xl w-2xl'>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
          <MeshComponent />
          <OrbitControls />
        </Canvas>
      </div>
    );
}
