import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from '../../Components/Card'
import Stack from '../../Components/Stack'
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Experience from "../../Components/Experience";
import data from '../../datas.json'

export default function Home(){

    return(
        <main>
            <nav className='nav'>
                <ul className='nav_list'>
                    <li><a className="text-none" href="#projects">Projets</a></li>
                    <li><a className="text-none" href="#stack">Stack</a></li>
                    <li><a className="text-none" href="#experiences">Experiences</a></li>
                    <li><a className="text-none" href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className='main'>
                <div className='main_content'>
                    <span className='main_content_subtitle'>Portfolio</span>
                    <h1 className='main_content_title'>ANTOINE <br/> GAUDRY</h1>
                    <div className='main_content_badge'>
                        <span className='main_content_badge_text'>Fullstack developper junior <br/> et designer web</span>
                        <div className='main_content_badge_icon'>
                            <FontAwesomeIcon icon="fa-solid fa-graduation-cap" size={'xl'}/>
                        </div>
                    </div>
                    <span className='main_content_text'>Apprennez-en plus sur moi et sur les <br/> projets sur lesquels j'ai travaillé.</span>
                </div>
                <div className='main_img'>
                    <img src="/image.svg" alt=""/>
                </div>
            </div>
            <div className='title' id="projects">
                <div className='title_content'>
                    <span className='title_text'>Projets</span>
                    <div className='title_border'></div>
                </div>
            </div>
            <div className='projects'>
                {data.map((project, index) => (
                    <Card key={index} index={index} project={project}/>
                ))}
            </div>
            
            <div className='inverted'>
                <div className='inverted_container'>
                    <div className='title' id='stack'>
                        <div className='title_content'>
                            <span className='title_text_inverted' style={{width: "739px"}}>decouvrez ma Stack</span>
                            <div className='title_border_inverted'></div>
                        </div>
                    </div>
                    <div className='stacks'>
                        <Stack/>
                    </div>
                </div>
            </div>
            <div className='title'>
                <div className='title_content'>
                    <span className='title_text' id="experiences">Experiences</span>
                    <div className='title_border'></div>
                </div>
            </div>
            <Experience/>

            <div className='contact'>
                <div className='title'>
                    <div className='title_content'>
                        <span className='title_text' id="contact">Contact</span>
                        <div className='title_border'></div>
                    </div>
                </div>
                <div className="contact_container">
                    <div className="contact_container_item">
                        <div className='contact_container_item_icon'>
                            <img src="/phone.svg" alt="" />
                        </div>
                        <div className="contact_container_item_content">06 78 23 38 21</div>
                    </div>
                    <div className="contact_container_item">
                        <div className='contact_container_item_icon'>
                            <img src="/envelope.svg" alt="" />
                        </div>
                        <div className="contact_container_item_content">antoinegd60420@gmail.com</div>
                    </div>
                    <div className="contact_container_item">
                        <a target="_blank" href="https://www.linkedin.com/in/antoine-gaudry-8b24251b9/" className='contact_container_item_icon'>
                            <img src="/linkedin.svg" alt="" />
                        </a>
                    </div>
                    <div className="contact_container_item">
                        <a target="_blank" href="https://www.malt.fr/profile/antoinegaudry?q=Antoine+Gaudry&sourceComponent=home_unlogged&searchid=65e5f0fda81bfa068cc64b41" className='contact_container_item_icon'>
                            <img src="/malt.svg" alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}