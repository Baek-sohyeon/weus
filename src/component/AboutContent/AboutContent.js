import logo from '../../image/logo.png';
import './style.css'

const AboutContent = () => {
    
    const text = 'The new metaverse platform \n The platform we create, The platform to find us \nJaydeSong is awesome The new metaverse platform \n The platform we create, The platform to find us \nJaydeSong is awesome The new metaverse platform \n The platform we create, The platform to find us \nJaydeSong is awesome';

    return (
        <div className='logoContainer1'>
            <img src={logo} alt='logo' className='imgContainer'/>
            <p className='content'>{text}</p>
        </div>
    );
}

export default AboutContent;