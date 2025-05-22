
import './Footer.css'; 

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-text">
                <p>Copyright &copy; 2025 by ❤️ Laxman Yadav. All Rights Reserved</p>
            </div>
            <div className="social-media">
                <a href="https://www.facebook.com/LaxmanYadav" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-facebook'></i>
                </a>
                <a href="https://twitter.com/LaxmanYada71113" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-twitter'></i>
                </a>
                <a href="https://www.instagram.com/laxmanyadav000x" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-instagram'></i>
                </a>
                <a href="https://www.linkedin.com/in/laxman-yadav" target="_blank" rel="noopener noreferrer">
                    <i className='bx bxl-linkedin'></i>
                </a>
            </div>
            <div className="footer-iconTop">
                <a href="#home">
                    <i className="bx bx-up-arrow-alt"></i>
                </a>
            </div>
        </footer>
    );
}
