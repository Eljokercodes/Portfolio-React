import { FaFacebookF } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import './footer.css'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer-logo'>EljokerCodes</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer-socials">
        <a href="#" target='_blank'><FaFacebookF /></a>
        <a href="#" target='_blank'><FaInstagramSquare /></a>
        <a href="#" target='_blank'><FaSquareXTwitter /></a>
      </div>
      <div className="footer-copyright">
        <small>&copy; <a href="#">EljokerCodes</a>All right reserved</small>
      </div>
    </footer>
  )
}

export default Footer