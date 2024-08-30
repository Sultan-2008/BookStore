import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const navigate = useNavigate();
  
   // Handle the close button click to navigate to the home page
   const handleClose = () => {
    navigate('/'); // Redirects to the home page
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your login logic here (e.g., API call)
  };

  // Adding animation to the login button when clicked
  const handleLoginClick = (event) => {
    event.target.classList.add('button-click-animation');
    setTimeout(() => {
      event.target.classList.remove('button-click-animation');
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
              onClick={handleClose}>
              ✕
            </button>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '400px',
                margin: 'auto',
                padding: '20px',
                borderRadius: '8px',
                background: '#f9f9f9',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                transition: 'background 0.3s ease',
              }}
            >
              <h3
                style={{
                  fontSize: '1.5rem',
                  color: '#333',
                  marginBottom: '1rem',
                  fontWeight: 'bold',
                }}
              >
                Login Here!
              </h3>
              <label style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>
                Email Id:
              </label>
              <input
                type="email"
                name="email"
                placeholder="Danish@gmail.com"
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  background: '#fff',
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
                  marginBottom: '1rem',
                  fontSize: '1rem',
                  width: '100%',
                }}
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}

              <label style={{ fontSize: '0.9rem', color: '#555', marginBottom: '0.5rem' }}>
                Password:
              </label>
              <input
                type="password"
                name="password"
                placeholder="*****"
                required
                style={{
                  padding: '0.75rem',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  background: '#fff',
                  boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
                  marginBottom: '1rem',
                  fontSize: '1rem',
                  width: '100%',
                }}
                {...register('password', { required: 'Password is required' })}
              />
              {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}

              <div className="flex justify-around mt-4">
                <button
                  type="submit"
                  className="btn-primary hover:bg-green-900 duration-200"
                  style={{
                    padding: '0.75rem 1.5rem',
                    borderRadius: '4px',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    background: '#337ab7',
                    color: '#fff',
                  }}
                  onClick={handleLoginClick}
                >
                  Login
                </button>
                <p>
                  Not Registered?{' '}
                  <Link to="/Signup" className="underline cursor-pointer text-xl text-blue-800">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>

      {/* Add the CSS for the button-click-animation */}
      <style jsx>{`
        .button-click-animation {
          transform: scale(0.9);
          transition: transform 0.1s ease-in-out;
        }
      `}</style>
    </>
  );
}

export default Login;
