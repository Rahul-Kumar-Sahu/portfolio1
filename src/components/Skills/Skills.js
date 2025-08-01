import React from "react";
import { useResponsive } from "../../utils/responsive";

function Skills() {
    const { isMobile, isSmallMobile } = useResponsive();

    return (
        <section style={{
            maxWidth: '90%',
            width: '900px',
            margin: `0 auto ${isMobile ? '30px' : '40px'} auto`,
            background: "rgba(255,255,255,0.04)",
            borderRadius: isMobile ? (isSmallMobile ? 10 : 12) : 16,
            padding: isMobile ? (isSmallMobile ? '20px 12px' : '24px 16px') : '32px 16px',
            boxShadow: "0 2px 16px rgba(97,218,251,0.08)",
        }}>
            <h3 style={{
                color: "#61dafb",
                fontSize: isMobile ? '20px' : '22px',
                marginBottom: isMobile ? '16px' : '18px',
                textAlign: "center"
            }}>Skills</h3>
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: isMobile ? '12px' : '16px'
            }}>
                {['JavaScript', 'React', 'HTML5', 'CSS3', 'Sass', 'Tailwind CSS', 'Redux', 'TypeScript', 'Git', 'REST APIs', 'Figma', 'Responsive Design'].map(skill => (
                    <span key={skill} style={{
                        background: "#232526",
                        color: "#61dafb",
                        padding: isMobile ? (isSmallMobile ? "4px 10px" : "6px 12px") : "8px 16px",
                        borderRadius: 20,
                        fontWeight: 500,
                        fontSize: isMobile ? (isSmallMobile ? '10px' : '12px') : '14px',
                        marginBottom: 8,
                        border: "1px solid #61dafb",
                        display: "inline-block"
                    }}>{skill}</span>
                ))}
            </div>
        </section>
    );
}

export default Skills;