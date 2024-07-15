"use client";

import MeshComponent from "../../mesh";
import { OrbitControls } from "@react-three/drei";



export function Smatrics() {

    return (
      <>
        <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={3} />
          <MeshComponent />
      </>
    );
}
