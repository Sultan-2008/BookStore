import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  // Function to handle the close button click
  const handleClose = () => {
    navigate('/'); 
  };

  // Function to handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        const response = await axios.post("http://localhost:4001/user/signup", formData);
        console.log(response);
        if (response.data) {
          alert('User registered successfully');
          navigate('/login'); // Redirect after successful registration

          // Store response data in localStorage (stringify the data)
          localStorage.setItem('userData', JSON.stringify(response.data));
        }
       
      }catch (error) {
        if (error.response && error.response.data) {
          console.error('Error:', error.response.data.message);
          alert('Already Exist User: ' + error.response.data.message);
        } else {
          console.error('Error:', error.message);
          alert('An unexpected error occurred');
        }
      }
    }
  };

  // Function to validate form inputs
  const validateForm = () => {
    const errors = {};
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!formData.name) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Email is not valid';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }

    return errors;
  };

  return (
    <div style={styles.modalContainer}>
      <div style={styles.formContainer}>
        <button
          type="button"
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          style={styles.closeButton}
          onClick={handleClose}
        >
          ✕
        </button>
        <h2 style={styles.heading}>Create Your Account!</h2>
        <form style={styles.form} onSubmit={handleSubmit}>
          <label style={styles.label}>
            Full Name:
            <input
              type="text"
              name="name"
              placeholder="Dar Danish"
              style={styles.input}
              value={formData.name} // Use formData.name here
              onChange={handleChange}
              required
            />
            {errors.name && <p style={styles.error}>{errors.name}</p>}
          </label>
          <label style={styles.label}>
            Email Address:
            <input
              type="email"
              name="email"
              placeholder="Danish@example.com"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p style={styles.error}>{errors.email}</p>}
          </label>
          <label style={styles.label}>
            Password:
            <input
              type="password"
              name="password"
              placeholder="********"
              style={styles.input}
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p style={styles.error}>{errors.password}</p>}
          </label>
          
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <p style={styles.footer}>
          Already have an account? 
          <Link to="/" style={styles.link}>Log In</Link>
        </p>
      </div>
    </div>
  );
}

const styles = {
  modalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '0 20px',
    overflow: 'auto',
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    maxWidth: '500px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
    fontSize: '1.8rem',
    marginBottom: '20px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    width: '100%',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: '0.9rem',
    color: '#555',
  },
  input: {
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    fontSize: '1rem',
    outline: 'none',
    marginTop: '5px',
    width: '100%',
  },
  button: {
    padding: '15px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    marginTop: '20px',
    width: '100%',
  },
  footer: {
    marginTop: '20px',
    fontSize: '0.9rem',
    color: '#555',
  },
  link: {
    color: '#007bff',
    textDecoration: 'none',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '0.8rem',
    marginTop: '5px',
  },
};

export default Signup;
