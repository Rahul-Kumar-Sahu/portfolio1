import React from "react";
import { useResponsive } from "../../utils/responsive";

function Projects() {
    const { isMobile, isSmallMobile } = useResponsive();

    return (
        <section style={{
            maxWidth: '90%',
            width: '900px',
            margin: `0 auto ${isMobile ? '30px' : '40px'} auto`,
            background: "rgba(255,255,255,0.04)",
            borderRadius: isMobile ? (isSmallMobile ? 10 : 12) : 16,
            padding: isMobile ? (isSmallMobile ? '20px 12px' : '24px 16px') : '32px 16px',
            boxShadow: "0 2px 16px rgba(97,218,251,0.08)"
        }}>
            <h3 style={{
                color: "#61dafb",
                fontSize: isMobile ? (isSmallMobile ? '18px' : '20px') : '22px',
                marginBottom: isMobile ? (isSmallMobile ? '14px' : '16px') : '18px',
                textAlign: "center"
            }}>Projects</h3>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: isMobile ? (isSmallMobile ? '12px' : '16px') : '24px',
                justifyContent: "center"
            }}>
                <div style={{
                    background: "#232526",
                    borderRadius: isMobile ? (isSmallMobile ? '8px' : '10px') : '14px',
                    padding: isMobile ? (isSmallMobile ? '16px' : '20px') : '24px',
                    width: '100%',
                    maxWidth: isMobile ? (isSmallMobile ? '280px' : '300px') : '320px',
                    boxShadow: "0 2px 12px rgba(97,218,251,0.07)",
                    border: "1px solid #61dafb"
                }}>
                    <h4 style={{ color: "#61dafb", margin: "0 0 10px 0", fontSize: isMobile && isSmallMobile ? '15px' : 'inherit' }}>Portfolio Website</h4>
                    <p style={{
                        fontSize: isMobile ? (isSmallMobile ? '12px' : '14px') : '15px',
                        color: "#e0e0e0",
                        marginBottom: '10px',
                        lineHeight: 1.5
                    }}>
                        A personal portfolio website to showcase my projects, skills, and experience. Built with React and styled for a modern look.
                    </p>
                    <a
                        href="https://github.com/Rahul-Kumar-Sahu/portfolio1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#61dafb", textDecoration: "underline", fontSize: isMobile && isSmallMobile ? '12px' : 'inherit' }}
                    >
                        View Project
                    </a>
                </div>
                <div style={{
                    background: "#232526",
                    borderRadius: isMobile ? (isSmallMobile ? '8px' : '10px') : '14px',
                    padding: isMobile ? (isSmallMobile ? '16px' : '20px') : '24px',
                    width: '100%',
                    maxWidth: isMobile ? (isSmallMobile ? '280px' : '300px') : '320px',
                    boxShadow: "0 2px 12px rgba(97,218,251,0.07)",
                    border: "1px solid #61dafb"
                }}>
                    <h4 style={{ color: "#61dafb", margin: "0 0 10px 0", fontSize: isMobile && isSmallMobile ? '15px' : 'inherit' }}>Weather App</h4>
                    <p style={{
                        fontSize: isMobile ? (isSmallMobile ? '12px' : '14px') : '15px',
                        color: "#e0e0e0",
                        marginBottom: '10px',
                        lineHeight: 1.5
                    }}>
                        A responsive weather app using React and OpenWeatherMap API, featuring real-time weather updates and beautiful UI.
                    </p>
                    <a
                        href="https://github.com/Rahul-Kumar-Sahu/weather-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#61dafb", textDecoration: "underline", fontSize: isMobile && isSmallMobile ? '12px' : 'inherit' }}
                    >
                        View Project
                    </a>
                </div>
                {/* Add more project cards as needed */}
            </div>
        </section>
    );
}

export default Projects;
