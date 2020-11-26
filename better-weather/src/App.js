import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// import { getLocation } from "./utils/getLocation";
import { formatResp } from "./utils/formatResp";
import { API_KEY, BASE_URL } from "./constants/index";

import Search from "./components/Search";
import Geolocation from "./components/Geolocation";

const initialLoc = {
  latitude: "",
  longitude: "",
};

function App() {
  const [loc, setLoc] = useState(initialLoc);
  // weather state from initial api request using user's geolocation
  const [weather, setWeather] = useState("");
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=07112&days=10`)
      .then((res) => {
        setData(formatResp(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    console.log("useeffect app");
    // api request for initial weather report based on geolocation, ex:
    if (loc.latitude !== "") {
      axios
        .get(
          `${BASE_URL}/current.json?key=${API_KEY}&q=${loc.latitude},${loc.longitude}`
        )
        .then((res) => {
          console.log("Fetch Successful ==>> ", res);
          // no need to format this data, it's a relatively light/simple object
          setWeather(res.data);
        })
        .catch((err) => {
          console.log(`Fetch Failed ==>> ${err.code}: `, err.message);
        });
    }
  }, [loc]);

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p> Test Test</p>
      <p>Weather App</p>
      <Geolocation setLoc={setLoc} />
      <Search />
    </div>
  );
}

export default App;
