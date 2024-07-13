import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";
import { useRef } from "react";
import { Model } from "@/app/components/animation/6692c2f7f174a747797255bb"

function MeshComponent() {
    /* const fileUrl = "/models/6692c2f7f174a747797255bb.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
 }); */
    return (
        <mesh>
            <Model />
        </mesh>
    /*     <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh> */
      );
}

export default MeshComponent
