import React from "react";
import { useResponsive } from "../../utils/responsive";

function Contact() {
    const { isMobile, isSmallMobile } = useResponsive();

    return (
        <section
            className="section-animation"
            style={{
                maxWidth: '90%',
                width: '700px',
                margin: `0 auto ${isMobile ? '30px' : '40px'} auto`,
                background: "rgba(255,255,255,0.04)",
                borderRadius: isMobile ? (isSmallMobile ? 10 : 12) : 16,
                padding: isMobile ? (isSmallMobile ? '20px 14px' : '24px 16px') : '32px 20px',
                boxShadow: "0 2px 16px rgba(97,218,251,0.08)",
                textAlign: "center",
                border: "1px solid rgba(97, 218, 251, 0.1)"
            }}>
            <h3 style={{
                color: "#61dafb",
                fontSize: isMobile ? (isSmallMobile ? '18px' : '20px') : '22px',
                marginBottom: '12px',
                position: 'relative',
                display: 'inline-block'
            }}>
                Contact
                <span style={{
                    position: "absolute",
                    height: "2px",
                    width: "50%",
                    background: "linear-gradient(90deg, #61dafb 0%, rgba(97, 218, 251, 0) 100%)",
                    bottom: "-6px",
                    left: "25%",
                    borderRadius: "8px"
                }}></span>
            </h3>
            <p style={{
                fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '16px',
                marginBottom: isMobile ? (isSmallMobile ? '14px' : '16px') : '18px'
            }}>
                Interested in working together or have a question? Feel free to reach out!
            </p>
            <a
                href="mailto:your.email@example.com"
                style={{
                    background: "linear-gradient(90deg, #61dafb, #4158D0)",
                    color: "#ffffff",
                    padding: isMobile ? (isSmallMobile ? "8px 20px" : "10px 24px") : "12px 32px",
                    borderRadius: 30,
                    textDecoration: "none",
                    fontWeight: 600,
                    fontSize: isMobile ? (isSmallMobile ? '14px' : '15px') : '16px',
                    transition: "transform 0.2s, box-shadow 0.2s",
                    boxShadow: "0 4px 15px rgba(97, 218, 251, 0.3)",
                    display: "inline-block"
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(97, 218, 251, 0.4)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(97, 218, 251, 0.3)';
                }}
            >
                Say Hello
            </a>
        </section>
    );
}

export default Contact;