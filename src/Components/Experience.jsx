import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// https://gsap.com/community/forums/topic/24622-i-want-to-stop-scrolling-untill-the-animation-ends-in-gsap-3-how-to-do-this/
// https://www.youtube.com/watch?v=JnLn8Rq4p_I
// https://codepen.io/snorkltv/pen/RwYdVyK
// https://gsap.com/community/forums/topic/37168-scrolltrigger-pin-an-element-and-change-that-elements-content-on-scroll/
// Sur le coté une div avec 3 div a 1000px chacune, la stack fixe et je declenche js quand on passe dans l'autre div
export default function Experience(){
    const [active, setActive] = useState(4);


    return(
        <div className="experience">
            <div className="experience-lane">
                <div onClick={() => setActive(0)} className={active === 0 ? "experience-lane-active" : "highlightEXP"}>
                    2020
                </div>
                <div onClick={() => setActive(1)} className={active === 1 ? "experience-lane-active" : "highlightEXP"}>
                    2021
                </div>
                <div onClick={() => setActive(2)} className={active === 2 ? "experience-lane-active" : "highlightEXP"}>
                    2022
                </div>
                <div onClick={() => setActive(3)} className={active === 3 ? "experience-lane-active" : "highlightEXP"}>
                    2023
                </div>
                <div onClick={() => setActive(4)} className={active === 4 ? "experience-lane-active" : "highlightEXP"}>
                    <div>2024</div>
                    <div></div>
                </div>
            </div>
            <div className='experience_single'>
                {active === 0 ?
                    <div className='experience_single_content'>
                        <span className='experience_single_content_title'>1 ère année Bachelor Web, La MANU</span>
                        <div className='experience_single_content_separator'></div>
                        <span className='experience_single_content_content'>
                            Première année dans le bachelor metiers du numériques a La MANU, Amiens ou j'ai pu découvrir le développement web / Design et autres métiers du numérique. <br/>  <br/> Je conclus ma premiere année par un stage de 2 mois dans l'entreprise MentalWorks ou j'ai pu participer au developpement de sites avec WordPress et travailler sur leurs <br/>  thêmes enfants
                        </span>
                    </div>
                    :
                active === 1 ?
                    <div className='experience_single_content'>
                        <span className='experience_single_content_title'>2 ère année Bachelor Web, La MANU / Stage Teleric</span>
                        <div className='experience_single_content_separator'></div>
                        <span className='experience_single_content_content'>
                            Deuxieme année dans le bachelor des metiers du numérique ou on apprends des notions plus avancés de programation avec notament le php et l'orienté objet, également la découverte de React. <br/>  <br/> Cette Deuxieme année est conclue par un stage chez Teleric de 5 mois avec pour mission de participer au developpement de leurs application pour capteur et logiciel de pointage avec les technologies Laravel, Vue.Js et Jquery
                        </span>
                    </div>
                    :
                active === 2 ?
                    <div className='experience_single_content'>
                        <span className='experience_single_content_title'>3 ère année Bachelor Web, La MANU / Alternance  Codecodex</span>
                        <div className='experience_single_content_separator'></div>
                        <span className='experience_single_content_content'>
                            Troisième et dernière année du bachelor en spécialité Creative Dev etant spécialisé sur la partie Front-End et le design d'application. J'obtiens mon diplôme avec mention Bien en etant majeur de promo <br/>  <br/> Première année d'alternance chez Codecodex une entreprise qui créer diverse application web en prestation pour laquelle j'occupe le poste de développeur Full-Stack touchant a du Symfony / Design d'application /React / Jquery
                        </span>
                    </div>
                    :
                active === 3 ?
                    <div className='experience_single_content'>
                        <span className='experience_single_content_title'>1 ère année Mastere Ingénierie du Web, ESGI / Alternance  Codecodex </span>
                        <div className='experience_single_content_separator'></div>
                        <span className='experience_single_content_content'>
                            Premiere année de Mastère Inégerie du Web a l'ESGI Lille <br/> <br/> Deuxième année d'alternance chez Codecodex une entreprise qui créer diverse application web en prestation pour laquelle j'occupe le poste de développeur Full-Stack touchant a du Symfony / Design d'application /React / Jquery
                        </span>
                    </div>
                    :
                    <div className='experience_single_content'>
                        <span className='experience_single_content_title'>Fin de 1 ère année Mastere Ingénierie du Web, ESGI / Alternance  Codecodex </span>
                        <div className='experience_single_content_separator'></div>
                        <span className='experience_single_content_content'>
                             Premiere année de Mastère Inégerie du Web a l'ESGI Lille <br/> <br/> Deuxième année d'alternance chez Codecodex une entreprise qui créer diverse application web en prestation pour laquelle j'occupe le poste de développeur Full-Stack touchant a du Symfony / Design d'application /React / Jquery
                        </span>
                    </div>
                }
            </div>
        </div>
    )
}