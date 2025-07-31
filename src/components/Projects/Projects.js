import React from "react";

function Projects() {
    return (
        <section style={{
            maxWidth: 900,
            margin: "0 auto 40px auto",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 2px 16px rgba(97,218,251,0.08)"
        }}>
            <h3 style={{ color: "#61dafb", fontSize: 22, marginBottom: 18, textAlign: "center" }}>Projects</h3>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 24,
                justifyContent: "center"
            }}>
                <div style={{
                    background: "#232526",
                    borderRadius: 14,
                    padding: 24,
                    minWidth: 260,
                    maxWidth: 320,
                    boxShadow: "0 2px 12px rgba(97,218,251,0.07)",
                    border: "1px solid #61dafb"
                }}>
                    <h4 style={{ color: "#61dafb", margin: "0 0 10px 0" }}>Portfolio Website</h4>
                    <p style={{ fontSize: 15, color: "#e0e0e0", marginBottom: 10 }}>
                        A personal portfolio website to showcase my projects, skills, and experience. Built with React and styled for a modern look.
                    </p>
                    <a
                        href="https://github.com/Rahul-Kumar-Sahu/portfolio1"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#61dafb", textDecoration: "underline" }}
                    >
                        View Project
                    </a>
                </div>
                <div style={{
                    background: "#232526",
                    borderRadius: 14,
                    padding: 24,
                    minWidth: 260,
                    maxWidth: 320,
                    boxShadow: "0 2px 12px rgba(97,218,251,0.07)",
                    border: "1px solid #61dafb"
                }}>
                    <h4 style={{ color: "#61dafb", margin: "0 0 10px 0" }}>Weather App</h4>
                    <p style={{ fontSize: 15, color: "#e0e0e0", marginBottom: 10 }}>
                        A responsive weather app using React and OpenWeatherMap API, featuring real-time weather updates and beautiful UI.
                    </p>
                    <a
                        href="https://github.com/Rahul-Kumar-Sahu/weather-app"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "#61dafb", textDecoration: "underline" }}
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
