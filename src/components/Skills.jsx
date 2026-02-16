import { useEffect, useRef } from "react";
import { FaReact, FaServer, FaDatabase, FaRocket } from "react-icons/fa6";

const skillCategories = [
    {
        icon: <FaReact />,
        title: "Frontend Development",
        skills: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Responsive Design"],
    },
    {
        icon: <FaServer />,
        title: "Backend Development",
        skills: ["Node.js", "Express.js", "Python", "Flask", "REST APIs", "Socket.IO"],
    },
    {
        icon: <FaDatabase />,
        title: "Databases & Tools",
        skills: ["MongoDB", "MySQL", "Git", "GitHub", "Vercel", "PM2"],
    },
    {
        icon: <FaRocket />,
        title: "Other Skills",
        skills: ["Data Analytics", "Java", "Blockchain Basics", "Linux", "Algo Trading", "Mapbox"],
    },
];

export default function Skills() {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add("visible");
            },
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="section" id="skills">
            <div className="container">
                <div className="section-header">
                    <span className="section-label"><FaRocket style={{ fontSize: '0.75rem' }} /> Skills</span>
                    <h2 className="section-title">What I Work With</h2>
                    <p className="section-subtitle">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </div>

                <div className="skills-grid reveal" ref={ref}>
                    {skillCategories.map((cat, i) => (
                        <div className="skill-category" key={i}>
                            <div className="skill-category-icon">{cat.icon}</div>
                            <h3>{cat.title}</h3>
                            <div className="skill-tags">
                                {cat.skills.map((skill, j) => (
                                    <span className="skill-tag" key={j}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
