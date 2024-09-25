import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbklkIjoiNjZmNDJmNjQyZjUxYWFhOGQyNTU1NDIzIiwiaWF0IjoxNzI3Mjc4OTk2fQ.ewf8L_Khs5-eusGJqPS3bVb0TuhOCno314McIrV3pto


const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNo: ''
  });
  const [errors, setErrors] = useState({});
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      gender: '',
      dateOfBirth: '',
      email: '',
      password: '',
      confirmPassword: '',
      mobileNo: ''
    });
    setErrors({});
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    // Validate form fields
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    // Data function to handle API requests
    const data = async () => {
      try {
        let response;
        if (isRegister) {
          // Register API call
          response = await axios.post('http://localhost:1111/api/user/register-user', formData);
          console.log("User Response",response);
          setPopupMessage('User registered successfully!');
        } else {
          // Login API call
          response = await axios.post('http://localhost:1111/api/user/login', formData);
          console.log("User Response",response);
          setPopupMessage('User logged in successfully!');
        }
        setShowPopup(true);
        resetForm(); // Reset the form after successful submission
      } catch (error) {
        console.error('Error occurred:', error.response ? error.response.data : error.message);
      }
    };
    await data();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const formErrors = {};
    if (isRegister) {
      if (!formData.firstName) formErrors.firstName = 'First Name is required';
      if (!formData.lastName) formErrors.lastName = 'Last Name is required';
      if (!formData.gender) formErrors.gender = 'Gender is required';
      if (!formData.dateOfBirth) formErrors.dateOfBirth = 'Date of Birth is required';
      if (!formData.mobileNo) formErrors.mobileNo = 'Mobile Number is required';
    }

    if (!formData.email || !validateEmail(formData.email)) {
      formErrors.email = 'Valid Email is required';
    }

    if (!formData.password) {
      formErrors.password = 'Password is required';
    }

    if (isRegister && formData.password !== formData.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    return formErrors;
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md ">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaUser />
            {isRegister ? 'Register' : 'Login'}
          </h2>
          <button
            onClick={toggleForm}
            className="text-sm text-blue-500 hover:underline focus:outline-none"
          >
            {isRegister ? 'Switch to Login' : 'Switch to Register'}
          </button>
        </div>

        <form className="mt-4" onSubmit={onSubmitForm}>
          {isRegister && (
            <>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-500">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type="text"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-500">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type="text"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-500">
                  Gender <span className="text-red-500">*</span>
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-500">
                  Date of Birth <span className="text-red-500">*</span>
                </label>
                <input
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type="date"
                />
                {errors.dateOfBirth && <p className="text-red-500 text-xs mt-1">{errors.dateOfBirth}</p>}
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-500">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="mobileNo"
                  value={formData.mobileNo}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type="tel"
                />
                {errors.mobileNo && <p className="text-red-500 text-xs mt-1">{errors.mobileNo}</p>}
              </div>
            </>
          )}

          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-500">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
              type="email"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-500">
              Password <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <input
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                type={passwordVisible ? 'text' : 'password'}
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 px-3 py-2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? 'Hide' : 'Show'}
              </button>
            </div>
            {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
          </div>

          {isRegister && (
            <div className="mb-4">
              <label className="block mb-2 text-sm text-gray-500">
                Confirm Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type={passwordVisible ? 'text' : 'password'}
                />
              </div>
              {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-full focus:outline-none focus:shadow-outline"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p>{popupMessage}</p>
            <button
              className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded-full"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
