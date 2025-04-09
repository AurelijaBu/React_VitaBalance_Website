import './Footer.css';

function Footer() {
    return (
        <footer className='footer' id='contact'>
            <div className='footerContent'>
                <h2>Contact Us</h2>
                <p>Email: contact@example.com</p>
                <p>Phone: +123 456 789</p>
                <p>Follow us on social media:</p>
                <div className='socialIcons'>
                    <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>Facebook</a>
                    <a href='https://instagram.com' target='_blank' rel='noopener noreferrer'>Instagram</a>
                </div>
            </div>
            <p className='copyright'>&copy; 2025 All rights reserved.</p>
        </footer>
    );
}

export default Footer;