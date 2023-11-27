import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

export default function Card(){

    return(
        <div className='projects_card'>
            <div className='projects_card_head'>
                <span className='projects_card_head_number'>01</span>
                <span className='projects_card_head_type'>Project type</span>
            </div>
            <div className='projects_card_img'>
                <img src="/project/head/ea5a17741128d657d25378a87466362d.jpg" alt="" />
            </div>
            <div className='projects_card_content'>
                <span className='projects_card_content_title'>HELLO PROJECT</span>
                <span className='projects_card_content_text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet tempor mi.</span>
            </div>
            <div className='projects_card_btn'>
                <Link to='/projects'>
                <FontAwesomeIcon size='xl' className='projects_card_btn_icon' icon="fa-solid fa-play" />
                </Link>
            </div>
        </div>
    )
}