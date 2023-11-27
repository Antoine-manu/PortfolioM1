import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../../Components/Card'
import Stack from '../../Components/Stack'
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home(){

    const firstRef = useRef(null);
    const secondRef = useRef(null);
    const lastRef = useRef(null);

    return(
        <main>
            <nav className='nav'>
                <ul className='nav_list'>
                    <li>Projets</li>
                    <li>Stack</li>
                    <li>Experiences</li>
                    <li>Contact</li>
                </ul>
            </nav>
            <div className='main'>
                <div className='main_content'>
                    <span className='main_content_subtitle'>Portfolio</span>
                    <h1 className='main_content_title'>ANTOINE <br/> GAUDRY</h1>
                    <div className='main_content_badge'>
                        <span className='main_content_badge_text'>Fullstack developper junior <br/> and designer web</span>
                        <div className='main_content_badge_icon'>
                            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size={'xl'}/>
                        </div>
                    </div>
                    <span className='main_content_text'>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit.  Mauris sit amet tempor mi.</span>
                </div>
                <div className='main_img'>
                    <img src="/image.svg" alt=""/>
                </div>
            </div>
            <div className='title'>
                <div className='title_content'>
                    <span className='title_text'>Projets</span>
                    <div className='title_border'></div>
                </div>
            </div>
            <div className='projects'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
            
            <div className='inverted'>
                <div className='inverted_container'>
                    <div className='title'>
                        <div className='title_content'>
                            <span className='title_text_inverted'>Stack</span>
                            <div className='title_border_inverted'></div>
                        </div>
                    </div>
                    <div className='stacks'>
                        <Stack firstRef={firstRef} secondRef={secondRef} lastRef={lastRef}/>
                        <div className='title_fixed'>
                        <div className='title'>
                            <div className='title_content'>
                                <span className='title_text'>Projets</span>
                                <div className='title_border'></div>
                            </div>
                        </div>
                </div>
                    </div>
                </div>
                <div className='stacks_triggers'>
                    <div className='stacks_trigger' id='firstTrigger' ref={firstRef}></div>
                    <div className='stacks_trigger' id='secondTrigger' ref={secondRef}></div>
                    <div className='stacks_trigger' id='lastTrigger' ref={lastRef}></div>
                </div>
                
            </div>
            

            <div className="experience"></div>
        </main>
    )
}