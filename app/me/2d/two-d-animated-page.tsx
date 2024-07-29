import React from 'react'
import Interface from '../shared/interface'
import { motion, useScroll } from 'framer-motion'
import Menu from './menu';

function TwoDAnimatedPage() {
    const { scrollYProgress } = useScroll();
    return (
        <div style={{
            scrollBehavior: 'smooth',
        }}>
            <motion.div style={{ scaleX: scrollYProgress }} />

            <div style={{ position: 'sticky', top: 100, left: 0, zIndex: 1000 }}>
                <Menu />
            </div>
            <div className='justify-center align-middle content-center flex text-center'>
                <Interface />
            </div>
        </div>
    )
}

export default TwoDAnimatedPage
