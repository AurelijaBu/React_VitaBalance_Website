import './Header.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Header(){
    const [isVisible, setIsVisible] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const currentScroll = window.pageYOffset;
            if (currentScroll > lastScrollTop) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const closeMenu = () => setIsMenuOpen(false);
    const navigate = useNavigate();

    const scrollToAbout = () => {
        navigate('/');
        setTimeout(() => {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    return(
        <header className='header'>
            <div className='mobileHeader'>
                <Link className='logo' to='/'>
                    <img src='/images/logo.PNG' alt='logo' />
                </Link>
                <div className='burgerMenu'>
                    <input 
                        id='menuToggle' 
                        type='checkbox' 
                        checked={isMenuOpen} 
                        onChange={() => setIsMenuOpen(!isMenuOpen)}
                    />
                    <label className='menuButton' htmlFor='menuToggle'>
                    <span></span>
                    </label>          
                    <ul className='menuBox'>
                        <li><a className='menuItem' onClick={() => {scrollToAbout(); closeMenu();}}>About</a></li>
                        <li><Link className='menuItem' to='/challenge' onClick={closeMenu}>30 Day Challenge</Link></li>
                        <li><a className='menuItem' href='#contact' onClick={closeMenu}>Contact</a></li>
                        <li><Link className='menuItem' to='/login' onClick={closeMenu}>Login</Link></li>
                        <li><Link className='menuItem mainMenuItem' to='/sign_up' onClick={closeMenu}>Sign Up</Link></li>
                    </ul>
                </div>
            </div>

            <div className={`wideScreenHeader ${isVisible ? 'visible' : 'hidden'}`}>
                <nav className='nav'>
                    <ul>
                        <li><a onClick={scrollToAbout}>About</a></li>
                        <li><Link to='/challenge'>30 Day Challenge</Link></li>
                    </ul>
                    <div className='logo'>
                        <Link className='logo' to='/'>
                            <img src='/images/logo.PNG' alt='logo' />
                        </Link>
                    </div>
                    <ul>
                        <li><a href='#contact' >Contact</a></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/sign_up'>Sign Up</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;