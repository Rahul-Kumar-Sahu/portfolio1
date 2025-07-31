import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <header id="home" style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "100px 0 80px 0",
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
                {Array.from({ length: 20 }).map((_, i) => (
                    <div key={i} style={{
                        position: "absolute",
                        width: Math.random() * 100 + 50,
                        height: Math.random() * 100 + 50,
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

            {/* Diagonal divider - updated for sharper visual impact */}
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
            }}></div>

            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
                maxWidth: "1400px",
                margin: "0 auto",
                padding: "0 20px",
                position: "relative",
                zIndex: 3,
                height: "calc(100vh - 180px)",
            }}>
                {/* Left side - Text content */}
                <div style={{
                    width: "40%",
                    padding: "20px",
                    textAlign: "left",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    "@media (max-width: 768px)": {
                        width: "100%",
                        textAlign: "center",
                        padding: "20px 10px"
                    }
                }}>
                    <div style={{
                        position: "relative",
                        zIndex: 5
                    }}>
                        <h2 style={{
                            fontSize: "24px",
                            fontWeight: 500,
                            margin: "0 0 16px 0",
                            color: isDarkMode ? "#61dafb" : "#0a7ea4"
                        }}>
                            Hello, I'm
                        </h2>
                        <h1 style={{
                            fontSize: "60px",
                            margin: "0 0 16px 0",
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
                            fontSize: "32px",
                            fontWeight: 600,
                            color: isDarkMode ? "#61dafb" : "#0a7ea4",
                            margin: "16px 0 24px 0",
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
                                bottom: "-10px",
                                left: "0",
                                borderRadius: "8px"
                            }}></span>
                        </h2>
                        <p style={{
                            fontSize: "18px",
                            lineHeight: 1.8,
                            marginBottom: "32px",
                            color: isDarkMode ? "#e0e0e0" : "#4a5568",
                            maxWidth: "600px"
                        }}>
                            Building exceptional digital experiences with <strong>React</strong> and modern frontend technologies. I transform complex problems into elegant, high-performance applications.
                        </p>
                        <div style={{
                            display: "flex",
                            gap: "16px",
                            marginTop: "32px",
                            "@media (max-width: 768px)": {
                                justifyContent: "center"
                            }
                        }}>
                            <a
                                href="#contact"
                                style={{
                                    background: isDarkMode
                                        ? "linear-gradient(90deg, #61dafb, #4158D0)"
                                        : "linear-gradient(90deg, #0a7ea4, #0056b3)",
                                    color: "#ffffff",
                                    padding: "16px 32px",
                                    borderRadius: "30px",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    transition: "transform 0.2s, box-shadow 0.2s",
                                    boxShadow: isDarkMode
                                        ? "0 4px 15px rgba(97, 218, 251, 0.3)"
                                        : "0 4px 15px rgba(10, 126, 164, 0.3)",
                                    display: "inline-block",
                                    border: "none"
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                    e.currentTarget.style.boxShadow = isDarkMode
                                        ? "0 8px 20px rgba(97, 218, 251, 0.4)"
                                        : "0 8px 20px rgba(10, 126, 164, 0.4)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = isDarkMode
                                        ? "0 4px 15px rgba(97, 218, 251, 0.3)"
                                        : "0 4px 15px rgba(10, 126, 164, 0.3)";
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
                                    padding: "16px 32px",
                                    borderRadius: "30px",
                                    textDecoration: "none",
                                    fontWeight: 600,
                                    fontSize: "16px",
                                    transition: "all 0.2s",
                                    display: "inline-block",
                                }}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = "translateY(-3px)";
                                    e.currentTarget.style.background = isDarkMode ? "rgba(97, 218, 251, 0.1)" : "rgba(10, 126, 164, 0.1)";
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.background = "transparent";
                                }}
                            >
                                My Work
                            </a>
                        </div>

                        {/* Social Media Icons - Horizontal with updated modern look */}
                        <div style={{
                            display: "flex",
                            gap: "16px",
                            marginTop: "40px",
                            alignItems: "center",
                            "@media (max-width: 768px)": {
                                justifyContent: "center"
                            }
                        }}>
                            <p style={{
                                margin: 0,
                                fontSize: "15px",
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
                                        width: "42px",
                                        height: "42px",
                                        borderRadius: "12px",
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
                                        fontSize: "17px",
                                        textDecoration: "none",
                                        transition: "all 0.3s ease",
                                        boxShadow: isDarkMode
                                            ? "0 3px 8px rgba(0, 0, 0, 0.2)"
                                            : "0 3px 8px rgba(0, 0, 0, 0.05)"
                                    }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.transform = "translateY(-5px) rotate(5deg)";
                                        e.currentTarget.style.boxShadow = isDarkMode
                                            ? "0 6px 12px rgba(0, 0, 0, 0.3)"
                                            : "0 6px 12px rgba(0, 0, 0, 0.1)";
                                        e.currentTarget.style.color = isDarkMode
                                            ? "#ffffff"
                                            : "#0a7ea4";
                                        e.currentTarget.style.borderColor = isDarkMode
                                            ? "#61dafb"
                                            : "#0a7ea4";
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.transform = "translateY(0) rotate(0deg)";
                                        e.currentTarget.style.boxShadow = isDarkMode
                                            ? "0 3px 8px rgba(0, 0, 0, 0.2)"
                                            : "0 3px 8px rgba(0, 0, 0, 0.05)";
                                        e.currentTarget.style.color = isDarkMode
                                            ? "#61dafb"
                                            : "#0a7ea4";
                                        e.currentTarget.style.borderColor = isDarkMode
                                            ? "rgba(97, 218, 251, 0.3)"
                                            : "rgba(10, 126, 164, 0.3)";
                                    }}
                                >
                                    {social.iconCode}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right side - Profile image - Taking up 60% of the space */}
                <div style={{
                    width: "60%",
                    height: "100%",
                    position: "relative",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "@media (max-width: 768px)": {
                        display: "none" // Hide image on mobile
                    }
                }}>
                    <div style={{
                        width: "90%",
                        height: "85%",
                        maxHeight: "700px",
                        position: "relative",
                        zIndex: 5,
                    }}>
                        <img
                            src="/image/rahul-profile.jpg"
                            alt="Rahul Sahu - Developer"
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center top",
                                borderRadius: "20px",
                                boxShadow: isDarkMode
                                    ? "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 0 2px rgba(97, 218, 251, 0.5)"
                                    : "0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(10, 126, 164, 0.5)",
                            }}
                        />

                        {/* Tech stack floating labels */}
                        {[
                            { name: "React", top: "15%", left: "-10%", delay: "0s" },
                            { name: "JavaScript", top: "30%", right: "-10%", delay: "0.3s" },
                            { name: "CSS3", bottom: "20%", left: "-8%", delay: "0.6s" },
                            { name: "HTML5", bottom: "35%", right: "-12%", delay: "0.9s" },
                        ].map((tech, index) => (
                            <div
                                key={index}
                                style={{
                                    position: "absolute",
                                    padding: "8px 16px",
                                    background: isDarkMode
                                        ? "rgba(35, 37, 39, 0.9)"
                                        : "rgba(255, 255, 255, 0.9)",
                                    color: isDarkMode ? "#61dafb" : "#0a7ea4",
                                    borderRadius: "30px",
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    boxShadow: isDarkMode
                                        ? "0 4px 15px rgba(0, 0, 0, 0.3)"
                                        : "0 4px 15px rgba(0, 0, 0, 0.1)",
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

                        {/* Decorative elements - More modern look */}
                        <div style={{
                            position: "absolute",
                            width: "180px",
                            height: "180px",
                            borderRadius: "50%",
                            border: isDarkMode
                                ? "2px dashed rgba(97, 218, 251, 0.3)"
                                : "2px dashed rgba(10, 126, 164, 0.3)",
                            top: "-40px",
                            left: "-40px",
                            zIndex: 1,
                            animation: "spin 20s linear infinite"
                        }}></div>

                        <div style={{
                            position: "absolute",
                            width: "100px",
                            height: "100px",
                            borderRadius: "50%",
                            background: isDarkMode
                                ? "rgba(97, 218, 251, 0.1)"
                                : "rgba(10, 126, 164, 0.1)",
                            bottom: "-30px",
                            right: "-30px",
                            zIndex: 1,
                            animation: "pulse 5s infinite alternate ease-in-out"
                        }}></div>

                        {/* Code brackets decoration */}
                        <div style={{
                            position: "absolute",
                            fontSize: "80px",
                            color: isDarkMode ? "rgba(97, 218, 251, 0.1)" : "rgba(10, 126, 164, 0.1)",
                            top: "-60px",
                            right: "30px",
                            fontWeight: "bold",
                            fontFamily: "monospace",
                            transform: "rotate(10deg)",
                            zIndex: 1
                        }}>
                            {"{ }"}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;