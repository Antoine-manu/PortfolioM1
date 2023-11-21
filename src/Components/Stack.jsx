import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(){
    const [active, setActive] = useState(0);


    return(
        <div className='stack'>
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