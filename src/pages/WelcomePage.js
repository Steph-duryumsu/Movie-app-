import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
     <div className="h-screen flex flex-col justify-center items-center animate-gradient bg-gradient-to-r from-purple-300 to-blue-400">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 text-center mb-4 animate-bounce">
        👋 Hi there, 
      </h1>

      <h1 className='text-4xl md:text-5xl font-bold text-gray-800 text-center mb-4 animate-bounce'>Welcome to <span className="text-purple-700 ">Movie Match</span></h1>

      <p className="text-lg text-gray-600 mb-8 text-center">
        Dive into a world of endless movies 🍿
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => navigate('/login')}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Login
        </button>
        <button
          onClick={() => navigate('/signup')}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition"
        >
          Sign Up
        </button>
      </div>

      {/* Custom animation keyframes */}
      {/* <style>
        {`
          @keyframes gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-gradient {
            animation: gradient 15s ease infinite;
          }
        `}
      </style> */}
    </div>
  );
};

export default WelcomePage;

// min-h-screen flex flex-col justify-center items-center bg-welcome-animation text-charcoal text-center px-4
