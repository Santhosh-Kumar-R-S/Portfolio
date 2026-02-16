import { useState, useEffect } from "react";
import { FaBars, FaXmark, FaFileLines } from "react-icons/fa6";

const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = navItems.map((item) =>
                document.querySelector(item.href)
            );
            const scrollPos = window.scrollY + 200;

            for (let i = sections.length - 1; i >= 0; i--) {
                if (sections[i] && sections[i].offsetTop <= scrollPos) {
                    setActiveSection(navItems[i].href.slice(1));
                    break;
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="container">
                    <a href="#home" className="nav-logo" onClick={(e) => handleNavClick(e, "#home")}>
                        SK.
                    </a>
                    <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <a
                                    href={item.href}
                                    className={activeSection === item.href.slice(1) ? "active" : ""}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="https://drive.google.com/file/d/17t2GCjmZcPAxjZATAuHm5AtLp7IHxydl/view?usp=drivesdk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-cta"
                            >
                                <FaFileLines style={{ marginRight: 4 }} /> Resume
                            </a>
                        </li>
                    </ul>
                    <button
                        className="mobile-toggle"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <FaXmark /> : <FaBars />}
                    </button>
                </div>
            </nav>
            <div
                className={`nav-overlay ${menuOpen ? "show" : ""}`}
                onClick={() => setMenuOpen(false)}
            />
        </>
    );
}
