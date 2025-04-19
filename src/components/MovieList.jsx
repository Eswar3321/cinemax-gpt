import { Heading2 } from "lucide-react";
import MovieCard from "./MovieCard";

const MovieList = ({title, movies}) => {
  return (
    <div className="w-full">
      <div className="text-white font-bold text-lg md:text-3xl py-2 md:py-4">{title}</div>
      <ul className="flex gap-2 overflow-x-auto no-scrollbar pr-4">
        {movies?.map(movie => (
         movie.poster_path && <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </ul>      
    </div>
  );
};
export default MovieList;