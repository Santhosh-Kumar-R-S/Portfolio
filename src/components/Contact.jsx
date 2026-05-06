import { useState, useEffect, useRef } from "react";
import {
    FaEnvelope,
    FaPhone,
    FaLocationDot,
    FaGithub,
    FaLinkedinIn,
    FaInstagram,
    FaXTwitter,
    FaWhatsapp,
    FaPaperPlane,
} from "react-icons/fa6";
import { FaComments } from "react-icons/fa6";

const SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycby53sZ2YRMt-mX1uGtZ9GUQ37xDQ_MgssYdqXrFkf5bN2uvVX3XvkzOGTBsG54mnK1UMQ/exec";

export default function Contact() {
    const [formData, setFormData] = useState({ Name: "", Email: "", Message: "" });
    const [msg, setMsg] = useState("");
    const [sending, setSending] = useState(false);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        try {
            const fd = new FormData();
            Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
            await fetch(SCRIPT_URL, { method: "POST", body: fd });
            setMsg("Message sent successfully! ✨");
            setFormData({ Name: "", Email: "", Message: "" });
            setTimeout(() => setMsg(""), 5000);
        } catch {
            setMsg("Something went wrong. Please try again.");
        }
        setSending(false);
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="section-header">
                    <span className="section-label"><FaComments style={{ fontSize: '0.85rem' }} /> Contact</span>
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Have a project in mind? Let's talk about it.
                    </p>
                </div>

                <div className="contact-grid reveal" ref={ref}>
                    <div className="contact-info">
                        <h3>Let's Work Together</h3>
                        <p>
                            I'm always open to discussing new projects, creative ideas, or
                            opportunities to be part of your vision. Drop me a message and
                            I'll get back to you soon.
                        </p>

                        <div className="contact-item">
                            <div className="contact-item-icon"><FaEnvelope /></div>
                            <div className="contact-item-text">
                                <div className="label">Email</div>
                                <div className="value">
                                    <a href="mailto:snthshkumarrs@gmail.com">
                                        snthshkumarrs@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon"><FaPhone /></div>
                            <div className="contact-item-text">
                                <div className="label">Phone</div>
                                <div className="value">
                                    <a href="tel:+919110207194">+91 91102 07194</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-item-icon"><FaLocationDot /></div>
                            <div className="contact-item-text">
                                <div className="label">Location</div>
                                <div className="value">Mysuru, Karnataka, India</div>
                            </div>
                        </div>

                        <div className="social-links">
                            <a
                                href="https://github.com/Santhosh-Kumar-R-S"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/santhosh-kumar-r-s/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="LinkedIn"
                            >
                                <FaLinkedinIn />
                            </a>
                            <a
                                href="https://www.instagram.com/santhosh_kumar_r_s/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="Instagram"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://x.com/Santhosh_1817"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="X (Twitter)"
                            >
                                <FaXTwitter />
                            </a>
                            <a
                                href="https://wa.me/919110207194"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                                title="WhatsApp"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Name"
                                required
                                value={formData.Name}
                                onChange={(e) =>
                                    setFormData({ ...formData, Name: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="email@example.com"
                                required
                                value={formData.Email}
                                onChange={(e) =>
                                    setFormData({ ...formData, Email: e.target.value })
                                }
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                required
                                value={formData.Message}
                                onChange={(e) =>
                                    setFormData({ ...formData, Message: e.target.value })
                                }
                            />
                        </div>
                        <button type="submit" className="form-submit" disabled={sending}>
                            {sending ? "Sending..." : <><FaPaperPlane /> Send Message</>}
                        </button>
                        {msg && <p className="form-msg">{msg}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
}
