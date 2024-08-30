import React from 'react';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  const navigate = useNavigate();

  // Function to handle the close button click
  const handleClose = () => {
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <button
        type="button"
        style={styles.closeButton}
        onClick={handleClose}
      >
        ✕
      </button>
      <h2 style={styles.heading}>Contact Us</h2>
      <p style={styles.description}>
        We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.
      </p>
      <form style={styles.form}>
        <label style={styles.label}>
          Name:
          <input type="text" name="name" style={styles.input} placeholder="Your Name" required />
        </label>
        <label style={styles.label}>
          Email:
          <input type="email" name="email" style={styles.input} placeholder="Your Email" required />
        </label>
        <label style={styles.label}>
          Message:
          <textarea name="message" style={{ ...styles.input, ...styles.textarea }} placeholder="Your Message" required />
        </label>
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    position: 'relative',
  },
  closeButton: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#333',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
  },
  description: {
    textAlign: 'center',
    marginBottom: '30px',
    fontSize: '1rem',
    color: '#666',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  label: {
    fontSize: '1rem',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '10px',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
    marginTop: '5px',
  },
  textarea: {
    resize: 'vertical',
    height: '150px',
  },
  button: {
    padding: '10px 15px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
  },
};

export default ContactUs;
