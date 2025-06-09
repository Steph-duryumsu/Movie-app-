import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && email && password) {
      navigate("/homepage");
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-purple-300 to-blue-400 dark:from-gray-900 dark:to-gray-800 transition-colors duration-500">
      <div className="absolute top-4 right-4 z-10">
        <ThemeToggle />
      </div>

      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-8 rounded shadow-md w-100 transition-colors duration-500"
      >
        <h2 className="text-xl font-semibold mb-4 text-center text-gray-800 dark:text-white">
          Sign Up
        </h2>

        <label className="text-sm text-gray-600 dark:text-gray-300">
          Username
        </label>
        <div className="relative mb-3">
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full mb-3 p-2 pl-10 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <i className="fa-regular fa-circle-user absolute left-3 top-5 text-gray-400 transform -translate-y-1/2"></i>
        </div>

        <label className="text-sm text-gray-600 dark:text-gray-300">
          Email
        </label>
        <div className="relative mb-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full mb-3 p-2 pl-10 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <i className="fa-regular fa-envelope absolute left-3 top-5 text-gray-400 transform -translate-y-1/2"></i>
        </div>

        <label className="text-sm text-gray-600 dark:text-gray-300">
          Password
        </label>
        <div className="relative mb-4">
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full mb-3 p-2 pl-10 border rounded bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border-gray-300 dark:border-gray-700"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <i className="fa-regular fa-eye absolute left-3 top-5 text-gray-400 transform -translate-y-1/2"></i>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 dark:bg-purple-800 hover:bg-purple-700 dark:hover:bg-purple-900 text-white py-2 rounded transition"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// const SignUp = () => {
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // fake signup success
//     if (username && email && password) {
//       navigate("/homepage");
//     }
//   };

//   return (
//     <div className="h-screen flex flex-col justify-center items-center animate-gradient bg-gradient-to-r from-purple-300 to-blue-400">
//       <div className="">
//       <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-100">
//         <h2 className="text-xl font-semibold mb-4 text-center">Sign Up</h2>

//         <label className="text-sm text-gray-600">Username</label>
//         <div className="relative mb-3">
//         <input
//           type="text"
//           placeholder="Enter your username"
//           className="w-full mb-3 p-2 pl-10 border rounded"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <i class="fa-regular fa-circle-user absolute left-3 top-5 left-3 text-gray-400 transform -translate-y-1/2"></i>
//         </div>

//         <label className="text-sm text-gray-600">Email</label>
//         <div className="relative mb-3">
//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="w-full mb-3 p-2 pl-10 border rounded"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <i class="fa-regular fa-envelope absolute left-3 top-5 left-3 text-gray-400 transform -translate-y-1/2 "></i>
//         </div>

//         <label className="text-sm text-gray-600">Password</label>
//         <div className="relative mb-3">
//         <input
//           type="password"
//           placeholder="Enter your password"
//           className="w-full mb-3 p-2 pl-10 border rounded"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <i class="fa-regular fa-eye absolute left-3 top-5 left-2 text-gray-400 transform -translate-y-1/2"></i>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded hover:bg-blue-700"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   </div>
//   );
// };

// export default SignUp;

// // import { useState } from 'react';

// // const SignUp = () => {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     console.log('Signing up with', email, password);
// //     // Add real signup logic here
// //   };

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-900 text-
