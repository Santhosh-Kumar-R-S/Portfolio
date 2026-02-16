import { useEffect, useRef } from "react";
import { FaUserGraduate, FaLocationDot, FaBriefcase, FaLanguage, FaCode } from "react-icons/fa6";

export default function About() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add("visible");
            },
            { threshold: 0.15 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-header">
                    <span className="section-label"><FaCode style={{ fontSize: '0.9rem' }} /> About Me</span>
                    <h2 className="section-title">Who I Am</h2>
                </div>

                <div className="about-grid reveal" ref={ref}>
                    <div className="about-image-wrapper">
                        <div className="about-image">
                            <FaCode style={{ fontSize: '6rem', opacity: 0.6 }} />
                        </div>
                    </div>

                    <div className="about-text">
                        <h3>Developer, Builder & Problem Solver</h3>
                        <p>
                            I'm a B.Tech Computer Science student at Srinivas University
                            Institute of Engineering and Technology, Mangalore, with hands-on
                            experience building production-grade applications. I've worked as
                            a freelance full-stack developer, delivering a live food delivery
                            platform (Bitex99) with real-time tracking, GST-compliant
                            invoicing, push notifications, and multi-role dashboards.
                        </p>
                        <p>
                            I love turning ideas into working software — from AI-powered legal
                            summarizers to algorithmic trading bots. My tech stack spans
                            React, Node.js, Python, MongoDB, and more. I'm always learning
                            and seeking opportunities to solve meaningful problems.
                        </p>

                        <div className="about-info-grid">
                            <div className="about-info-item">
                                <div className="label"><FaLocationDot style={{ marginRight: 4 }} /> Location</div>
                                <div className="value">Mysuru, India</div>
                            </div>
                            <div className="about-info-item">
                                <div className="label"><FaUserGraduate style={{ marginRight: 4 }} /> Education</div>
                                <div className="value">B.Tech CSE</div>
                            </div>
                            <div className="about-info-item">
                                <div className="label"><FaBriefcase style={{ marginRight: 4 }} /> Experience</div>
                                <div className="value">Freelance Developer</div>
                            </div>
                            <div className="about-info-item">
                                <div className="label"><FaLanguage style={{ marginRight: 4 }} /> Languages</div>
                                <div className="value">English, Kannada, Hindi</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
