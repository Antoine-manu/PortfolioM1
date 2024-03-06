import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// https://gsap.com/community/forums/topic/24622-i-want-to-stop-scrolling-untill-the-animation-ends-in-gsap-3-how-to-do-this/
// https://www.youtube.com/watch?v=JnLn8Rq4p_I
// https://codepen.io/snorkltv/pen/RwYdVyK
// https://gsap.com/community/forums/topic/37168-scrolltrigger-pin-an-element-and-change-that-elements-content-on-scroll/
// Sur le coté une div avec 3 div a 1000px chacune, la stack fixe et je declenche js quand on passe dans l'autre div
export default function Card(){
    const [active, setActive] = useState(0);
    
    const elementRef = useRef(null);
    useEffect(() => {
        console.log('oui')
        const elements = document.querySelectorAll('.highlight');

        elements.forEach(element => {
            console.log(element)
            element.classList.remove('highlight');
            element.classList.add('highlight');
        });
    }, [active]);

    return(
        <div className='stack' ref={elementRef}>
            <div className='stack_imgs'>
                <div className='stack_imgs_img'>
                    <div className={active === 0 ? "stack_imgs_img_line" : "" }></div>
                    {active === 0  ?
                        <img style={{cursor: 'pointer'}} className='stack_animate'  src="https://antoine-manu.github.io/PortfolioM1/stack_open.svg" alt="" />

                    :
                        <img onClick={() => setActive(0)} style={{cursor: 'pointer'}} className='stack_animate_default' src="https://antoine-manu.github.io/PortfolioM1/stack_close.svg" alt="" />
                    }
                    <div onClick={() => setActive(0)} className={active === 0 ? "stack_imgs_img_pointer-active " : "stack_imgs_img_pointer highlight" }>
                        <FontAwesomeIcon className='projects_card_btn_icon' icon="fa-solid fa-chevron-right" />
                    </div>
                </div>
                <div className='stack_imgs_img'>
                    <div className={active === 1 ? "stack_imgs_img_line" : "" }></div>
                    {active === 1  ?
                        <img style={{cursor: 'pointer'}} className='stack_animate'  src="https://antoine-manu.github.io/PortfolioM1/stack_open.svg" alt="" />
                        :
                        <img onClick={() => setActive(1)}  style={{cursor: 'pointer'}} className='stack_animate_default' src="https://antoine-manu.github.io/PortfolioM1/stack_close.svg" alt="" />
                    }
                    <div onClick={() => setActive(1)} className={active === 1 ? "stack_imgs_img_pointer-active " : "stack_imgs_img_pointer highlight" }>
                        <FontAwesomeIcon className='projects_card_btn_icon' icon="fa-solid fa-chevron-right" />
                    </div>
                </div>
                <div className='stack_imgs_img'>
                    <div className={active === 2 ? "stack_imgs_img_line" : "" }></div>
                    {active === 2  ?
                        <img style={{cursor: 'pointer'}} className='stack_animate'  src="https://antoine-manu.github.io/PortfolioM1/stack_open.svg" alt="" />
                        :
                        <img onClick={() => setActive(2)} style={{cursor: 'pointer'}} className='stack_animate_default' src="https://antoine-manu.github.io/PortfolioM1/stack_close.svg" alt="" />
                    }
                    <div onClick={() => setActive(2)} className={active === 2 ? "stack_imgs_img_pointer-active " : "stack_imgs_img_pointer highlight" }>
                        <FontAwesomeIcon className='projects_card_btn_icon' icon="fa-solid fa-chevron-right" />
                    </div>
                </div>
            </div>
            {/*{active === 0 ?
                <div className='stack_img'>
                    <img onClick={() => setActive(0)} style={{cursor: 'pointer'}} src="/stack_open.svg" alt="" />
                </div>
            :
                <div className='stack_img'>
                    <img onClick={() => setActive(0)} style={{cursor: 'pointer'}} src="/stack_close.svg" alt="" />
                </div>
             }*/}

            {active === 0  ?
                <div className='stack_info'>
                    {/*<span className='stack_info_title'>Front end</span>*/}
                    <div className='stack_info_head'>
                        <span onClick={() => setActive(0)} className={active === 0 ? 'stack_info_title stack_info_title_active' : 'stack_info_title'}>Front end</span>
                        <span onClick={() => setActive(1)} className={active === 1 ? 'stack_info_title stack_info_title_active' : 'stack_info_title'}>Back end</span>
                        <span onClick={() => setActive(2)} className={active === 2 ? 'stack_info_title stack_info_title_active' : 'stack_info_title'}>Design</span>
                    </div>
                    <div className='stack_info_items'>
                        <div className='stack_info_items_item'>
                            <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/react.svg" alt=""/>
                            <span className='stack_info_items_item_title'>React</span>
                        </div>
                        <div className='stack_info_items_item'>
                            <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/gsap.svg" alt=""/>
                            <span className='stack_info_items_item_title'>GSAP</span>
                        </div>
                        <div className='stack_info_items_item'>
                            <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/jswhite.svg" alt=""/>
                            <span className='stack_info_items_item_title'>HTML/CSS/JS</span>
                        </div>
                        <div className='stack_info_items_item'>
                            <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/sass-svgrepo-com.svg" alt=""/>
                            <span className='stack_info_items_item_title'>Sass</span>
                        </div>
                    </div>
                </div>
                : active === 1 ?
                    <div className='stack_info'>
                        <div className='stack_info_head'>
                            <span onClick={() => setActive(0)} className={active === 0 ? 'stack_info_title stack_info_title_active' : 'stack_info_title'}>Front end</span>
                            <span onClick={() => setActive(1)} className={active === 1 ? 'stack_info_title stack_info_title_active' : 'stack_info_title'}>Back end</span>
                            <span onClick={() => setActive(2)} className={active === 2 ? 'stack_info_title stack_info_title_active' : 'stack_info_title'}>Design</span>
                        </div>
                        <div className='stack_info_items'>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/nodejs02-svgrepo-com.svg" alt=""/>
                                <span className='stack_info_items_item_title'>Node.JS</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/sql-svgrepo-com.svg" alt=""/>
                                <span className='stack_info_items_item_title'>SQL/MongoDB</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/php01-svgrepo-com.svg" alt=""/>
                                <span className='stack_info_items_item_title'>PHP</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/symfony-svgrepo-com.svg" alt=""/>
                                <span className='stack_info_items_item_title'>Symfony / Laravel</span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='stack_info'>
                        <div className='stack_info_head'>
                            <span onClick={() => setActive(0)} className={active === 0 ? 'stack_info_title stack_info_title_active' : 'stack_info_title'}>Front end</span>
                            <span onClick={() => setActive(1)} className={active === 1 ? 'stack_info_title stack_info_title_active' : 'stack_info_title'}>Back end</span>
                            <span onClick={() => setActive(2)} className={active === 2 ? 'stack_info_title stack_info_title_active' : 'stack_info_title'}>Design</span>
                        </div>
                        <div className='stack_info_items'>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/design-ideas-svgrepo-com.svg" alt=""/>
                                <span className='stack_info_items_item_title'>Design d'application</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/application-x-appliance-svgrepo-com.svg" alt=""/>
                                <span className='stack_info_items_item_title'>Responsive dynamique</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/repair-svgrepo-com.svg" alt=""/>
                                <span className='stack_info_items_item_title'>Mise en place d'animations</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="https://antoine-manu.github.io/PortfolioM1/techs/app-span-svgrepo-com (1).svg" alt=""/>
                                <span className='stack_info_items_item_title'>Design system</span>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}