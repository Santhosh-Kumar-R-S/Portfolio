import { useState, useEffect } from "react";
import {
    FaArrowRight,
    FaHandshake,
} from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";

const roles = [
    "Full-Stack Developer",
    "Python Developer",
    "Freelancer",
    "Problem Solver",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(
                () => {
                    setText(
                        isDeleting
                            ? currentRole.substring(0, text.length - 1)
                            : currentRole.substring(0, text.length + 1)
                    );
                },
                isDeleting ? 40 : 80
            );
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex]);

    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot"></span>
                        Available for freelance work
                    </div>

                    <h1 className="hero-title">
                        Hi, I'm{" "}
                        <span className="gradient-text">Santhosh Kumar R S</span>
                    </h1>

                    <div className="hero-roles">
                        I'm a <span className="typing-text">{text}</span>
                    </div>

                    <p className="hero-description">
                        Building production-ready web applications and solving real-world
                        problems with clean code. Based in Mysuru, India.
                    </p>

                    <div className="hero-buttons">
                        <a href="#portfolio" className="btn-primary" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <FaStar /> View My Work <FaArrowRight />
                        </a>
                        <a href="#contact" className="btn-secondary" onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}>
                            <FaHandshake /> Get In Touch
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <div className="stat-number">10+</div>
                            <div className="stat-label">Projects Built</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-number">1+</div>
                            <div className="stat-label">Years Freelancing</div>
                        </div>
                        <div className="hero-stat">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Tech Stacks</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
