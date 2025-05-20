import { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signing up with', email, password);
    // Add real signup logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4 w-96">
        <h2 className="text-2xl font-bold text-center">Sign Up</h2>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 bg-gray-700 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 bg-gray-700 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="w-full bg-green-600 p-2 rounded hover:bg-green-700">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;

// const SignUp = () => (
//   <div className="h-screen flex justify-center items-center">
//     <div className="bg-white p-4 rounded shadow w-80">
//       <h2 className="text-xl font-bold mb-4">Login</h2>
//       <input type="text" placeholder="Email" className="w-full p-2 border mb-2" />
//       <input type="password" placeholder="Password" className="w-full p-2 border mb-2" />
//       <button className="w-full bg-black text-white p-2 rounded">Login</button>
//     </div>
//   </div>
// );
// export default SignUp;