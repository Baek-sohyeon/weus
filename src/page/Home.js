import ImageSlider  from '../component/ImageSlider/ImageSlider.js';
import Logo from '../component/Logo/Logo'
import HomeBtn from '../HomeBtn/HomeBtn.js';

const Home = () => {
  return (
    <>
        <ImageSlider/>
        <div style={{display: 'flex', flexDirection:'column'}}>
            <Logo/>
            <HomeBtn/>
        </div>
    </>
  );
}

export default Home;
