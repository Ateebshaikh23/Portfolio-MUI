'use client';
import React, { useState } from 'react';
import './Contact.css';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState('');
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<'success' | 'error' | 'info'>('info');

    // Handle text input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Snackbar controls
    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason
    ) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('Sending...');
        setSeverity('info');
        setOpen(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSeverity('success');
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setSeverity('error');
                setStatus('Failed to send message.');
            }
        } catch (err) {
            console.error(err);
            setSeverity('error');
            setStatus('Error sending message.');
        } finally {
            setOpen(true);
        }
    };

    return (
        <div className="back" id="Contact">
            <div className="ContactText fade-in-top">
                <h1>Let’s Connect</h1>
            </div>

            <div className="contactContainer slide-up">
                <div className="phoneImg float">
                    <img src="/images/Contacts/Phone.png" alt="Phone" />
                </div>

                <div className="contactForm glass-card">
                    <div className="formHeader fade-in">
                        <h2>Let’s Talk</h2>
                        <p>Share your ideas or project requirements and I’ll get back to you!</p>
                    </div>

                    <form className="form" onSubmit={handleSubmit}>
                        {['name', 'email', 'phone'].map((field) => (
                            <div className="formGroup" key={field}>
                                <input
                                    name={field}
                                    type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                                    placeholder={`Enter your ${field}`}
                                    value={formData[field as keyof typeof formData]}
                                    onChange={handleChange}
                                    required
                                />
                                <label>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
                            </div>
                        ))}

                        <div className="formGroup">
                            <textarea
                                name="message"
                                placeholder="Your message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <label>How can we help you?</label>
                        </div>

                        <div className="submitForm">
                            <button type="submit" className="btnGradient bounce-hover">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Snackbar Alert */}
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={handleClose}
                    severity={severity}
                    variant="filled"
                    sx={{ width: '100%' }}
                >
                    {status}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default Contact;
