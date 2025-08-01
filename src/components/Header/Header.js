import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useResponsive } from "../../utils/responsive";

function Header() {
    const { isDarkMode } = useContext(ThemeContext);
    const { isMobile, isSmallMobile, isTablet, getImageSize } = useResponsive();

    return (
        <header id="home" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "80px 0 60px 0", // Reduced padding on mobile
            minHeight: "100vh",
            background: isDarkMode
                ? "linear-gradient(135deg, #232526 0%, #414345 100%)"
                : "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
            position: "relative",
            overflow: "hidden"
        }}>
            {/* Animated background elements */}
            <div style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                zIndex: 1
            }}>
                {Array.from({ length: 10 }).map((_, i) => ( // Reduced number of elements for better performance
                    <div key={i} style={{
                        position: "absolute",
                        width: Math.random() * 80 + 30, // Smaller elements on mobile
                        height: Math.random() * 80 + 30,
                        borderRadius: "50%",
                        background: isDarkMode
                            ? `rgba(97, 218, 251, ${Math.random() * 0.1})`
                            : `rgba(10, 126, 164, ${Math.random() * 0.1})`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}></div>
                ))}
            </div>

            {/* Diagonal divider - hidden on mobile */}
            <div style={{
                position: "absolute",
                top: 0,
                right: 0,
                width: "60%",
                height: "100%",
                clipPath: "polygon(10% 0, 100% 0, 100% 100%, 35% 100%)",
                zIndex: 2,
                background: isDarkMode ? "rgba(25, 27, 29, 0.8)" : "rgba(235, 240, 245, 0.8)",
                backdropFilter: "blur(5px)",
                borderLeft: isDarkMode ? "3px solid rgba(97, 218, 251, 0.3)" : "3px solid rgba(10, 126, 164, 0.3)",
                display: isMobile ? "none" : "block" // Hide on mobile
            }}></div>

            <div style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row", // Stack content on mobile
                alignItems: "center",
                justifyContent: isMobile ? "center" : "space-between",
                width: "100%",
                maxWidth: "1400px",
                margin: "0 auto",
                padding: isMobile ? (isSmallMobile ? "0 16px" : "0 20px") : "0 40px",
                position: "relative",
                zIndex: 3,
                height: "auto", // Auto height on mobile
            }}>
                {/* Text content */}
                <div style={{
                    width: isMobile ? "100%" : "40%",
                    padding: isMobile ? (isSmallMobile ? "8px" : "10px") : "20px",
                    textAlign: isMobile ? "center" : "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    order: isMobile ? 2 : 1 // Move text below image on mobile
                }}>
                    <div style={{
                        position: "relative",
                        zIndex: 5
                    }}>
                        <h2 style={{
                            fontSize: isMobile ? (isSmallMobile ? "18px" : "20px") : "24px",
                            fontWeight: 500,
                            margin: "0 0 12px 0",
                            color: isDarkMode ? "#61dafb" : "#0a7ea4"
                        }}>
                            Hello, I'm
                        </h2>
                        <h1 style={{
                            fontSize: isMobile ? (isSmallMobile ? "30px" : "36px") : "60px",
                            margin: "0 0 12px 0",
                            fontWeight: 800,
                            letterSpacing: "-0.5px",
                            color: isDarkMode ? "#ffffff" : "#1a202c",
                            textShadow: isDarkMode
                                ? "0 2px 10px rgba(97, 218, 251, 0.2)"
                                : "0 2px 10px rgba(0, 0, 0, 0.1)"
                        }}>
                            Rahul Sahu
                        </h1>
                        <h2 style={{
                            fontSize: isMobile ? (isSmallMobile ? "20px" : "24px") : "32px",
                            fontWeight: 600,
                            color: isDarkMode ? "#61dafb" : "#0a7ea4",
                            margin: "12px 0 18px 0",
                            position: "relative",
                            display: "inline-block"
                        }}>
                            Frontend Developer
                            <span style={{
                                position: "absolute",
                                height: "3px",
                                width: "80%",
                                background: isDarkMode
                                    ? "linear-gradient(90deg, #61dafb 0%, rgba(97, 218, 251, 0) 100%)"
                                    : "linear-gradient(90deg, #0a7ea4 0%, rgba(10, 126, 164, 0) 100%)",
                                bottom: "-8px",
                                left: "0",
                                borderRadius: "8px"
                            }}></span>
                        </h2>
                        <p style={{
                            fontSize: isMobile ? (isSmallMobile ? "14px" : "16px") : "18px",
                            lineHeight: 1.7,
                            marginBottom: "24px",
                            color: isDarkMode ? "#e0e0e0" : "#4a5568",
                        }}>
                            Building exceptional digital experiences with <strong>React</strong> and modern frontend technologies. I transform complex problems into elegant, high-performance applications.
                        </p>
                        <div style={{
                            display: "flex",
                            gap: isMobile ? (isSmallMobile ? "12px" : "16px") : "16px",
                            marginTop: "24px",
                            justifyContent: isMobile ? "center" : "flex-start"
                        }}>
                            <a
                                href="#contact"
                                style={{
                                    background: isDarkMode
                                        ? "linear-gradient(90deg, #61dafb, #4158D0)"
                                        : "linear-gradient(90deg, #0a7ea4, #0056b3)",
                                    color: "#ffffff",
                                    padding: isMobile ? (isSmallMobile ? "10px 20px" : "12px 24px") : "16px 32px",
                                    borderRadius: "30px",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    fontSize: isMobile ? (isSmallMobile ? "13px" : "14px") : "16px",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    boxShadow: isDarkMode
                                        ? "0 4px 15px rgba(97, 218, 251, 0.3)"
                                        : "0 4px 15px rgba(10, 126, 164, 0.3)",
                                    display: "inline-block",
                                    border: "none"
                                }}
                            >
                                Hire Me
                            </a>
                            <a
                                href="#projects"
                                style={{
                                    background: "transparent",
                                    border: isDarkMode ? "2px solid #61dafb" : "2px solid #0a7ea4",
                                    color: isDarkMode ? "#61dafb" : "#0a7ea4",
                                    padding: isMobile ? (isSmallMobile ? "10px 20px" : "12px 24px") : "16px 32px",
                                    borderRadius: "30px",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    fontSize: isMobile ? (isSmallMobile ? "13px" : "14px") : "16px",
                                    transition: "all 0.2s",
                                    display: "inline-block",
                                }}
                            >
                                My Work
                            </a>
                        </div>

                        {/* Social Media Icons - hidden on very small screens */}
                        {!isSmallMobile && (
                            <div style={{
                                display: "flex",
                                gap: "12px",
                                marginTop: "32px",
                                alignItems: "center",
                                justifyContent: isMobile ? "center" : "flex-start"
                            }}>
                                <p style={{
                                    margin: 0,
                                    fontSize: "14px",
                                    color: isDarkMode ? "#ccc" : "#666",
                                    fontWeight: 500
                                }}>Connect:</p>
                                {[
                                    { icon: "github", url: "https://github.com/yourusername", iconCode: "</>", label: "GitHub" },
                                    { icon: "linkedin", url: "https://linkedin.com/in/yourusername", iconCode: "in", label: "LinkedIn" },
                                    { icon: "twitter", url: "https://twitter.com/yourusername", iconCode: "𝕏", label: "Twitter" },
                                    { icon: "instagram", url: "https://instagram.com/yourusername", iconCode: "📸", label: "Instagram" }
                                ].map(social => (
                                    <a
                                        key={social.icon}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        title={social.label}
                                        style={{
                                            width: isMobile ? "36px" : "42px",
                                            height: isMobile ? "36px" : "42px",
                                            borderRadius: "10px",
                                            background: isDarkMode
                                                ? "rgba(35, 37, 39, 0.8)"
                                                : "rgba(255, 255, 255, 0.8)",
                                            border: isDarkMode
                                                ? "1px solid rgba(97, 218, 251, 0.3)"
                                                : "1px solid rgba(10, 126, 164, 0.3)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: isDarkMode ? "#61dafb" : "#0a7ea4",
                                            fontWeight: "bold",
                                            fontSize: isMobile ? "15px" : "17px",
                                            textDecoration: "none",
                                        }}
                                    >
                                        {social.iconCode}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                {/* Profile image - smaller on mobile */}
                <div style={{
                    width: isMobile ? "70%" : "60%",
                    maxWidth: isMobile ? (isSmallMobile ? "220px" : "260px") : "none",
                    height: isMobile ? "auto" : "100%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    order: isMobile ? 1 : 2,
                    marginBottom: isMobile ? "20px" : 0
                }}>
                    {/* Dashed circle decoration */}
                    <div style={{
                        position: "absolute",
                        width: getImageSize(320, 0.85, 0.9),
                        height: getImageSize(320, 0.85, 0.9),
                        borderRadius: "50%",
                        border: `2px dashed ${isDarkMode ? 'rgba(97, 218, 251, 0.3)' : 'rgba(10, 126, 164, 0.3)'}`,
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        animation: "rotate 20s linear infinite",
                        zIndex: 4
                    }}></div>

                    <div style={{
                        width: "100%",
                        paddingTop: isMobile ? "100%" : "85%",
                        maxHeight: isMobile ? (isSmallMobile ? "220px" : "280px") : "600px",
                        position: "relative",
                        zIndex: 5,
                    }}>
                        <img
                            src="/image/rahul-profile.jpg"
                            alt="Rahul Sahu - Developer"
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center top",
                                borderRadius: isMobile ? "15px" : "20px",
                                boxShadow: isDarkMode
                                    ? "0 15px 30px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(97, 218, 251, 0.4)"
                                    : "0 15px 30px rgba(0, 0, 0, 0.2), 0 0 0 2px rgba(10, 126, 164, 0.4)",
                            }}
                        />

                        {/* Tech stack floating labels - Fewer on mobile */}
                        {[
                            { name: "React", top: "10%", left: "-8%", delay: "0s" },
                            { name: "JavaScript", top: "25%", right: "-8%", delay: "0.3s" },
                            isMobile ? null : { name: "CSS3", bottom: "20%", left: "-8%", delay: "0.6s" },
                            isMobile ? null : { name: "HTML5", bottom: "35%", right: "-12%", delay: "0.9s" },
                        ].filter(Boolean).map((tech, index) => (
                            <div
                                key={index}
                                style={{
                                    position: "absolute",
                                    padding: isMobile ? (isSmallMobile ? "5px 10px" : "6px 12px") : "8px 16px",
                                    background: isDarkMode
                                        ? "rgba(35, 37, 39, 0.9)"
                                        : "rgba(255, 255, 255, 0.9)",
                                    color: isDarkMode ? "#61dafb" : "#0a7ea4",
                                    borderRadius: "20px",
                                    fontSize: isMobile ? (isSmallMobile ? "10px" : "12px") : "14px",
                                    fontWeight: "600",
                                    boxShadow: isDarkMode
                                        ? "0 4px 10px rgba(0, 0, 0, 0.3)"
                                        : "0 4px 10px rgba(0, 0, 0, 0.1)",
                                    border: isDarkMode
                                        ? "1px solid rgba(97, 218, 251, 0.3)"
                                        : "1px solid rgba(10, 126, 164, 0.3)",
                                    animation: `float 3s ease-in-out infinite`,
                                    animationDelay: tech.delay,
                                    top: tech.top,
                                    bottom: tech.bottom,
                                    left: tech.left,
                                    right: tech.right,
                                    zIndex: 10,
                                }}
                            >
                                {tech.name}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;