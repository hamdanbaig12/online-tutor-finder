import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterStudent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Student registered successfully!");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Register as Student</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Username Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Username</label>
            <input
              type="text"
              {...register("username", { required: "Username is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
          </div>

          {/* Father's Name Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Father's Name</label>
            <input
              type="text"
              {...register("fatherName", { required: "Father's name is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fatherName && <span className="text-red-500 text-sm">{errors.fatherName.message}</span>}
          </div>

          {/* Father's CNIC Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Father's CNIC</label>
            <input
              type="text"
              {...register("fatherCnic", {
                required: "Father's CNIC is required",
                pattern: { value: /^\d{13}$/, message: "Must be 13 digits" },
              })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.fatherCnic && <span className="text-red-500 text-sm">{errors.fatherCnic.message}</span>}
          </div>

          {/* Phone Number Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Phone Number</label>
            <input
              type="text"
              {...register("phone", { required: "Phone number is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.phone && <span className="text-red-500 text-sm">{errors.phone.message}</span>}
          </div>

          {/* Grade Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Grade</label>
            <input
              type="text"
              {...register("grade", { required: "Grade is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.grade && <span className="text-red-500 text-sm">{errors.grade.message}</span>}
          </div>

          {/* Email Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-5">
            <label className="block text-gray-700 font-medium">Confirm Password</label>
            <input
              type="password"
              {...register("confirmPassword", { required: "Confirm password is required" })}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 focus:outline-none"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudent;
