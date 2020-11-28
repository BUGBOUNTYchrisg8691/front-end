import axios from "axios";

import {
  BASE_URL,
  API_KEY,
  GET_LOCATION_START,
  GET_LOCATION_SUCCESS,
  GET_LOCATION_PROMPT,
  GET_LOCATION_ERROR,
  GET_LOCATION_FAILURE,
  OPTIONS,
} from "../../constants";
// import { success, errors } from "../../utils/locationHelpers";

const success = (pos) => {
  const coords = pos.coords;
  return { latitude: coords.latitude, longitude: coords.longitude };
};

export const errors = (err) => {
  console.warn(`ERROR: ${err.code}: ${err.message}`);
};

export const getLocation = () => {
  return (dispatch) => {
    dispatch({ type: GET_LOCATION_START });
    navigator.permissions.query({ name: "geolocation" }).then((res) => {
      if (res.state === "granted") {
        navigator.geolocation.getCurrentPosition((pos) => {
          const coords = pos.coords;
          dispatch({
            type: GET_LOCATION_SUCCESS,
            payload: { latitude: coords.latitude, longitude: coords.longitude },
          });
        });
      } else if (res.state === "prompt") {
        navigator.geolocation.getCurrentPosition(
          (pos) => {
            const coords = pos.coords;
            dispatch({
              type: GET_LOCATION_PROMPT,
              payload: {
                latitude: coords.latitude,
                longitude: coords.longitude,
              },
            });
          },
          (err) => {
            dispatch({
              type: GET_LOCATION_ERROR,
              payload: `ERROR: ${err.code}: ${err.message}`,
            });
          },
          OPTIONS
        );
      } else if (res.state === "denied") {
        dispatch({
          type: GET_LOCATION_FAILURE,
          payload: "Location Permission Denied",
        });
      }
    });
  };
};
