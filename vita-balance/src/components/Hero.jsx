import './Hero.css'
import { Link } from 'react-router-dom';

function Hero(){
    return(
        <section className='hero'>
            <div className='heroContent'>
                <h1>Welcome to VitaBalance</h1>
                <p>Your journey to a balanced and healthy life starts here. Embrace the harmony of nature and wellness with every movement.</p>
                <Link to='/sign_up'><button className='signUpButtonHero'>Get Started</button></Link>
            </div>
      </section>
    );
}

export default Hero;