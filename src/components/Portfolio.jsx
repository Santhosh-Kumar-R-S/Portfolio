import { useState, useEffect, useRef } from "react";
import { projects, categories } from "../data/projects";
import { FaGithub, FaArrowUpRightFromSquare, FaLock, FaRocket } from "react-icons/fa6";

export default function Portfolio() {
    const [activeFilter, setActiveFilter] = useState("all");
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) entry.target.classList.add("visible");
            },
            { threshold: 0.05 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const filtered =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section className="section" id="portfolio">
            <div className="container">
                <div className="section-header">
                    <span className="section-label"><FaRocket style={{ fontSize: '0.75rem' }} /> Portfolio</span>
                    <h2 className="section-title">Featured Projects</h2>
                    <p className="section-subtitle">
                        Real-world applications I've built and shipped
                    </p>
                </div>

                <div className="portfolio-filters">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            className={`filter-btn ${activeFilter === cat.key ? "active" : ""}`}
                            onClick={() => setActiveFilter(cat.key)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                <div className="portfolio-grid reveal" ref={ref}>
                    {filtered.map((project) => (
                        <div className="project-card" key={project.id}>
                            <div className="project-thumbnail">
                                <div
                                    className="project-gradient"
                                    style={{ background: project.gradient }}
                                />
                                {project.icon && (project.icon.startsWith("http") || project.icon.includes("/") || project.icon.startsWith("data:")) ? (
                                    <img src={project.icon} alt={`${project.title} icon`} style={{ width: '96px', height: '96px', objectFit: 'contain', background: '#fff', borderRadius: '50%', padding: '2px', zIndex: 1, position: 'relative', filter: 'drop-shadow(0 4px 20px rgba(0, 0, 0, 0.3))' }} />
                                ) : (
                                    <span className="project-icon">{project.icon}</span>
                                )}
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-tech">
                                    {project.tech.map((t, i) => (
                                        <span className={`tech-badge ${t}`} key={i}>
                                            {project.techLabels[i]}
                                        </span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link github"
                                        >
                                            <FaGithub /> GitHub
                                        </a>
                                    )}
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="project-link live"
                                        >
                                            <FaArrowUpRightFromSquare /> Live Demo
                                        </a>
                                    )}
                                    {!project.github && !project.live && (
                                        <span className="project-link github" style={{ opacity: 0.5 }}>
                                            <FaLock /> Private Repo
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
