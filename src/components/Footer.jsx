import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-2">
        <footer className="footer p-10  text-base-content">
          <aside>
            <h1 className="font-bold text-4xl">StudyHub</h1>
            <p>
              It is an online platform designed <br /> to facilitate learning
              and academic collaboration.
            </p>

            <p>Copyright © 2024 - All right reserved</p>
          </aside>
          <nav>
            <h6 className="footer-title">Services</h6>
            <Link to="/" className="link link-hover">
              Home
            </Link>
            <Link to="/assignments" className="link link-hover">
              All Assignment
            </Link>
            <Link to="/login" className="link link-hover">
              Login
            </Link>
            <Link to="/register" className="link link-hover">
              Register
            </Link>
          </nav>
          <nav>
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
