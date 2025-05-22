import { useState } from 'react';
import { fetchTrailer } from '../api';

const MovieCard = ({ movie }) => {
  const [trailerKey, setTrailerKey] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  const handleClick = async () => {
    if (!trailerKey) {
      const video = await fetchTrailer(movie.id);
      if (video) setTrailerKey(video.key);
    }
    setShowTrailer((prev) => !prev); // toggle trailer visibility
  };

  return (
    <div
      onClick={handleClick}
      className=""
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-80 h-60 object-contain hover:scale-105 duration-300"
      />
      
      <div className="p-3 text-center">
        <h3 className="text-base font-semibold text-platinum">{movie.title}</h3>
      </div>

      {showTrailer && trailerKey && (
        <div className="aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${trailerKey}`}
            title={movie.title}
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default MovieCard;


// import { useEffect, useState } from 'react';
// import { fetchTrailer } from '../api';

// const MovieCard = ({ movie }) => {
//   const [trailerKey, setTrailerKey] = useState(null);

//   useEffect(() => {
//     fetchTrailer(movie.id).then((video) => {
//       if (video) setTrailerKey(video.key);
//     });
//   }, [movie.id]);

//   return (
//     <div className="p-2 border rounded shadow bg-white">
//       <h3 className="text-lg font-bold">{movie.title}</h3>
//       <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full" />
//       {trailerKey && (
//         <iframe
//           className="mt-2 w-full"
//           height="200"
//           src={`https://www.youtube.com/embed/${trailerKey}`}
//           title={movie.title}
//           allowFullScreen
//         />
//       )}
//     </div>
//   );
// };

// export default MovieCard;