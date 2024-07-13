'use client'

import { Avatar } from "./3d/avatar/avatar";
import Journey from "./journey/journey";

export default function Me() {

    return (
        <div className="flex items-center justify-center mb-16 w-full">
            <Journey />
            <Avatar />
            {/* <CvStructure /> */}
        </div>
    )
}
