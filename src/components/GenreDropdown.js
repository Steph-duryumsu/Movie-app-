const GenreDropdown = ({ genres, onChange }) => {
  return (
    <select className="p-2 ml-2 border rounded" onChange={(e) => {
      const genre = genres.find(g => g.id === parseInt(e.target.value));
      onChange(genre.id, genre.name);
    }}>
      <option value="">Select Genre</option>
      {genres.map((genre) => (
        <option key={genre.id} value={genre.id}>
          {genre.name}
        </option>
      ))}
    </select>
  );
};

export default GenreDropdown;