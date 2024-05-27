"use client"

import { Card } from "@/components/ui/card";
import CV from "./cv";

export default function Me() {
    const oneThirdScreenHeight = window.innerHeight * 0.33;

    return <div className="flex items-center justify-between" style={{ height: oneThirdScreenHeight }}>
        <div className='p-4 '>

            <h1 className='text-black'>Me</h1>
        </div>
        <Card>
            <CV /> {/* TODO: downloadable CV */}
        </Card>
    </div>
}
