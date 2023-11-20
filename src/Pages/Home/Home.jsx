import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home(){
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
                <span className='title_text'>Projets</span>
                <div className='title_border'></div>
            </div>
        </main>
    )
}