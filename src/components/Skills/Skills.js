import React from "react";

function Skills() {
    return (
        <section style={{
            maxWidth: 900,
            margin: "0 auto 40px auto",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 2px 16px rgba(97,218,251,0.08)",
        }}>
            <h3 style={{ color: "#61dafb", fontSize: 22, marginBottom: 18, textAlign: "center" }}>Skills</h3>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 24
            }}>
                {['JavaScript', 'React', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Redux', 'TypeScript', 'Git', 'REST APIs', 'Figma', 'Responsive Design'].map(skill => (
                    <span key={skill} style={{
                        background: "#232526",
                        color: "#61dafb",
                        padding: "10px 22px",
                        borderRadius: 20,
                        fontWeight: 500,
                        fontSize: 16,
                        marginBottom: 8,
                        border: "1px solid #61dafb"
                    }}>{skill}</span>
                ))}
            </div>
        </section>
    );
}

export default Skills;