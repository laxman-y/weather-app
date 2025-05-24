import CircularProgress from '@mui/material/CircularProgress';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({ updateWeatherInfo }) {
     const API_KEY = import.meta.env.VITE_API_KEY;
 const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
console.log("API_KEY:", API_KEY);
console.log("API_URL:", API_URL);

    let getWeatherInfo = async (city) => {
        try {
            
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            if (jsonResponse.cod !== 200) {
                throw new Error(jsonResponse.message);
            }

            let result = {
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                temperature: jsonResponse.main.temp,
                description: jsonResponse.weather[0].description,
                humidity: jsonResponse.main.humidity,
                windSpeed: jsonResponse.wind.speed,
            };
            return result;
        } catch (err) {
            console.error(err);
            throw err;
        }
    };

let handleChange = (event) => {
    setCity(event.target.value);
};

let handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
        let newInfo = await getWeatherInfo(city);
        updateWeatherInfo(newInfo);
        setError(false);  // Clear error on success
    } catch (err) {
        setError(true);
    }
    setLoading(false);
    setCity("");
};

return (
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br /> <br />
            <Button variant="contained" type="submit" disabled={loading}
> {loading ? "Searching..." : "Search"}</Button>
            <br /> <br />
             {loading && <CircularProgress color="primary" />}
            {error && <p style={{ color: 'red' }}>No such city found in our API!</p>}
        </form>
    </div>
);
}