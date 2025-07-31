import React from "react";

function About() {
    return (
        <section style={{
            maxWidth: 800,
            margin: "0 auto 40px auto",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 2px 16px rgba(97,218,251,0.08)",
            textAlign: "center"
        }}>
            <h3 style={{ color: "#61dafb", fontSize: 22, marginBottom: 12 }}>About Me</h3>
            <p style={{ fontSize: 18, lineHeight: 1.7 }}>
                I'm a passionate developer specializing in building beautiful, performant web applications. I love working with modern JavaScript frameworks, especially React, and enjoy turning complex problems into simple, elegant solutions. Always eager to learn and grow, I thrive in collaborative environments and value clean, maintainable code.
            </p>
        </section>
    );
}

export default About;