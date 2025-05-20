import { useEffect, useState } from 'react';
import { fetchTrailer } from '../api';

const MovieCard = ({ movie }) => {
  const [trailerKey, setTrailerKey] = useState(null);

  useEffect(() => {
    fetchTrailer(movie.id).then((video) => {
      if (video) setTrailerKey(video.key);
    });
  }, [movie.id]);

  return (
    <div className="p-2 border rounded shadow bg-white">
      <h3 className="text-lg font-bold">{movie.title}</h3>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full" />
      {trailerKey && (
        <iframe
          className="mt-2 w-full"
          height="200"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title={movie.title}
          allowFullScreen
        />
      )}
    </div>
  );
};

export default MovieCard;