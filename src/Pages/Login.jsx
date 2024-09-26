import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import axios from 'axios';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isRegister, setIsRegister] = useState(false); // Toggle between login and register
  const [isAdminRegister, setIsAdminRegister] = useState(false); // Toggle between user and admin registration
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobileNo: '',
  });
  const [errors, setErrors] = useState({});
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [secretKey, setSecretKey] = useState('');
  const [showSecretKeyPopup, setShowSecretKeyPopup] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleForm = () => {
    setIsRegister(!isRegister);
    resetForm();
  };

  const toggleAdminForm = () => {
    if (!isAdminRegister) {
      setShowSecretKeyPopup(true); // Show secret key popup
    } else {
      setIsAdminRegister(false);
      resetForm();
    }
  };

  const handleSecretKeySubmit = () => {
    // Check the secret key
    if (secretKey === 'vijay') { // Replace 'vijay' with your actual secret key
      setIsAdminRegister(true);
      setShowSecretKeyPopup(false);
      setSecretKey(''); // Reset secret key
    } else {
      setPopupMessage('Invalid Secret Key');
      setShowPopup(true);
      setSecretKey('');
    }
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
      mobileNo: '',
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

    try {
      let response;
      if (isRegister) {
        if (isAdminRegister) {
          response = await axios.post('http://localhost:1111/api/admin/register-admin', { 
            ...formData, 
            isAdmin: true 
          });
          setPopupMessage('Admin registered successfully!');
        } else {
          // User register API call
          response = await axios.post('http://localhost:1111/api/user/register-user', {
            ...formData, 
            isAdmin: false
          });
          setPopupMessage('User registered successfully!');
        }
      } else {
        // Login API call
        response = await axios.post('http://localhost:1111/api/user/login', formData);
        setPopupMessage('User logged in successfully!');
      }
      setShowPopup(true);
      resetForm(); // Reset the form after successful submission
    } catch (error) {
      console.error('Error occurred:', error.response ? error.response.data : error.message);
    }
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaUser />
            {isRegister ? (isAdminRegister ? 'Admin Register' : 'User Register') : 'Login'}
          </h2>
          <button
            onClick={toggleForm}
            className="text-sm text-blue-500 hover:underline focus:outline-none"
          >
            {isRegister ? 'Switch to Login' : 'Switch to Register'}
          </button>
          {isRegister && (
            <button
              onClick={toggleAdminForm}
              className="text-sm text-red-500 hover:underline focus:outline-none"
            >
              {isAdminRegister ? 'Switch to User Register' : 'Switch to Admin Register'}
            </button>
          )}
        </div>

        <form className="mt-4" onSubmit={onSubmitForm}>
          {/* Only email for login */} 
          {!isRegister && (
            <>
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
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type={passwordVisible ? 'text' : 'password'}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={togglePasswordVisibility}
                />
                <span className="text-sm text-gray-500">Show Password</span>
              </div>
            </>
          )}

          {/* Full registration form */} 
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
                  <option value="Other">Other</option>
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
                  type="text"
                />
                {errors.mobileNo && <p className="text-red-500 text-xs mt-1">{errors.mobileNo}</p>}
              </div>

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
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type={passwordVisible ? 'text' : 'password'}
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm text-gray-500">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline"
                  type={passwordVisible ? 'text' : 'password'}
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>

              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  onChange={togglePasswordVisibility}
                />
                <span className="text-sm text-gray-500">Show Password</span>
              </div>
            </>
          )}

          <div className="mt-6">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline hover:bg-blue-600"
            >
              {isRegister ? 'Register' : 'Login'}
            </button>
          </div>
        </form>

        {showPopup && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
              <p className="text-lg text-gray-700">{popupMessage}</p>
              <button
                onClick={closePopup}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </div>
        )}

        {showSecretKeyPopup && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-1/5">
              <h2 className="text-xl text-gray-800 mb-4">Enter Secret Key</h2>
              <input
                type="password"
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-full focus:outline-none focus:shadow-outline mb-4"
              />
              <button
                onClick={handleSecretKeySubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600 mr-2"
              >
                Submit
              </button>
              <button
                onClick={() => setShowSecretKeyPopup(false)}
                className="mt-4 bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
