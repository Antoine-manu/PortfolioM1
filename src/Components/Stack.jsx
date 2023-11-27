import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// https://gsap.com/community/forums/topic/24622-i-want-to-stop-scrolling-untill-the-animation-ends-in-gsap-3-how-to-do-this/
// https://www.youtube.com/watch?v=JnLn8Rq4p_I
// https://codepen.io/snorkltv/pen/RwYdVyK
// https://gsap.com/community/forums/topic/37168-scrolltrigger-pin-an-element-and-change-that-elements-content-on-scroll/
// Sur le coté une div avec 3 div a 1000px chacune, la stack fixe et je declenche js quand on passe dans l'autre div
export default function Card({ firstRef, secondRef, lastRef }){
    const [active, setActive] = useState(0);
    
    const elementRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        ScrollTrigger.create({
          trigger: firstRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onEnterBack: () => {
            setActive(0);
          },
          onLeave: () => {
            setActive(1)
          },
        })
        ScrollTrigger.create({
          trigger: secondRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onEnterBack: () => {
            setActive(1);
          },
          onLeave: () => {
            setActive(2);
          },
        })
        ScrollTrigger.create({
          trigger: lastRef.current,
          start: 'top top',
          end: 'bottom bottom',
          onEnterBack: () => {
            setActive(2);
          },
          onLeave: () => {
            console.log('6');
          },
        })
      }, []);

    return(
        <div className='stack' ref={elementRef}>
            <div className='stack_imgs'>
                <div className='stack_imgs_img'>
                    {active === 0  ?
                        <img style={{cursor: 'pointer'}} className='stack_animate'  src="/stack_open.svg" alt="" />
                    :
                        <img onClick={() => setActive(0)} style={{cursor: 'pointer'}} className='stack_animate_default' src="/stack_close.svg" alt="" />
                    }
                </div>
                <div className='stack_imgs_img'>
                    {active === 1  ?
                        <img style={{cursor: 'pointer'}} className='stack_animate'  src="/stack_open.svg" alt="" />
                        :
                        <img onClick={() => setActive(1)}  style={{cursor: 'pointer'}} className='stack_animate_default' src="/stack_close.svg" alt="" />
                    }
                </div>
                <div className='stack_imgs_img'>
                    {active === 2  ?
                        <img style={{cursor: 'pointer'}} className='stack_animate'  src="/stack_open.svg" alt="" />
                        :
                        <img onClick={() => setActive(2)} style={{cursor: 'pointer'}} className='stack_animate_default' src="/stack_close.svg" alt="" />
                    }
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
                    <span className='stack_info_title'>design</span>
                    <div className='stack_info_items'>
                        <div className='stack_info_items_item'>
                            <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                            <span className='stack_info_items_item_title'>React</span>
                        </div>
                        <div className='stack_info_items_item'>
                            <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                            <span className='stack_info_items_item_title'>React</span>
                        </div>
                        <div className='stack_info_items_item'>
                            <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                            <span className='stack_info_items_item_title'>React</span>
                        </div>
                        <div className='stack_info_items_item'>
                            <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                            <span className='stack_info_items_item_title'>React</span>
                        </div>
                    </div>
                </div>
                : active === 1 ?
                    <div className='stack_info'>
                        <span className='stack_info_title'>front end</span>
                        <div className='stack_info_items'>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                                <span className='stack_info_items_item_title'>OUI</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                                <span className='stack_info_items_item_title'>OUI</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                                <span className='stack_info_items_item_title'>OUI</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                                <span className='stack_info_items_item_title'>OUI</span>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='stack_info'>
                        <span className='stack_info_title'>back end</span>
                        <div className='stack_info_items'>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                                <span className='stack_info_items_item_title'>NON</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                                <span className='stack_info_items_item_title'>NON</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                                <span className='stack_info_items_item_title'>NON</span>
                            </div>
                            <div className='stack_info_items_item'>
                                <img className='stack_info_items_item_img' src="/techs/react.svg" alt=""/>
                                <span className='stack_info_items_item_title'>NON</span>
                            </div>
                        </div>
                    </div>
            }
        </div>
    )
}