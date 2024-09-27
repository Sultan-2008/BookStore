import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Make onSubmit async to use await inside it
  const onSubmit = async (data) => {
    try {
      // Use async-await for fetch
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        console.log('Login successful', result);
        // Handle successful login, redirect, or save token
        navigate('/dashboard'); // Redirect to the dashboard after login
      } else {
        console.error('Login failed', result);
        // Handle login failure (e.g., display error message)
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle network or other errors
    }
  };

  // Adding animation to the login button when clicked
  const handleLoginClick = (event) => {
    const button = event.target;
    button.classList.add('button-click-animation');
    setTimeout(() => {
      button.classList.remove('button-click-animation');
    }, 500);
  };

  return (
    <>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </button>
            <div className="login-form-container">
              <h3 className="text-2xl font-bold mb-4">Login Here!</h3>
              <label className="block text-sm mb-2">Email Id:</label>
              <input
                type="email"
                placeholder="abc@gmail.com"
                required
                className="input-field"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <span className="text-red-600">{errors.email.message}</span>}

              <label className="block text-sm mb-2">Password:</label>
              <input
                type="password"
                placeholder="*****"
                required
                className="input-field"
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <span className="text-red-600">{errors.password.message}</span>}

              <div className="flex justify-between mt-4">
                <button
                  type="submit"
                  className="btn-primary"
                  onClick={handleLoginClick}
                >
                  Login
                </button>
                <p>
                  Not Registered?{' '}
                  <Link to="/Signup" className="underline text-blue-800">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>

      {/* Add the CSS for the button-click-animation */}
      <style>
        {`
          .button-click-animation {
            transform: scale(0.9);
            transition: transform 0.1s ease-in-out;
          }

          .login-form-container {
            display: flex;
            flex-direction: column;
            max-width: 400px;
            margin: auto;
            padding: 20px;
            border-radius: 8px;
            background: #f9f9f9;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            transition: background 0.3s ease;
          }

          .input-field {
            padding: 0.75rem;
            border: 1px solid #ddd;
            border-radius: 4px;
            background: #fff;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
            margin-bottom: 1rem;
            font-size: 1rem;
            width: 100%;
          }

          .btn-primary {
            padding: 0.75rem 1.5rem;
            border-radius: 4px;
            font-size: 1rem;
            font-weight: bold;
            background: #337ab7;
            color: #fff;
            transition: background 0.2s ease;
          }

          .btn-primary:hover {
            background: #286090;
          }
        `}
      </style>
    </>
  );
}

export default Login;
