import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [input, setInput] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const fetchenCountries = await axios.get(
        "https://studies.cs.helsinki.fi/restcountries/api/all"
      );
      setCountries(fetchenCountries.data);
    };

    fetchCountries();
  }, []);

  if (!countries) {
    return null;
  }

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
  console.log(input);
  return (
    <div>
      <label htmlFor="">Search Countries: </label>
      <input type="text" onChange={handleChange} />
      <br />
      <ul>
        {input.length > 1 ? (
          input
            .splice(0, 10)
            .map((country, i) => <li key={i}>{country.name.common}</li>)
        ) : input.length === 1 ? (
          <div>
            <h1>{input[0].name.common}</h1>
            <p>Capital: {input[0].capital[0]}</p>
            <p>Area: {input[0].area}</p>
            <h2>Languages</h2>
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
          </div>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}

export default App;
