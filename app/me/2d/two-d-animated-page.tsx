import React, { useEffect, useState } from 'react'
import Interface from '../shared/interface'
import { motion, useScroll } from 'framer-motion'
import Menu from './menu';
import { isMobile } from '@/app/utils/detection/is-mobile';
import MobileMenu from './mobile-menu';

function TwoDAnimatedPage() {
    const { scrollYProgress } = useScroll();
    const [useNavigator, setUseNavigator] = useState<Navigator>();
  useEffect(() => {
    if (navigator) {
        setUseNavigator(navigator);
    }
  }, []);
    return (
        <div style={{
            scrollBehavior: 'smooth',
        }}>
            <motion.div style={{ scaleX: scrollYProgress }} />

            {
                useNavigator && isMobile(useNavigator.userAgent) ? 
<MobileMenu />
                : 
            <div style={{ position: 'sticky', top: 100, left: 0, zIndex: 1000 }}>
                <Menu />
            </div>

            }
            <div className='justify-center align-middle content-center flex text-center'>
                <Interface mobile={useNavigator && isMobile(useNavigator?.userAgent) ? true : false} />
            </div>
        </div>
    )
}

export default TwoDAnimatedPage
