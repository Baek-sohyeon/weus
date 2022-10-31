import './style.css'

const HomeBtn = () => {
    
    return (
        <div className='btnContainer'>
            <button className='btn' onClick={()=> alert('준비중입니다.')}>COMING SOON!</button>
        </div>
    );
}

export default HomeBtn;