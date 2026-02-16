import { useEffect, useRef } from "react";
import { FaLaptopCode, FaPython, FaMobileScreen, FaChartLine } from "react-icons/fa6";
import { FaScrewdriverWrench } from "react-icons/fa6";

const services = [
    {
        icon: <FaLaptopCode />,
        title: "Full-Stack Development",
        description:
            "End-to-end web applications with React, Node.js, and MongoDB — from UI design to deployment. REST APIs, real-time features, authentication, and more.",
    },
    {
        icon: <FaPython />,
        title: "Python Development",
        description:
            "Automation scripts, data analysis pipelines, web scrapers, algorithmic trading bots, and backend services using Python, Flask, and NumPy.",
    },
    {
        icon: <FaMobileScreen />,
        title: "Mobile-Ready Web Apps",
        description:
            "Responsive, cross-device web applications with WebView-ready architecture, push notifications, and native-like experiences on mobile.",
    },
    {
        icon: <FaChartLine />,
        title: "Data Analytics",
        description:
            "Data cleaning, manipulation, visualization, and reporting. Building dashboards and extracting actionable insights from raw datasets.",
    },
];

export default function Services() {
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
        <section className="section" id="services">
            <div className="container">
                <div className="section-header">
                    <span className="section-label"><FaScrewdriverWrench style={{ fontSize: '0.85rem' }} /> Services</span>
                    <h2 className="section-title">What I Offer</h2>
                    <p className="section-subtitle">
                        Professional services tailored to your needs
                    </p>
                </div>

                <div className="services-grid reveal" ref={ref}>
                    {services.map((service, i) => (
                        <div className="service-card" key={i}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
