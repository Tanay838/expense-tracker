import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaReact,
  FaNodeJs,
  FaHeart,
} from "react-icons/fa";
import { SiMongodb, SiJavascript } from "react-icons/si";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-top"></div>

      <div className="container footer-container">

        {/* Left */}

        <div className="footer-column">

          <h2>Expense Tracker Pro</h2>

          <p>
            A modern React Expense Tracker with charts,
            analytics, dark mode and responsive design.
          </p>

          <div className="social-icons">

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaLinkedin />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

          </div>

        </div>

        {/* Middle */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <ul>
            <li>Dashboard</li>
            <li>Add Transaction</li>
            <li>Analytics</li>
            <li>Dark Mode</li>
          </ul>

        </div>

        {/* Right */}

        <div className="footer-column">

          <h3>Built With</h3>

          <div className="tech-stack">

            <span><FaReact /> React</span>

            <span><SiJavascript /> JavaScript</span>


          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {year} Made with
          <FaHeart className="heart" />
          by <strong>Tanay Bulsara</strong>
        </p>

      </div>

    </footer>
  );
}

export default Footer;