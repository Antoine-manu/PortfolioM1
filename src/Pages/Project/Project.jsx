import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default function Project(){

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const lastRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        ScrollTrigger.create({
          trigger: firstRef.current,
          start: 'top +-100px',
          end: 'bottom bottom',
          markers: true,
          onEnterBack: () => {
            console.log('1');
          },
          onLeave: () => {
            console.log('2');
          },
        })
        ScrollTrigger.create({
          trigger: secondRef.current,
          start: 'top top',
          end: 'bottom bottom',
          markers: true,
          onEnterBack: () => {
            console.log('3');
          },
          onLeave: () => {
            console.log('4');
          },
        })
        ScrollTrigger.create({
          trigger: lastRef.current,
          start: 'top top',
          end: 'bottom bottom',
          markers: true,
          onEnterBack: () => {
            console.log('5');
          },
          onLeave: () => {
            console.log('6');
          },
        })
      }, []);

    return(
        <div className='test'>
          <div className='test2'></div>
          <div className='test2'></div>
            <div className="gallery">
                <div className="left">
                  <div className='left_child' ref={firstRef}></div>
                  <div className='left_child' ref={secondRef}></div>
                  <div className='left_child' ref={lastRef}></div>
                </div>
                <div className="right">
                    <div className="photos"></div>
                </div>
            </div>
            <div className='test2'></div>
        </div>
    )
}