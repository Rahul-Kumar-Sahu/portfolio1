import React from "react";
import { useResponsive } from "../../utils/responsive";

function About() {
    const { isMobile, isSmallMobile } = useResponsive();

    return (
        <section style={{
            maxWidth: '90%',
            width: '800px',
            margin: `0 auto ${isMobile ? '30px' : '40px'} auto`,
            background: "rgba(255,255,255,0.04)",
            borderRadius: isMobile ? 12 : 16,
            padding: isMobile ? '24px 16px' : '32px 20px',
            boxShadow: "0 2px 16px rgba(97,218,251,0.08)",
            textAlign: "center"
        }}>
            <h3 style={{
                color: "#61dafb",
                fontSize: isMobile ? '20px' : '22px',
                marginBottom: '12px'
            }}>About Me</h3>
            <p style={{
                fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '16px',
                lineHeight: 1.7,
                padding: isMobile ? (isSmallMobile ? '0 2px' : '0 4px') : 0
            }}>
                I'm a passionate developer specializing in building beautiful, performant web applications. I love working with modern JavaScript frameworks, especially React, and enjoy turning complex problems into simple, elegant solutions. Always eager to learn and grow, I thrive in collaborative environments and value clean, maintainable code.
            </p>
        </section>
    );
}

export default About;