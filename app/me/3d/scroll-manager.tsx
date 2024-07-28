import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';
import React, { Dispatch, MutableRefObject, SetStateAction, useEffect, useRef } from 'react'
import {  gsap } from "gsap"
import { Ref } from 'react';

 
interface ScrollData {
  fill: HTMLDivElement;
  el: HTMLDivElement;
  offset: number;
scroll: MutableRefObject<number>;
  pages: number;
}

function ScrollManager({section, onSectionChange}: {section: number, onSectionChange: Dispatch<SetStateAction<number>>}) {
  const data = useScroll() as unknown as ScrollData; 
  const lastScroll = useRef(0);
  const isAnimating = useRef(false);

  
  useEffect(() => {
    console.log("CHANGING SECTION")
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
  }, [section])

  useFrame(() => {
      if (isAnimating.current) {
        lastScroll.current = data.scroll.current;
        return;
      }
       
      const currentSection = Math.floor(data.scroll.current * data.pages)

      if (currentSection !== section) {
        onSectionChange(currentSection)
      }

      /* if (data.scroll.current * data.pages > currentSection) {
        onSectionChange(currentSection + 1)
        } else if (data.scroll.current * data.pages < currentSection) {
          onSectionChange(currentSection - 1)
          
      } else {
        console.log("SAME SECTION")
      } */
      
      if (data.scroll.current < lastScroll.current && currentSection > 0) {
        onSectionChange(currentSection - 1)
        } else if (data.scroll.current > lastScroll.current && currentSection < data.pages - 1) {
        onSectionChange(currentSection + 1)
      }
           
       /* if (data.scroll.current > lastScroll.current && currentSection === 0) {
         onSectionChange(1)
         } 

      if (data.scroll.current < lastScroll.current && data.scroll.current < 1 / (data.pages - 1) ) {
        onSectionChange(0)
        } */
      lastScroll.current = data.scroll.current;
  })

  return (
    null
  )
}

export default ScrollManager
