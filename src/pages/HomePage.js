import { useState, useEffect } from "react";
import { fetchMovies, fetchByGenre, searchMovies, fetchGenres } from "../api";
import MovieCard from "../components/MovieCard";
import GenreDropdown from "../components/GenreDropdown";
import { motion } from "framer-motion";

const genreBackgrounds = {
  horror: "bg-black text-red-500",
  romance: "bg-pink-200 text-pink-900 dark:bg-pink-300",
  action: "bg-gray-900 text-yellow-500",
  animation: "bg-blue-100 text-blue-900",
};

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const loadMovies = async () => {
    setLoading(true);
    const data = await fetchMovies();
    setMovies(data);
    setLoading(false);
  };

  useEffect(() => {
    loadMovies();
    fetchGenres().then(setGenres);
  }, []);

  const handleGenreChange = async (id, name) => {
    setSelectedGenre(name.toLowerCase());
    setLoading(true);
    const genreMovies = await fetchByGenre(id);
    setMovies(genreMovies);
    setLoading(false);
  };

  const handleSearch = async () => {
    if (search.trim()) {
      setLoading(true);
      const results = await searchMovies(search);
      setMovies(results);
      setLoading(false);
    } else {
      loadMovies();
    }
  };

  const genreClass =
    genreBackgrounds[selectedGenre] ||
    "bg-gray-800 text-white dark:bg-gray-900";

  return (
    <motion.div
      className={`min-h-screen ${genreClass} transition-all duration-500 p-4`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
        <input
          type="text"
          className="p-2 rounded w-full max-w-md bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring focus:ring-purple-500"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <GenreDropdown genres={genres} onChange={handleGenreChange} />
      </div>

      {loading ? (
        <div className="text-center text-white text-lg">Loading movies...</div>
      ) : movies.length === 0 ? (
        <div className="text-center text-gray-300 text-lg mt-10">
          No movies found 🎬
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default HomePage;

// import { useState, useEffect } from 'react';
// import { fetchMovies, fetchByGenre, searchMovies, fetchGenres, fetchTrailer } from '../api';
// import MovieCard from '../components/MovieCard';
// import GenreDropdown from '../components/GenreDropdown';
// import { motion } from 'framer-motion';

// const genreBackgrounds = {
//   horror: 'bg-black text-red-500',
//   romance: 'bg-pink-200',
//   action: 'bg-gray-900 text-yellow-500',
//   animation: 'bg-blue-100',
// };

// const HomePage = () => {
//   const [movies, setMovies] = useState([]);
//   const [genres, setGenres] = useState([]);
//   const [selectedGenre, setSelectedGenre] = useState(null);
//   const [search, setSearch] = useState('');

//   const loadMovies = async () => {
//     const data = await fetchMovies();
//     setMovies(data);
//   };

//   useEffect(() => {
//     loadMovies();
//     fetchGenres().then(setGenres);
//   }, []);

//   const handleGenreChange = async (id, name) => {
//     setSelectedGenre(name.toLowerCase());
//     const genreMovies = await fetchByGenre(id);
//     setMovies(genreMovies);
//   };

//   const handleSearch = async () => {
//     if (search.trim()) {
//       const results = await searchMovies(search);
//       setMovies(results);
//     } else {
//       loadMovies();
//     }
//   };

//   const genreClass = genreBackgrounds[selectedGenre] || 'bg-gray-800 ';

//   return (
//     <motion.div className={`min-h-screen ${genreClass} transition-all p-4`}
//      initial={{ opacity: 0 }}
//      animate={{ opacity: 1 }}>

//       <div className="flex md:justify-between md:items-center mb-6 gap-4">
//         <input
//           type="text"
//           className="p-2 rounded w-full max-w-md bg-slategray text-white"
//           placeholder="Search movie..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
//         />
//         <GenreDropdown genres={genres} onChange={handleGenreChange} />
//       </div>

//       <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//         {movies.map((movie) => (
//           <MovieCard key={movie.id} movie={movie} />
//         ))}
//       </div>
//     </motion.div>
//   );
// };

// export default HomePage;
