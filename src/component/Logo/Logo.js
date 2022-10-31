import logo from '../../image/logo.png';
import './style.css'

const Logo = () => {
    
    const text = 'The new metaverse platform \n The platform we create, The platform to find us \nJaydeSong is awesome';

    return (
        <div className='logoContainer'>
            <img src={logo} alt='logo' className='imgContainer'/>
            <p className='content'>{text}</p>
        </div>
    );
}

export default Logo;