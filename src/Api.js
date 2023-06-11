import React, { useState } from "react";
import "./Api.css";
function Api() {
  const [inputVal, setInputVal] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputVal.trim() === "") {
      setErrorMsg("Please enter a city name");
      return;
    }
    const filteredData = weatherData.filter(
      (city) => city.name.toLowerCase() === inputVal.toLowerCase()
    );
    if (filteredData.length > 0) {
      setErrorMsg(
        `You already know the weather for ${filteredData[0].name} ... Otherwise, be more specific by providing the country code as well 😉`
      );
      setInputVal("");
      return;
    }

    const apiKey = "4d8fb5b93d4af21d66a2948710284366";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === "404") {
          setErrorMsg("Please search for a valid city");
          return;
        }

        setWeatherData((prevData) => [...prevData, data]);
        setInputVal("");
        setErrorMsg("");
      })
      .catch(() => {
        setErrorMsg("Error fetching weather data. Please try again.");
      });
  };

  return (
    <div className="top-banner">
      <div className="container">
        <h1 className="heading">⛅Check The Weather⛅</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a city"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            autoFocus
          />
          <button type="submit">Check</button>
          {errorMsg && <span className="msg">{errorMsg}</span>}
        </form>
      </div>
      <section className="ajax-section">
        <div className="container">
          <ul className="cities">
            {weatherData.map((city) => (
              <li key={city.id} className="city">
                <h2 className="city-name">
                  <span>{city.name}</span>
                  <sup>{city.sys.country}</sup>
                </h2>
                <div className="city-temp">{Math.round(city.main.temp)}°C</div>
                <figure>
                  <img
                    className="city-icon"
                    src={`https://s3-us-west-2.amazonaws.com/s.cdpn.io/162656/${city.weather[0].icon}.svg`}
                    alt={city.weather[0].description}
                  />
                  <figcaption>{city.weather[0].description}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <footer className="page-footer">
        <div className="container"></div>
      </footer>
    </div>
  );
}

export default Api;
