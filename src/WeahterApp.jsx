import Footer from "./Footer";
import Header from "./Header";
import InfoBox from "./InfoBox"
import SearchBox from "./searchBox"
import { useState } from "react";
export default function WeatherApp() {
    const [WeatherInfo, setWeatherInfo] = useState({
         city: "Delhi",
        country: "India",
        temperature: 30,
        description: "Sunny",
        humidity: "60%",
        windSpeed: "15 km/h",
    });
    let updateWeatherInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div>
            <Header />
            <br /> <br />

            <div>
                <SearchBox updateWeatherInfo={updateWeatherInfo} />
                <InfoBox Info={WeatherInfo} />
                <Footer />
            </div>
        </div>
    );
}
