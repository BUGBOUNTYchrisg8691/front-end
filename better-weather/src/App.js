import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

// import { getLocation } from "./utils/getLocation";
import { formatResp } from "./utils/formatResp";

import Search from "./components/Search";
import { API_KEY, BASE_URL } from "./constants/index";

function App() {
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

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p> Test Test</p>
      <p>Weather App</p>
      <Search />
    </div>
  );
}

export default App;
