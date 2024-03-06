import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

export default function Card({project, index}){

    return(
        <div className='projects_card'>
            <div className='projects_card_head'>
                <span className='projects_card_head_number'>{project.year}</span>
                <span className='projects_card_head_type'>{project.type}</span>
            </div>
            <div className='projects_card_img'>
                <img src={"https://antoine-manu.github.io/PortfolioM1/projects/" + project.mainImage + '.png'} alt="" />
            </div>
            <div className='projects_card_content'>
                <span className='projects_card_content_title'>{project.title}</span>
                <span className='projects_card_content_text'>{project.desc}</span>
            </div>
            <div className='projects_card_btn'>
                <Link to={'/PortfolioM1/projects/' + index}>
                <FontAwesomeIcon size='xl' className='projects_card_btn_icon' icon="fa-solid fa-eye" />
                </Link>
            </div>
        </div>
    )
}