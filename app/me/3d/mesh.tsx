import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Mesh } from "three";
import { useEffect, useRef } from "react";
import { Model } from "@/app/components/animation/model"
import { useControls } from "leva";

function MeshComponent({section}: {section: number}) {
    /* const fileUrl = "/models/6692c2f7f174a747797255bb.glb";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
 }); */

 const animationOptions = ["Typing", "SalsaDance", "Standing", "Sitting", "Capoeira", "SkateboardingPushing", "SkateboardingCruising", "ShoulderThrow", "Waving", "Salute"];

 const [{animation}, set] = useControls(() => ({
  animation: {
    value: "Typing",
  options: animationOptions
  }
})) 

useEffect(() => {
  console.log(animation + " animation")
  set({animation: animationOptions[section]})
} , [section]) 


  

    return (
        <mesh>
            <Model animation={animation} />
        </mesh>
    /*     <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh> */
      );
}

export default MeshComponent
