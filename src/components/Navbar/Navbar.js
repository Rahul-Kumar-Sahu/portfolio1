import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Replace module import with regular CSS import

function Navbar({ toggleTheme, isDarkMode }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isDesktop = windowWidth >= 768;

    // Create CSS class names based on state
    const navbarClass = `custom-navbar ${isScrolled ? "scrolled" : ""} ${isDarkMode ? "dark-mode" : "light-mode"}`;
    const brandIconClass = `brand-icon ${isDarkMode ? "dark-icon" : "light-icon"}`;
    const brandTextClass = `brand-text ${isDarkMode ? "dark-gradient" : "light-gradient"}`;
    const menuLinkClass = `menu-link ${isDarkMode ? "dark-text" : "light-text"}`;
    const themeToggleClass = `theme-toggle ${isDarkMode ? "dark-toggle" : "light-toggle"}`;
    const hamburgerLineClass = `hamburger-line ${isDarkMode ? "dark-line" : "light-line"}`;

    return (
        <nav className={navbarClass}>
            <div className="brand">
                <div className={brandIconClass}>
                    RS
                </div>
                <span className={brandTextClass}>
                    Rahul Sahu
                </span>
            </div>

            {/* Mobile menu dropdown */}
            {!isDesktop && isMenuOpen && (
                <div className="mobile-menu">
                    {["Home", "About", "Skills", "Projects", "Contact"].map(item => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsMenuOpen(false)}
                            className={menuLinkClass}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            )}

            <div className="right-section">
                {/* Desktop menu */}
                {isDesktop && (
                    <div className="menu-items">
                        {["Home", "About", "Skills", "Projects", "Contact"].map(item => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className={menuLinkClass}
                            >
                                {item}
                            </a>
                        ))}
                    </div>
                )}

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className={themeToggleClass}
                >
                    {isDarkMode ? "🌙" : "☀️"}
                </button>

                {/* Mobile menu button */}
                {!isDesktop && (
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="menu-button"
                    >
                        <div className={`${hamburgerLineClass} ${isMenuOpen ? "rotated-top" : ""}`}></div>
                        <div className={`${hamburgerLineClass} ${isMenuOpen ? "hidden" : ""}`}></div>
                        <div className={`${hamburgerLineClass} ${isMenuOpen ? "rotated-bottom" : ""}`}></div>
                    </button>
                )}
            </div>
        </nav>
    );
}

export default Navbar;