import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {Link, useParams} from 'react-router-dom'
import data from '../../datas.json'

export default function Project(){
    const { id } = useParams();
    const [project, setProject] = useState(data[id])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return(
        <div className='project'>
            <Link className="project-return" to='/'>
                <FontAwesomeIcon icon="fa-solid fa-circle-chevron-left" size={"xl"} color={"white"} />
            </Link>
            <div className="project-head">
                <div className="project-head-img">
                    <img src={"/projects/" + project.mainImage + '.png'} alt=""/>
                </div>
                <div className="project-head-text">
                    <span className="project-head-text-title">{project.title}</span>
                    <span className="project-head-text-subtitle">{project.desc}</span>
                    <div className="project-head-text-icons">
                        {project.icons.map(icon => (
                            <div className='main_content_badge_icon'>
                                <FontAwesomeIcon icon={"fa-solid " + icon} size={'xl'}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="inverted" style={{width: "100%"}}>
                <div className='inverted_container' style={{height: "auto", marginBottom: 120}}>
                    <div className='title'>
                        <div className='title_content'>
                            <span className='title_text_inverted' >Projet</span>
                            <div className='title_border_inverted'></div>
                        </div>
                    </div>
                    <div className="project-me">
                        <div className="project-me-left">
                            <span className="project-me-title">Objectifs</span>
                            <ul className="project-me-list">
                                {project.obj.map((objectif, index) => (
                                    <li key={index}>{objectif}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="project-me-right">
                            <span className="project-me-title">Mon role</span>
                            <ul className="project-me-list">
                                {project.role.map((role, index) => (
                                    <li key={index}>{role}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='title'>
                <div className='title_content'>
                    <span className='title_text' style={{width: "629px"}}>Charte graphique</span>
                    <div className='title_border'></div>
                </div>
            </div>
            <div className="project-cg" style={{marginBottom: 60}}>
                <div className="project-cg-left">
                    <div className="project-cg-left-font">
                        <span className="project-cg-left-font-title">Primary Font : {project.primaryFont}</span>
                        <span className="project-cg-left-font-ex">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
                    </div>
                    <div className="project-cg-left-font">
                        <span className="project-cg-left-font-title">Primary Font : {project.secondaryFont}</span>
                        <span className="project-cg-left-font-ex">A B C D E F G H I J K L M N O P Q R S T U V W X Y Z</span>
                    </div>
                </div>
                <div className="project-cg-right">
                    {project.colors.map((color, index) => (
                        <div key={index} style={{color: color.text, backgroundColor: color.color}}>{color.color}</div>
                    ))}
                </div>
            </div>
            <div className='title'>
                <div className='title_content'>
                    <span className='title_text'>Galerie</span>
                    <div className='title_border'></div>
                </div>
            </div>
            <div className="project-gallery">
                {project.images.map((image, index) => (
                    <img key={index} src={"/projects/" + image + '.png'} alt=""/>
                ))}
            </div>
        </div>
    )
}