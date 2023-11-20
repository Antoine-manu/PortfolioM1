import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Card(){
    const [active, setActive] = useState(false);

    function toggleActive(){
        if(active === true){
            setActive(false)
        } else {
            setActive(true)
        }
    } 

    return(
        <div className='stack_single'>
            {active === true ? 
            <img onClick={() => toggleActive()} style={{cursor: 'pointer'}} src="/stack_open.svg" alt="" />
            :
            <img onClick={() => toggleActive()} style={{cursor: 'pointer'}} src="/stack_close.svg" alt="" />
             }
             <div>
                <span></span>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
             </div>
        </div>
    )
}