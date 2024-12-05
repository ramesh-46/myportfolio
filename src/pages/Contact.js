import React, { useState, useEffect } from 'react';
import './Contact.css'; // Import the CSS file

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [showMessages, setShowMessages] = useState(false);

    // Load messages from localStorage when the component mounts
    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('messages'));
        if (savedMessages) {
            setMessages(savedMessages);
        }
    }, []);

    // Store messages in localStorage whenever messages change
    useEffect(() => {
        if (messages.length > 0) {
            localStorage.setItem('messages', JSON.stringify(messages));
        }
    }, [messages]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Store message
        setMessages([...messages, { name, email, message }]);
        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };

    const handleDeleteMessage = (index) => {
        const updatedMessages = messages.filter((_, i) => i !== index);
        setMessages(updatedMessages);
    };

    const handleViewMessages = () => {
        setShowMessages(!showMessages);
    };

    const handleExit = () => {
        setShowMessages(false);
    };

    return (
        <div className="contact-container">
            <div className="contact-form-container">
                <h1>Contact Us</h1>
                <form onSubmit={handleSubmit} id="contactForm">
                    <div className="contact-input-group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                            <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="contact-input-group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                            <polyline points="22,6 12,13 2,6"></polyline>
                        </svg>
                        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="contact-input-group">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <textarea placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" id="submitBtn" className="contact-submit-button">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="contact-icon">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                        Send Message
                    </button>
                </form>
                <button onClick={handleViewMessages} className="view-messages-button">View Messages</button>
            </div>
            <div className="contact-image-container">
                <div className="animation">
                    {/* New Animation Element */}
                    <div className="animated-circle"></div>
                </div>
            </div>

            {showMessages && (
                <div className="messages-container">
                    <h2>Old Messages</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {messages.map((msg, index) => (
                                <tr key={index}>
                                    <td>{msg.name}</td>
                                    <td>{msg.email}</td>
                                    <td>{msg.message}</td>
                                    <td>
                                        <button onClick={() => handleDeleteMessage(index)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleExit} className="exit-button">Exit</button>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
