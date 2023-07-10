import "./App.css";
import { useEffect, useState } from "react";
import DashBoard from "./components/DashBoard";
import CityButton from "./components/CityButton";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weatherInfo, setWeatherInfo] = useState(null);
  const cities = ["Seoul", "New York", "Sydney", "London", "Dubai"];
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState("current");

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let latitude = position.coords.latitude;
      let longitude = position.coords.longitude;
      let apikey = "380c41b8594bc9bd3a40c6c4a9925257";
      getWeatherbyCurrent(latitude, longitude, apikey);
    });
  };

  const getWeatherbyCurrent = async (lat, lon, key) => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeatherInfo(data);
    setLoading(false);
  };
  const getWeatherbyCity = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=380c41b8594bc9bd3a40c6c4a9925257&units=metric`;
    let response = await fetch(url);
    let data = await response.json();
    setWeatherInfo(data);
    setLoading(false);
  };

  useEffect(() => {
    !city ? getCurrentLocation() : getWeatherbyCity();
  }, [city]);

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
      setSelect(city);
    } else {
      setCity(city);
      setSelect(city);
    }
  };

  return (
    <div className="main">
      {loading ? (
        <ClipLoader
          color={"coral"}
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <>
          <DashBoard weatherInfo={weatherInfo} />
          <CityButton
            cities={cities}
            setCity={setCity}
            handleCityChange={handleCityChange}
            select={select}
          />
        </>
      )}
    </div>
  );
}

export default App;

//API KEY
//380c41b8594bc9bd3a40c6c4a9925257
