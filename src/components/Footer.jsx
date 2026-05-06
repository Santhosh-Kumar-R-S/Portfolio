import { FaGithub, FaLinkedinIn, FaEnvelope, FaHeart } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {new Date().getFullYear()} Santhosh Kumar R S. All rights reserved.
                </p>
                <div className="footer-links">
                    <a
                        href="https://github.com/Santhosh-Kumar-R-S"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub style={{ marginRight: 4, verticalAlign: 'middle' }} /> GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/santhosh-kumar-r-s/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn style={{ marginRight: 4, verticalAlign: 'middle' }} /> LinkedIn
                    </a>
                    <a href="mailto:snthshkumarrs@gmail.com">
                        <FaEnvelope style={{ marginRight: 4, verticalAlign: 'middle' }} /> Email
                    </a>
                </div>
            </div>
        </footer>
    );
}
