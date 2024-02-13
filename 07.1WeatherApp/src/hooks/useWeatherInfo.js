import { useEffect,useState } from "react";

function useWeatherInfo(city) 
{

  const [weather, setWeather] = useState({});

  useEffect(() => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e3fd07741b8c29c61f35ddaa0bc9b52c`;

    fetch(url)
      .then((response) => response.json())
      .then((response) => setWeather(response));
  }, [city]);

  return weather;
}

export default useWeatherInfo;
