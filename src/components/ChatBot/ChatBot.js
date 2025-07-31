import React, { useState, useRef, useEffect, useContext, useCallback } from 'react';
import { ThemeContext } from "../../context/ThemeContext";

function ChatBot() {
    const { isDarkMode } = useContext(ThemeContext);
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi there! 👋 I'm Rahul's virtual assistant. How can I help you today?", sender: 'bot' }
    ]);
    const [userInput, setUserInput] = useState('');
    const [position, setPosition] = useState({ x: null, y: null });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
    const [isTyping, setIsTyping] = useState(false);

    const chatbotRef = useRef(null);
    const messagesEndRef = useRef(null);

    // Set initial position
    useEffect(() => {
        if (position.x === null || position.y === null) {
            setPosition({
                x: window.innerWidth - 100,
                y: window.innerHeight - 100
            });
        }
    }, [position]);

    // Scroll to bottom of messages
    useEffect(() => {
        if (isOpen && messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages, isOpen]);

    // Handle mouse down for dragging
    const handleMouseDown = (e) => {
        if (chatbotRef.current && (e.target === chatbotRef.current || chatbotRef.current.contains(e.target))) {
            setIsDragging(true);
            setDragOffset({
                x: e.clientX - position.x,
                y: e.clientY - position.y
            });
        }
    };

    // Handle mouse move for dragging
    const handleMouseMove = useCallback((e) => {
        if (isDragging) {
            const newX = e.clientX - dragOffset.x;
            const newY = e.clientY - dragOffset.y;

            // Keep the chatbot within window bounds
            const maxX = window.innerWidth - 80;
            const maxY = window.innerHeight - 80;

            setPosition({
                x: Math.min(Math.max(0, newX), maxX),
                y: Math.min(Math.max(0, newY), maxY)
            });
        }
    }, [isDragging, dragOffset]);

    // Handle mouse up to stop dragging
    const handleMouseUp = useCallback(() => {
        setIsDragging(false);
    }, []);

    // Add and remove event listeners for dragging
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp]);

    // Handle user message submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        // Add user message
        const newMessages = [...messages, { text: userInput, sender: 'user' }];
        setMessages(newMessages);
        setUserInput('');
        setIsTyping(true);

        // Generate bot response after a delay
        setTimeout(() => {
            const botResponse = getBotResponse(userInput);
            setIsTyping(false);
            setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
        }, 1200);
    };

    // Simple bot responses based on user input
    const getBotResponse = (input) => {
        const lowercaseInput = input.toLowerCase();

        if (lowercaseInput.includes('contact') || lowercaseInput.includes('reach') ||
            lowercaseInput.includes('email') || lowercaseInput.includes('hire')) {
            return "You can reach Rahul directly at rahul.sahu@example.com or use the contact form in the Contact section! He typically responds within 24 hours.";
        } else if (lowercaseInput.includes('project') || lowercaseInput.includes('work') ||
            lowercaseInput.includes('portfolio')) {
            return "Rahul has worked on several exciting projects! Check out the Projects section to see his portfolio including web apps, React components, and responsive websites.";
        } else if (lowercaseInput.includes('skill') || lowercaseInput.includes('tech') ||
            lowercaseInput.includes('language') || lowercaseInput.includes('framework')) {
            return "Rahul is proficient in React, JavaScript, HTML5, CSS3, TypeScript, and various modern front-end technologies. He also has experience with Node.js, MongoDB, and AWS.";
        } else if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') ||
            lowercaseInput.includes('hey')) {
            return "Hello! 👋 How can I help you learn more about Rahul and his work?";
        } else if (lowercaseInput.includes('experience') || lowercaseInput.includes('background') ||
            lowercaseInput.includes('history')) {
            return "Rahul is an experienced frontend developer with 5+ years of experience creating modern web applications. He has worked with startups and enterprise companies, delivering high-quality solutions.";
        } else if (lowercaseInput.includes('location') || lowercaseInput.includes('based') ||
            lowercaseInput.includes('where')) {
            return "Rahul is based in India, but is open to remote opportunities worldwide. He has experience working with distributed teams across different time zones.";
        } else if (lowercaseInput.includes('thank')) {
            return "You're welcome! 😊 Is there anything else I can help with?";
        } else if (lowercaseInput.includes('services') || lowercaseInput.includes('offer')) {
            return "Rahul offers web development services including custom React applications, responsive website development, UI/UX implementation, and frontend consulting.";
        } else if (lowercaseInput.includes('resume') || lowercaseInput.includes('cv')) {
            return "You can download Rahul's resume by clicking the 'Download Resume' button in the About section. It contains details about his work history, education, and technical skills.";
        } else {
            return "Thanks for your message! I'll make sure Rahul gets it. For quicker responses, consider reaching out directly via the Contact section or email at rahul.sahu@example.com.";
        }
    };

    // Styles based on theme
    const chatbotStyles = {
        chatbotIcon: {
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: isDarkMode ? '#61dafb' : '#0a7ea4',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            transition: 'all 0.3s ease',
            left: `${position.x}px`,
            top: `${position.y}px`,
            transform: 'scale(1)',
            animationName: 'pulse',
            animationDuration: '2s',
            animationIterationCount: 'infinite',
        },
        modalOverlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 1001,
            display: isOpen ? 'flex' : 'none',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: 'blur(5px)',
        },
        chatModal: {
            width: '380px',
            maxHeight: '520px',
            borderRadius: '20px',
            backgroundColor: isDarkMode ? '#232526' : '#ffffff',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            animation: 'fadeIn 0.3s ease',
        },
        chatHeader: {
            padding: '18px',
            backgroundColor: isDarkMode ? '#1a1c1e' : '#f8f8f8',
            borderBottom: isDarkMode ? '1px solid #333' : '1px solid #eee',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'move',
            borderRadius: '20px 20px 0 0',
        },
        chatTitle: {
            color: isDarkMode ? '#61dafb' : '#0a7ea4',
            fontWeight: 600,
            margin: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
        },
        avatarIcon: {
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: isDarkMode ? '#61dafb' : '#0a7ea4',
            color: isDarkMode ? '#1a1c1e' : '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
        },
        closeButton: {
            background: 'transparent',
            border: 'none',
            cursor: 'pointer',
            fontSize: '22px',
            color: isDarkMode ? '#ddd' : '#444',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'background 0.2s',
        },
        messagesContainer: {
            padding: '16px',
            overflowY: 'auto',
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxHeight: '350px',
            backgroundColor: isDarkMode ? '#232526' : '#ffffff',
        },
        botMessage: {
            alignSelf: 'flex-start',
            backgroundColor: isDarkMode ? '#3a3b3c' : '#f0f0f0',
            color: isDarkMode ? '#fff' : '#222',
            padding: '12px 16px',
            borderRadius: '18px 18px 18px 4px',
            maxWidth: '80%',
            wordBreak: 'break-word',
            boxShadow: isDarkMode ? '0 2px 8px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
            animation: 'fadeIn 0.3s ease',
        },
        userMessage: {
            alignSelf: 'flex-end',
            backgroundColor: isDarkMode ? '#61dafb' : '#0a7ea4',
            color: isDarkMode ? '#1a1c1e' : '#fff',
            padding: '12px 16px',
            borderRadius: '18px 18px 4px 18px',
            maxWidth: '80%',
            wordBreak: 'break-word',
            boxShadow: isDarkMode ? '0 2px 8px rgba(0, 0, 0, 0.1)' : '0 2px 8px rgba(0, 0, 0, 0.05)',
            animation: 'fadeIn 0.3s ease',
        },
        typingIndicator: {
            alignSelf: 'flex-start',
            backgroundColor: isDarkMode ? '#3a3b3c' : '#f0f0f0',
            color: isDarkMode ? '#fff' : '#222',
            padding: '15px 20px',
            borderRadius: '18px 18px 18px 4px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
        },
        typingDot: {
            width: '8px',
            height: '8px',
            backgroundColor: isDarkMode ? '#aaa' : '#888',
            borderRadius: '50%',
            animationName: 'bounce',
            animationDuration: '1s',
            animationIterationCount: 'infinite',
        },
        inputForm: {
            padding: '16px',
            borderTop: isDarkMode ? '1px solid #333' : '1px solid #eee',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            backgroundColor: isDarkMode ? '#1a1c1e' : '#f8f8f8',
            borderRadius: '0 0 20px 20px',
        },
        textInput: {
            flex: 1,
            padding: '12px 16px',
            borderRadius: '24px',
            border: isDarkMode ? '1px solid #444' : '1px solid #ddd',
            backgroundColor: isDarkMode ? '#2d2f31' : '#fff',
            color: isDarkMode ? '#fff' : '#333',
            outline: 'none',
            fontSize: '15px',
        },
        sendButton: {
            backgroundColor: isDarkMode ? '#61dafb' : '#0a7ea4',
            color: isDarkMode ? '#1a1c1e' : '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '42px',
            height: '42px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
        }
    };

    return (
        <>
            <div
                ref={chatbotRef}
                style={chatbotStyles.chatbotIcon}
                onClick={() => setIsOpen(true)}
                onMouseDown={handleMouseDown}
                title="Chat with me"
                onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                }}
            >
                <span role="img" aria-label="chat" style={{ fontSize: '28px' }}>💬</span>
            </div>

            {isOpen && (
                <div style={chatbotStyles.modalOverlay} onClick={() => setIsOpen(false)}>
                    <div
                        style={chatbotStyles.chatModal}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            style={chatbotStyles.chatHeader}
                            onMouseDown={handleMouseDown}
                        >
                            <h3 style={chatbotStyles.chatTitle}>
                                <div style={chatbotStyles.avatarIcon}>RS</div>
                                Chat with Rahul's Assistant
                            </h3>
                            <button
                                style={chatbotStyles.closeButton}
                                onClick={() => setIsOpen(false)}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.background = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.background = 'transparent';
                                }}
                            >
                                ×
                            </button>
                        </div>

                        <div style={chatbotStyles.messagesContainer}>
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    style={msg.sender === 'bot' ? chatbotStyles.botMessage : chatbotStyles.userMessage}
                                >
                                    {msg.text}
                                </div>
                            ))}

                            {isTyping && (
                                <div style={chatbotStyles.typingIndicator}>
                                    <div style={{ ...chatbotStyles.typingDot, animationDelay: '0s' }}></div>
                                    <div style={{ ...chatbotStyles.typingDot, animationDelay: '0.2s' }}></div>
                                    <div style={{ ...chatbotStyles.typingDot, animationDelay: '0.4s' }}></div>
                                </div>
                            )}

                            <div ref={messagesEndRef}></div>
                        </div>

                        <form style={chatbotStyles.inputForm} onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder="Type your message..."
                                style={chatbotStyles.textInput}
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                            />
                            <button
                                type="submit"
                                style={chatbotStyles.sendButton}
                                onMouseOver={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.05)';
                                }}
                                onMouseOut={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            >
                                <span style={{ fontSize: '18px' }}>↑</span>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default ChatBot;

