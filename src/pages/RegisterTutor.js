import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterTutor = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert("Tutor registered successfully!");
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-md max-w-screen-md">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Register as Tutor</h1>
      {/* <p className="text-center text-gray-600 mb-8">Tutor Registration Form</p> */}
      <form className="grid grid-cols-2 gap-x-6 gap-y-4" onSubmit={handleSubmit(onSubmit)}>
        {/* Name */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Full Name"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>
        {/* Username */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Username"
          />
          {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
        </div>
        {/* CNIC */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">CNIC</label>
          <input
            type="text"
            {...register("cnic", {
              required: "CNIC is required",
              pattern: { value: /^\d{13}$/, message: "Must be 13 digits" },
            })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="CNIC"
          />
          {errors.cnic && <span className="text-red-500 text-sm">{errors.cnic.message}</span>}
        </div>
        {/* Course Specialty */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Course Specialty</label>
          <input
            type="text"
            {...register("courseSpecialty", { required: "Course specialty is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Course Specialty"
          />
          {errors.courseSpecialty && <span className="text-red-500 text-sm">{errors.courseSpecialty.message}</span>}
        </div>
        {/* Gender */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Gender</label>
          <select
            {...register("gender", { required: "Gender is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
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
            {...register("email", { required: "Email is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Email Address"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>
        {/* Password */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            {...register("password", { required: "Password is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Password"
          />
          {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
        </div>
        {/* Confirm Password */}
        <div>
          <label className="block text-gray-600 text-sm font-medium mb-1">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword", { required: "Confirm password is required" })}
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-300"
            placeholder="Confirm Password"
          />
          {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
        </div>
        {/* Submit Button */}
        <div className="col-span-2 text-center mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterTutor;
