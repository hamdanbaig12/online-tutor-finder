import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterParent = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/user/signup/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
          email: data.email,
          role: 'parent', // Role is fixed to 'parent'
          contact: data.phone,
          cnic: data.cnic,
          specialty: data.specialty || '', // Optional field
          grade: data.grade || '', // Optional field
          father: data.father || '', // Optional field
          father_cnic: data.father_cnic || '', // Optional field
          gender: data.gender,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success('Parent registered successfully!');
        reset(); // Clear the form after successful submission
      } else {
        const error = await response.json();
        toast.error(`Registration failed: ${error.message || 'Unknown error'}`);
      }
    } catch (err) {
      toast.error(`Registration failed: ${err.message}`);
    }
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md max-w-screen-md">
      
      <ToastContainer />
      <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Parent Registration</h1>
      <form className="grid grid-cols-2 gap-x-6 gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            {...register('name', { required: 'Name is required' })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Full Name"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        {/* Username */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            {...register('username', { required: 'Username is required' })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Username"
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
        </div>
        {/* Gender */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Gender</label>
          <select
            {...register('gender', { required: 'Gender is required' })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <span className="text-red-500 text-sm">{errors.gender.message}</span>}
        </div>
        {/* Email Address */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register('email', { required: 'Email is required' })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Email Address"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        {/* Phone Number */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Phone Number</label>
          <input
            type="text"
            {...register('phone', { required: 'Phone number is required' })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Phone Number"
          />
          {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
        </div>
        {/* CNIC Number */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">CNIC Number</label>
          <input
            type="text"
            {...register('cnic', {
              required: 'CNIC is required',
              pattern: { value: /^\d{13}$/, message: 'Must be 13 digits' },
            })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            placeholder="CNIC Number"
          />
          {errors.cnic && <span className="text-red-500 text-sm">{errors.cnic.message}</span>}
        </div>
        {/* Password */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register('password', { required: 'Password is required' })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Password"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        {/* Confirm Password */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', { required: 'Confirm password is required' })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-green-300"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
        </div>
        {/* Submit Button */}
        <div className="col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 focus:outline-none focus:ring focus:ring-green-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterParent;
