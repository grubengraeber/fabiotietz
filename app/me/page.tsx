'use client'

import { Canvas } from "@react-three/fiber";
import { Smatrics } from "./3d/work/smatrics/smatrics";
import { ScrollControls, Scroll } from "@react-three/drei";
import Interface from "./3d/interface";
import { useTheme } from "next-themes";
import { useState } from "react";
import ScrollManager from "./3d/scroll-manager";

export default function Me() {
    const theme = useTheme();
    /* const isDarkMode = theme.theme === "dark" || (theme.theme === "system" && theme.systemTheme === "dark") */
    const [section, setSection] = useState(0)
    return (
        <>
        <div className="mt-8 mb-8 w-full h-screen">
            <Canvas shadows camera={{ position: [3, 3, 3], fov: 40 }}>
                {/* <color attach={'background'} args={isDarkMode ? ['#2f2f2f'] : ['#ececec']} /> */}
            <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            <Smatrics />
            <Scroll html>
            <Interface />
            </Scroll>
</ScrollControls>
{/* <OrbitControls /> */}
            </Canvas>
            <Menu />
        </div>
        </>
    )
}
