import './About.css';
import { Link } from 'react-router-dom';

function About() {
    return (
        <section id='about' className='aboutSection'>
            <div className='aboutSectionCards'>
                <div id='challenges' className='aboutCard'>
                    <h2>Challenges</h2>
                    <p>Our fitness challenges are designed to push your limits and help you reach your full potential, whether you're a beginner or an experienced athlete. They offer structure and motivation for a well-rounded workout experience.</p>
                    <Link to='/challenge' className='aboutButton'>Join a Challenge</Link>
                </div>

                <div className='aboutCard'>
                    <h2>Programs and Classes</h2>
                    <p>We offer a variety of fitness programs for different levels and goals, from strength training to cardio, led by experienced trainers. You can choose between group classes or personal sessions to stay motivated and succeed.</p>
                    <Link to='/sign_up' className='aboutButton'>Explore Programs</Link>

                </div>

                <div className='aboutCard'>
                    <h2>Join the Community</h2>
                    <p>Join our vibrant fitness community to access expert advice, exclusive content, and connect with like-minded individuals. Together, we motivate each other to achieve our fitness goals.</p>
                    <Link to='/sign_up' className='aboutButton'>Join Now</Link>
                </div>
            </div>
        </section>
    );
}

export default About;