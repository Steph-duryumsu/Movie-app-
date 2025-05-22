import { useState, useEffect } from 'react';
import { fetchMovies, fetchByGenre, searchMovies, fetchGenres, fetchTrailer } from '../api';
import MovieCard from '../components/MovieCard';
import GenreDropdown from '../components/GenreDropdown';
import { motion } from 'framer-motion';

const genreBackgrounds = {
  horror: 'bg-black text-red-500',
  romance: 'bg-pink-200',
  action: 'bg-gray-900 text-yellow-500',
  animation: 'bg-blue-100',
};

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [search, setSearch] = useState('');

  const loadMovies = async () => {
    const data = await fetchMovies();
    setMovies(data);
  };

  useEffect(() => {
    loadMovies();
    fetchGenres().then(setGenres);
  }, []);

  const handleGenreChange = async (id, name) => {
    setSelectedGenre(name.toLowerCase());
    const genreMovies = await fetchByGenre(id);
    setMovies(genreMovies);
  };

  const handleSearch = async () => {
    if (search.trim()) {
      const results = await searchMovies(search);
      setMovies(results);
    } else {
      loadMovies();
    }
  };

  const genreClass = genreBackgrounds[selectedGenre] || 'bg-gray-800 ';

  return (
    <motion.div className={`min-h-screen ${genreClass} transition-all p-4`}
     initial={{ opacity: 0 }} 
     animate={{ opacity: 1 }}>

      <div className="flex md:justify-between md:items-center mb-6 gap-4">
        <input
          type="text"
          className="p-2 rounded w-full max-w-md bg-slategray text-white"
          placeholder="Search movie..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <GenreDropdown genres={genres} onChange={handleGenreChange} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </motion.div>
  );
};

export default HomePage;