import React from 'react';
import { useForm } from 'react-hook-form';
import '../styles/SignUp.css';  // Corrected path to SignUp CSS

function SignUp() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="signup-container">
      <h2>Create Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        {/* Name Field */}
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Enter your full name"
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className="error-message">{errors.name.message}</p>}

        {/* Organization Name Field */}
        <label htmlFor="organization">Organization Name</label>
        <input
          id="organization"
          type="text"
          placeholder="Enter your organization name"
          {...register('organization', { required: 'Organization Name is required' })}
        />
        {errors.organization && <p className="error-message">{errors.organization.message}</p>}

        {/* Account Type Selection */}
        <label>Account Type</label>
        <div className="account-type">
          <div className="radio-option">
            <input
              type="radio"
              value="agency"
              {...register('accountType', { required: 'Please select an account type' })}
            />
            <label>Agency Account</label>
          </div>
          <div className="radio-option">
            <input
              type="radio"
              value="company"
              {...register('accountType', { required: 'Please select an account type' })}
            />
            <label>Company Account</label>
          </div>
        </div>
        {errors.accountType && <p className="error-message">{errors.accountType.message}</p>}

        {/* Company Email Field */}
        <label htmlFor="companyEmail">Company Email</label>
        <input
          id="companyEmail"
          type="email"
          placeholder="Enter your company email"
          {...register('companyEmail', { required: 'Company Email is required' })}
        />
        {errors.companyEmail && <p className="error-message">{errors.companyEmail.message}</p>}

        {/* Phone Number Field */}
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          id="phoneNumber"
          type="tel"
          placeholder="Enter your phone number"
          {...register('phoneNumber', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10}$/,
              message: 'Phone number must be 10 digits'
            }
          })}
        />
        {errors.phoneNumber && <p className="error-message">{errors.phoneNumber.message}</p>}

        {/* Password Field */}
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Create a password"
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button type="submit">Sign Up</button>
      </form>
      <div className="signup-footer">
        <p>Already have an account? <a href="/login">Login here</a></p>
      </div>
    </div>
  );
}

export default SignUp;

