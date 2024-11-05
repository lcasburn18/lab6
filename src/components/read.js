import Movies from "./movies";
import { useEffect, useState } from "react";
import axios from "axios";

const Read = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/movies')  // Update URL to the local server
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);  // Assuming response data has a `movies` array
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []); 

  return (
    <div>
      <h3>Hello from read component!</h3>
      <Movies myMovies={movies} />
    </div>
  );
}

export default Read;
