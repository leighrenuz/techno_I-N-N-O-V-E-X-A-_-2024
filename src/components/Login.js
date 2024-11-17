import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/Login.css';  // Corrected path to Login CSS

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="login-container">
      <h2>Login to ApplyGabay</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Email Field */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          {...register('email', { required: 'Email is required' })}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        {/* Password Field */}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter your password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button type="submit">Login</button>
      </form>
      <div className="login-footer">
        <p>Don't have an account? <a href="/signup">Sign Up here</a></p>
      </div>
    </div>
  );
}

export default Login;
