import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react'
import {  gsap } from "gsap"

function ScrollManager({section, onSectionChange}: {section: number, onSectionChange: Dispatch<SetStateAction<number>>}) {
  const data = useScroll(); 
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  useEffect(() => {
    data.fill.classList.add("top-0")
    data.fill.classList.add("absolute")
    gsap.to(data.el, { 
      duration: 1, 
      scrollTop: section * data.el.clientHeight,
      onStart: () => {
        isAnimating.current = true; 
      },
      onComplete: () => {
        isAnimating.current = false;
      }
    })
  }, [])

  useFrame(() => {
    if (isAnimating.current) {
       lastScroll.current = data.offset
       return;
       }
       
       const currentSection = Math.floor(data.offset * data.pages)
       
       if (data.offset > lastScroll.current && currentSection === 0) {
         onSectionChange(1)
         }
         if (data.offset < lastScroll.current && data.offset < 1 / (data.pages - 1) ) {
           onSectionChange(0)
           }
          lastScroll.current = data.offset;
  })

  return (
    null
  )
}

export default ScrollManager
