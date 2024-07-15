'use client'

import { Smatrics } from "./3d/work/smatrics/smatrics";
import Journey from "./journey/journey";

export default function Me() {

    return (
        <div className="flex items-center justify-center mb-16 w-full">
            <Journey />
            <Smatrics />
            {/* <CvStructure /> */}
        </div>
    )
}
