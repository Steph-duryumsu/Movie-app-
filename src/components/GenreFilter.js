import React, { useEffect, useState } from 'react';
import { fetchGenres, fetchByGenre } from '../api';
import MovieCard from './MovieCard';

const GenreFilter = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadGenres = async () => {
      const genreList = await fetchGenres();
      setGenres(genreList);
    };
    loadGenres();
  }, []);

  useEffect(() => {
    const loadMovies = async () => {
      if (selectedGenre) {
        const movies = await fetchByGenre(selectedGenre);
        setMovies(movies);
      }
    };
    loadMovies();
  }, [selectedGenre]);

  return (
    <div className="p-4">
      <select
        className="p-2 rounded bg-gray-800 text-white mb-4"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">Select Genre</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default GenreFilter;