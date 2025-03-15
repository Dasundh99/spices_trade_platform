import React, { ReactNode } from 'react'
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Magnetic from '../Magnetic';

interface ButtonProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  backgroundColor?: string;
}

export default function index({children, backgroundColor="#165b03", ...attributes}: ButtonProps) {

  const circle = useRef<HTMLDivElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  let timeoutId: NodeJS.Timeout | null = null;
  useEffect( () => {
    timeline.current = gsap.timeline({paused: true})
    timeline.current
      .to(circle.current, {top: "-25%", width: "150%", duration: 0.4, ease: "power3.in"}, "enter")
      .to(circle.current, {top: "-150%", width: "125%", duration: 0.25}, "exit")
  }, [])
  
  const manageMouseEnter = () => {
    if(timeoutId) clearTimeout(timeoutId)
    timeline.current?.tweenFromTo('enter', 'exit');
  }

  const manageMouseLeave = () => {
    timeoutId = setTimeout( () => {
      timeline.current?.play();
    }, 300)
  }

  return (
    <Magnetic>
      <div className="relative z-10 transition-colors duration-400 ease-linear group-hover:text-white" style={{overflow: "hidden"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave()}} {...attributes}>
          {children}
        <div ref={circle} style={{backgroundColor}} className=" h-[150%] absolute rounded-full top-full"></div>
      </div>
    </Magnetic>
  )
}