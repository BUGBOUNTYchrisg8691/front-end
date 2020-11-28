import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

// import { getLocation } from "./utils/getLocation";
import { formatResp } from "./utils/formatResp";
import { getLocation } from "./store/actions/locationActions";
import { API_KEY, BASE_URL } from "./constants/index";

import Search from "./components/Search";
import Geolocation from "./components/Geolocation";

const initialLoc = {
  latitude: "",
  longitude: "",
};

function App() {
  // const dispatch = useDispatch();
  // const location = useSelector((state) => state.location);

  const [loc, setLoc] = useState(initialLoc);
  // weather state from initial api request using user's geolocation
  // const [weather, setWeather] = useState("");

  // useEffect(() => {
  //   dispatch(getLocation());
  // }, []);

  // useEffect(() => {
  //   // api request for initial weather report based on geolocation, ex:
  //   if (loc.latitude !== "") {
  //     axios
  //       .get(
  //         `${BASE_URL}/current.json?key=${API_KEY}&q=${loc.latitude},${loc.longitude}`
  //       )
  //       .then((res) => {
  //         console.log("Fetch Successful ==>> ", res);
  //         // no need to format this data, it's a relatively light/simple object
  //         setWeather(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(`Fetch Failed ==>> ${err.code}: `, err.message);
  //       });
  //   }
  // }, [loc]);

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
