import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // fake signup success
    if (username && email && password) {
      navigate("/homepage");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center animate-gradient bg-gradient-to-r from-purple-300 to-blue-400">
      <div className="">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-100">
        <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>

        <label className="text-sm text-gray-600">Username</label>
        <div className="relative mb-3">
        <input
          type="text"
          placeholder="Enter your username"
          className="w-full mb-3 p-2 pl-10 border rounded"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <i class="fa-regular fa-circle-user absolute left-3 top-5 left-3 text-gray-400 transform -translate-y-1/2"></i>
        </div>

        <label className="text-sm text-gray-600">Email</label>
        <div className="relative mb-3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full mb-3 p-2 pl-10 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <i class="fa-regular fa-envelope absolute left-3 top-5 left-3 text-gray-400 transform -translate-y-1/2 "></i>
        </div>

        <label className="text-sm text-gray-600">Password</label>
        <div className="relative mb-3">
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full mb-3 p-2 pl-10 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <i class="fa-regular fa-eye absolute left-3 top-5 left-2 text-gray-400 transform -translate-y-1/2"></i>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
  );
};

export default SignUp;



// import { useState } from 'react';

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Signing up with', email, password);
//     // Add real signup logic here
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-