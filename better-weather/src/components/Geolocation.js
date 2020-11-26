import { useEffect } from "react";

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

export default function Geolocation({ setLoc }) {
  const success = (pos) => {
    const coords = pos.coords;
    setLoc({ latitude: coords.latitude, longitude: coords.longitude });
  };

  const errors = (err) => {
    console.warn(`ERROR: ${err.code}: ${err.message}`);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions.query({ name: "geolocation" }).then((res) => {
        if (res.state === "granted") {
          console.log("Location Permission Granted");
          navigator.geolocation.getCurrentPosition(success);
        } else if (res.state === "prompt") {
          console.log("Location Permission Prompted");
          navigator.geolocation.getCurrentPosition(success, errors, options);
        } else if (res.state === "denied") {
          console.log("Location Permission Denied");
          // We need to instruct them on how to allow their browser to share their location
        }
        res.onchange = () => {
          console.log("Location Permissions Changed ==>> ", res.state);
        };
      });
    } else {
      alert("Location unvavailable");
    }
  }, []);

  return null;
}
