"use client";

import MeshComponent from "../../mesh";


export function Smatrics ({section}: { section: number}) {

    return (
      <>
        <pointLight position={[10, 10, 10]} />
          <ambientLight intensity={3} />
          <MeshComponent section={section} />
      </>
    );
}
