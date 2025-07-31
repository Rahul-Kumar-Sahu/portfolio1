import React, { useContext } from "react";
import { ThemeProvider, ThemeContext } from "./context/ThemeContext";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ChatBot from "./components/ChatBot";
import styles from "./App.module.css";

// Main app content with theme context
function AppContent() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`${styles.app} ${isDarkMode ? styles['dark-mode'] : styles['light-mode']}`}>
      <Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Header />
      <div id="about" className={styles.section}>
        <About />
      </div>
      <div id="skills" className={styles.section}>
        <Skills />
      </div>
      <div id="projects" className={styles.section}>
        <Projects />
      </div>
      <div id="contact" className={styles.section}>
        <Contact />
      </div>
      <Footer />
      <ChatBot />
    </div>
  );
}

// Main App component with ThemeProvider
function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
