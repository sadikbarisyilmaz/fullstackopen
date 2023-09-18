import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState([]);
  const [weather, setWeather] = useState({});
  const API_KEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchCountries = async () => {
      const fetchedCountries = await axios.get(
        "https://studies.cs.helsinki.fi/restcountries/api/all"
      );
      setCountries(fetchedCountries.data);
    };

    if (input.length === 0) fetchCountries();
  }, []);

  if (!countries) {
    return null;
  }

  useEffect(() => {
    if (input.length === 1) fetchWeather(input[0].capital[0]);
  }, [input]);

  const handleChange = (e) => {
    const arr = countries.filter((country) =>
      country.name.common.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setInput(arr);
  };

  const langlist = (obj) => {
    const arr = [];
    for (const property in obj) {
      arr.push(obj[property]);
    }
    return arr;
  };

  const fetchWeather = async (city) => {
    const weather = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    setWeather(weather.data);
  };
  return (
    <div>
      <label htmlFor="">Search Countries: </label>
      <br />
      <input type="text" onChange={handleChange} />
      <br />
      <ul>
        {input.length > 1 ? (
          input.splice(0, 10).map((country, i) => (
            <li key={i}>
              {country.name.common}{" "}
              <button onClick={() => setInput([country])}>View</button>{" "}
            </li>
          ))
        ) : input.length === 1 ? (
          <div>
            <h1>{input[0].name.common}</h1>
            <p>Capital: {input[0].capital[0]}</p>
            <p>Area: {input[0].area}</p>
            <h2>Language(s)</h2>
            <ul>
              {langlist(input[0].languages).map((lang, i) => (
                <li key={i}>{lang} </li>
              ))}
            </ul>
            <br />
            <img
              height={150}
              src={input[0].flags.png}
              alt={input[0].flags.alt}
            />
            {Object.keys(weather).length !== 0 && (
              <div>
                <h3>Weather in {input[0].capital[0]}</h3>
                <p>Temperature: {weather.main.temp} celcius </p>
                <img
                  height={50}
                  src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                  alt={weather.weather[0].main}
                />
                <p>Wind: {weather.wind.speed} m/s</p>
              </div>
            )}
          </div>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default App;
