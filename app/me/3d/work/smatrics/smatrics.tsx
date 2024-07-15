"use client";

import { Canvas } from "@react-three/fiber";
import MeshComponent from "../../mesh";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";



export function Smatrics() {

    return (
      <div className='flex justify-center items-center h-screen'>
        <Canvas className='h-2xl w-2xl'>
        <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={3} />
          <MeshComponent />
          <OrbitControls />
        </Canvas>
      </div>
    );
}
