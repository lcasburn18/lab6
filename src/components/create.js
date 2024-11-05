import { useState } from "react";
import axios from "axios";  // Import axios for making HTTP requests

const Create = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create the movie object from form data
        const movie = { title, year, poster };

        // Send POST request to backend server
        axios.post('http://localhost:4000/api/movies', movie)
            .then((response) => {
                console.log('Movie added:', response.data);
                // Clear the form fields after successful submission
                setTitle('');
                setYear('');
                setPoster('');
            })
            .catch((error) => {
                console.error('There was an error adding the movie:', error);
            });
    };
//Form for movies
    return (
        <div>
            <h3>Add a New Movie</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Poster URL: </label>
                    <input 
                        type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => setPoster(e.target.value)}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Movie" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default Create;
