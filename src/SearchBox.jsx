import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';
export default function SearchBox({ updateWeatherInfo }) {
    let [city, setCity] = useState("");
    let [error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "d8fa1f90be6194906c29e9f7124c36cc";
    
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
    try {
        let newInfo = await getWeatherInfo(city);
        updateWeatherInfo(newInfo);
        setError(false);  // Clear error on success
    } catch (err) {
        setError(true);
    }
    setCity("");
};

return (
    <div className='SearchBox'>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange} />
            <br /> <br />
            <Button variant="contained" type="submit">Search</Button>
            <br /> <br />
            {error && <p style={{ color: 'red' }}>No such city found in our API!</p>}
        </form>
    </div>
);
}