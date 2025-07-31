import React from "react";

function Contact() {
    return (
        <section style={{
            maxWidth: 700,
            margin: "0 auto 40px auto",
            background: "rgba(255,255,255,0.04)",
            borderRadius: 16,
            padding: 32,
            boxShadow: "0 2px 16px rgba(97,218,251,0.08)",
            textAlign: "center"
        }}>
            <h3 style={{ color: "#61dafb", fontSize: 22, marginBottom: 12 }}>Contact</h3>
            <p style={{ fontSize: 17, marginBottom: 18 }}>
                Interested in working together or have a question? Feel free to reach out!
            </p>
            <a
                href="mailto:your.email@example.com"
                style={{
                    background: "#61dafb",
                    color: "#232526",
                    padding: "12px 32px",
                    borderRadius: 30,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: 18,
                    transition: "background 0.2s"
                }}
            >
                Say Hello
            </a>
        </section>
    );
}

export default Contact;