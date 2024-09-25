import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetching the user data
    axios.get('https://cloud.mongodb.com/v2/65ee796e93d31e51a6f81bf1#/metrics/replicaSet/66ee42f4dbb0840e6bf6d0e1/explorer/JumysIceCream/users/find')
      .then((response) => {
        const user = response.data;
        setFirstName(user.firstName);
        setLastName(user.lastName);
        setGender(user.gender);
        setEmail(user.email);
        setDateOfBirth(user.dateOfBirth.split('T')[0]); // Format to YYYY-MM-DD
        setMobileNo(user.mobileNo);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
        setError("Failed to load user data.");
      });
  }, []);

  const handleUpdateProfile = (event) => {
    event.preventDefault();
    const updatedUser = {
      firstName,
      lastName,
      gender,
      email,
      dateOfBirth,
      password,
      mobileNo,
    };

    axios.put('http://localhost:1111/api/user/update-user', updatedUser)
      .then((response) => {
        console.log("Profile updated successfully!", response.data);

      })
      .catch((error) => {
        console.error("profile Updare Error!!!!", error);
        setError("Failed to update profile.");
      });
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="flex justify-center ">
        <div className="w-full max-w-lg">
          <h2 className="text-lg font-semibold">User Profile</h2>
          {error && <div className="text-red-500">{error}</div>}
          <form onSubmit={handleUpdateProfile} className="mt-4 bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="firstName" className="block text-gray-700">First Name:</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="lastName" className="block text-gray-700">Last Name:</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="gender" className="block text-gray-700">Gender:</label>
              <select
                id="gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
             
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="dateOfBirth" className="block text-gray-700">Date of Birth:</label>
              <input
                type="date"
                id="dateOfBirth"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="mobileNo" className="block text-gray-700">Mobile No:</label>
              <input
                type="tel"
                id="mobileNo"
                value={mobileNo}
                onChange={(e) => setMobileNo(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md border border-black px-10 py-2 text-sm font-semibold text-black hover:text-white hover:bg-blue-500 duration-1000 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Update Profile
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center mb-10">
            <Link to='/' >
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-black px-10 py-2 text-sm font-semibold text-black hover:text-white hover:bg-blue-500 duration-1000 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                <ArrowLeft size={16} className="mr-2" />
                Go back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
