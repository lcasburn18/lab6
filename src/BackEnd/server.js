const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 4000;

// Enable CORS to allow cross-origin requests
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// GET route to return movie data
app.get('/api/movies', (req, res) => {
  res.json({
    movies: [
      {
        Title: "Avengers: Infinity War (server)",
        Year: "2018",
        imdbID: "tt4154756",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
      },
      {
        Title: "Captain America: Civil War (server)",
        Year: "2016",
        imdbID: "tt3498820",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
      },
      {
        Title: "World War Z (server)",
        Year: "2013",
        imdbID: "tt0816711",
        Type: "movie",
        Poster: "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
      }
    ]
  });
});

// POST route to accept new movie data
app.post('/api/movies', (req, res) => {
  const { title, year, poster } = req.body;
  console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);
  res.send({ message: 'Movie data received', movie: req.body });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
